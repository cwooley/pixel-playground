let allMessages = []
class Message {
  constructor(content){
    this.content = content
    allMessages.push(this)
  }

  render(){
    `<li class="collection-item">${this.content}/li>`
  }

  static getAllMessages(){
    return allMessages
  }
}
