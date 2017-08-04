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
      let clientId = 'abfc0c3ba309213'
      let imgData = this.convertToImage().src.split(",")[1]
      $.ajax({
          url: 'https://api.imgur.com/3/image',
          headers: {
              'Authorization': `Client-ID ${clientId}`
           },
           type: 'POST',
           data: {
              'image': `${imgData}`,
              'type': 'base64'
           },
           success: function(response) {
              console.log(response)
              debugger;
           },
           error: function(error) {
              console.log(error)
           }

       });
    }
  }
}

let Canvas = createCanvas()
