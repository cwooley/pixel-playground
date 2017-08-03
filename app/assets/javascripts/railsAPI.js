class railsAPI {

  static getAll(requestUrl) {
    return $.ajax({
    	type: 'GET',
    	url: `${requestUrl}`,
    	dataType: 'json'
    })
  }

  static putSquare(requestUrl, color) {
    $.ajax({
      type: 'PUT',
      url: `${requestUrl}`,
      data: {
        color: color
      }
    })
  }

}
