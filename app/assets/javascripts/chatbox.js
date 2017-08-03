class Chatbox {
      constructor(){
        this.messages = Message.getAllMessages
      }

      getMessagesHTML(){
        this.messages.map((message)=>{
          return message.render()
        }).join(' ')
      }

      render(){
        return `<ul class="collection">
                    ${this.getMessagesHTML()}
                </ul>`
      }
}
