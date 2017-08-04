store = { squares: []}
let canvas
const palette = new ColorPalette()
const chat = new ChatBox

$('document').ready(function(){
  let squaresUrl = `${window.location.href}squares`
  RailsAPI.getAll(squaresUrl)
  .then(resp => populateSquareStore(resp))
  .then(() => makeCanvas())
  .then(canvas => canvas.render())
  .then(() => addCanvasListener())
  .then(() => addSnapShotListener())

  palette.render()
  addPaletteListener()
  renderChatInput()
  renderChatBox()

  // Focus with keyboard/enter to send
  enterToSend()
  typeToFocus()
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
  let msgContent = `${sessionStorage.SessionName}: ${$('#chat-message').val()}`
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

function populateSquareStore(resp) {
  resp.forEach((square)=>{new Square(square.x, square.y, square.color, square.id)})
}

function makeCanvas() {
  return canvas = new Canvas(document.getElementById('myCanvas'));
}

function addCanvasListener() {
  canvas.html.addEventListener('click', function(e){
    let coords = canvas.getMousePosition(e)
  	let square = Square.findByCoords(coords.x, coords.y)
    square.color = palette.activeColor
    let url = `${window.location.href}squares/${square.id}`
    // update Database & Re-Render
    RailsAPI.putSquare(url, square.color)
  	canvas.render()
  })
}

function addSnapShotListener() {
  $('body').on('click', '#btn-snapshot', function() {
    canvas.exportSnapshotToImgur()
    })
}

function addPaletteListener() {
  $('body').on('click', '.color-picker', function(){
    palette.selectColor(this.dataset.color)
  })
}

function onDataReceived(data) {
  var square = Square.findByCoords(data.x, data.y)
  square.color = data.color
  canvas.render()
}

function chatReceived(data){
  new Message(data.content)
}

function sendToClipboard(value) {
  $('#imgur-url').val(value)
  $('#imgur-url').select()
  document.execCommand('copy')
}
