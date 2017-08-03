store = { squares: []}
let canvas
let ctx
const palette = new ColorPalette()


const chat = new ChatBox
$('document').ready(function(){

  makeAPICall()
  .then(resp => populateSquareStore(resp))
  .then(() => makeCanvas())
  .then(ctx => renderGrid(ctx))
  .then(() => addCanvasListener())

  palette.render()
  addPalleteListener()

  renderChatInput()
  renderChatBox()

})

function renderChatInput(){
  $('#chat-form').html(chat.renderChatForm())

}

function renderChatBox(){
  $('#chat-goes-here').html(chat.render())
  let messages = $('#chat-goes-here');
  messages.scrollTop(messages.prop("scrollHeight"))
}


function sendChatMessage(){
  let msgContent = $('#chat-message').val()
  if (msgContent != ""){
    $('#chat-message').val('')
    $.ajax({
      type: 'POST',
      url: `${window.location.href}chat`,
      data: {
        content: msgContent
      }
    })
  }
  $('#chat-message').focus()
}


function getMousePosition(e){
  let boundingRect = canvas.getBoundingClientRect();
  return {
    x: Math.round(e.clientX - boundingRect.left),
    y: Math.round(e.clientY - boundingRect.top)
  };
}

function addCanvasListener(){
  canvas.addEventListener('click', function(e){
    let coords = getMousePosition(e)
    let x = coords.x
    let y = coords.y
  	let square = Square.findByCoords(x,y)
    square.color = palette.activeColor
    // update Database & Re-Render
    $.ajax({
      type: 'PUT',
      url: `${window.location.href}squares/${square.id}`,
      data: {
        color: square.color
      }
    })
  	renderGrid(ctx)
  })
}

function addPalleteListener(){
  $('body').on('click', '.color-picker', function(){
    // palette.activeColor = this.dataset.color
    palette.selectColor(this.dataset.color)
  })
}


function makeAPICall(){
  return $.ajax({
  	type: 'GET',
  	url: `${window.location.href}squares`,
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

function onDataReceived(data) {
  var square = Square.findByCoords(data.x, data.y)
  square.color = data.color
  renderGrid(ctx)
}



function chatReceived(data){
  new Message(data.content)
}
