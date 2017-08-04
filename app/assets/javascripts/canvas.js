function createCanvas() {

  return class {
    constructor(html) {
    // takes in an html canvas element
      this.html = html;
      this.context = html.getContext("2d");
    }
    convertToImage() {
    let image = new Image()
    image.src = this.html.toDataURL("image/png")
    return image
    }
    render() {
      store.squares.forEach((square)=>{square.render(canvas)})
    }
    getMousePosition(event) {
      let boundingRect = canvas.html.getBoundingClientRect()
      return {
        x: Math.round(event.clientX - boundingRect.left),
        y: Math.round(event.clientY - boundingRect.top)
      }
    }
    exportSnapshotToImgur() {
      let snapshot = this.convertToImage().src.split(",")[1]
      ImgurAPI.exportSnapShot(snapshot)
    }
  }
}

let Canvas = createCanvas()
