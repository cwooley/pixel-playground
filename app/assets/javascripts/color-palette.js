
let colors = ['maroon', 'red', 'orange', 'yellow', 'lime', 'olive', 'green', 'cyan', 'teal', 'blue', 'navy', 'purple', 'magenta', 'gray', 'black', 'white']

class ColorPalette {

constructor(activeColor){
  if (!activeColor){
    this.activeColor = 'white'
  } else {
    this.activeColor = activeColor
  }
}

render(){
  let HTML = colors.map((color)=>{
    return `<div class="color-picker" data-color="${color}" style="background-color: ${color};">
    </div>`
  }).join(' ')
  $('.color-palette').empty()
  $('.color-palette').append(HTML)
}

}
