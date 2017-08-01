store = { squares: []}

$('document').ready(function(){
  // renderGrid(ctx)
  // palette.render()

  // $('body').on('click', '.color-picker', function(){
  //   palette.activeColor = this.dataset.color
  // })
  populateSquareStore()
  // const canvas = document.getElementById('myCanvas');
  // const ctx = canvas.getContext("2d");
});


function populateSquareStore(){
  $.ajax({
  	type: 'GET',
  	url: 'http://localhost:3000/squares',
  	dataType: 'json',
  	success: function(resp){
  	resp.forEach((square)=>{
  	new Square(square.x, square.y, square.color)
  		})
  }

  })
}





function renderGrid(canvasContext){
  store.squares.forEach((square)=>{
    square.render(canvasContext)
  })
}
