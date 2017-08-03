store = { squares: []}
let canvas
const palette = new ColorPalette()

$('document').ready(function() {
  let squaresUrl = `${window.location.href}squares`
  railsAPI.getAll(squaresUrl)
  .then(resp => populateSquareStore(resp))
  .then(() => makeCanvas())
  .then(canvas => canvas.render())
  .then(() => addCanvasListener())

  palette.render()
  addPaletteListener()
})

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
    railsAPI.putSquare(url, square.color)
  	canvas.render()
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
