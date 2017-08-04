class ImgurAPI {

  static exportSnapShot(imgBase64) {
    let clientId = 'abfc0c3ba309213'
    $.ajax({
        url: 'https://api.imgur.com/3/image',
        headers: {
            'Authorization': `Client-ID ${clientId}`
         },
         type: 'POST',
         data: {
            'image': `${imgBase64}`,
            'type': 'base64'
         },
         success: function(response) {
            console.log(response)
         },
         error: function(error) {
            console.log(error)
         }
     });
  }
}
