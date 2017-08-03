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

// Enter to send event listener
function enterToSend() {
  $('body').keydown((event) => {
    if ( event.keyCode == 13 ) {
      sendChatMessage();
    }
  })
};


// Type A-Z or 0-9 to focus on chatbox input
function typeToFocus() {
  $('body').keydown((event) => {
    // Select A-Z or 0-9
    if ( (event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 48 && event.keyCode <= 57) ) {
      $('#chat-message').focus();
    }
  })
};
