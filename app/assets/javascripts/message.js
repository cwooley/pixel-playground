class Message {
  constructor(content){
    this.content = content
  }

  render(){
    `<li class="collection-item">${this.content}/li>`
  }

  
}
