let colors = ['black', 'maroon', 'green', 'navy', 'white', 'red', 'lime', 'blue', 'gray', 'purple', 'orange', 'cyan', 'olive', 'yellow', 'magenta', 'teal' ]
class ColorPalette {

constructor(activeColor){
  if (!activeColor){
    this.activeColor = 'rgb(255,255,255)'
  } else {
    this.activeColor = activeColor
  }
}

render(){

  let HTML = colors.map((color)=>{
    return `<div class="color-picker" data-color="${color}" style="background-color: ${color}; cursor:pointer; width: 25px; height: 25px; border-radius: 50%; display: inline-block; float: right;">
    </div>`
  }).join(' ')
  $('#palette-goes-here').empty()
  $('#palette-goes-here').append(HTML)
}

}
