function createSquare(){
  const width = 10
  const height = 10

  return class {
    constructor(x,y,color, id){
      this.width = width
      this.height = height
      this.x = x
      this.y = y
      if (!color){
        this.color = 'rgb(0,0,0)'
      } else {
        this.color = color
      }
      this.id = id
      store.squares.push(this)
    }
    render(canvasContext){
      canvasContext.fillStyle = this.color
      canvasContext.fillRect(this.x, this.y, width, height)
    }

    static findByCoords(x,y){
      while(x % 10 != 0 ){
    		x -= 1
      }
    	while(y % 10 != 0 ){
    		y -= 1
      }
      return store.squares.filter((square)=>{
        return square.x === x && square.y === y
      })[0]
    }

  }
}
let Square = createSquare()
