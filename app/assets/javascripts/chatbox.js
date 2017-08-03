function createChatBox(){
  return class {
        constructor(){
          this.messages = []
        }

        getMessagesHTML(){
          return this.messages.map((message)=>{
            return message.render()
          }).join(' ')
        }
        renderChatForm(){
          return `<input type="text" id="chat-message" class="chat">
          <button class="btn waves-effect waves-light chat deep-purple darken-4" onClick="sendChatMessage()" type="submit" name="action">Submit<i class="material-icons right">send</i></button>`
        }

        render(){
          return `<ul class="collection chat">
                      ${this.getMessagesHTML()}
                  </ul>`
        }

  }

}

let ChatBox = createChatBox()
