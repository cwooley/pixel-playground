let colors = ['maroon', 'red', 'orange', 'yellow', 'lime', 'olive', 'green', 'cyan', 'teal', 'blue', 'navy', 'purple', 'magenta', 'gray', 'black', 'white']

class ColorPalette {

  constructor(activeColor) {
    if (!activeColor) {
      this.activeColor = 'white'
    } else {
      this.activeColor = activeColor
    }
  }

  swatchHtml(color) {
    let divClass = "color-picker"
    if (color === this.activeColor) {
      divClass += " activeColor"
    }
    return `<div class="${divClass}" data-color="${color}"" style="background-color: ${color};">
    </div>`
  }

  render() {
    let HTML = colors.map((color)=>{
      return this.swatchHtml(color)
    }).join(' ')
    $('.color-palette').empty()
    $('.color-palette').append(HTML)
  }

  selectColor(color) {
    this.activeColor = color
    this.render()
  }

  // For tab-to-select-next-color
  // (addTabToSwitchColorListener)
  findAndSelectNextColor(color) {
    let nextIndex = colors.findIndex(color) + 1
    if ( nextIndex === 16 ) {
      nextIndex = 0
    }
    let nextColor = colors[nextIndex]
    this.activeColor = nextColor
  }

  toggleSelector() {
    $('#btn-toggle-palette').on('click', (event) => {
      $('.color-palette').toggle()
    })
  }

}
