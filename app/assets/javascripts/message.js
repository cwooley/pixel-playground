class Message {
  constructor(content){
    this.content = content
    chat.messages.push(this)
    renderChatBox();
  }

  render(){
    return `<li class="collection-item chat">${this.content}</li>`
  }

  static getAllMessages(){
    return allMessages
  }
}
