store = { squares: []}
let canvas
let ctx
const palette = new ColorPalette()
$('document').ready(function(){

  makeAPICall()
  .then(resp => populateSquareStore(resp))
  .then(() => makeCanvas())
  .then(ctx => renderGrid(ctx))
  .then(() => addCanvasListener())

  palette.render()
  addPalleteListener()

})

function addCanvasListener(){
  canvas.addEventListener('click', function(e){
    let x = e.layerX
  	let y = e.layerY
  	let square = Square.findByCoords(x,y)
    square.color = palette.activeColor
    // update Database & Re-Render
    $.ajax({
      type: 'PUT',
      url: `http://localhost:3000/squares/${square.id}`,
      data: {
        color: square.color
      }
    })
  	renderGrid(ctx)
  })
}

function addPalleteListener(){
  $('body').on('click', '.color-picker', function(){
    palette.activeColor = this.dataset.color
  })
}


function makeAPICall(){
  return $.ajax({
  	type: 'GET',
  	url: `http://localhost:3000/squares`,
  	dataType: 'json'
  })
}

function makeCanvas(){
  canvas = document.getElementById('myCanvas');
  return ctx = canvas.getContext("2d");

}

function populateSquareStore(resp){
  resp.forEach((square)=>{
  new Square(square.x, square.y, square.color, square.id)
    })
}

function renderGrid(canvasContext){
  store.squares.forEach((square)=>{
    square.render(canvasContext)
  })
}
