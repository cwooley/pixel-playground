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
           window.open(response.data.link, '_blank')
           Materialize.toast("What're you waiting for? Check the new tab to see your snapshot.", 4000)
         },
         error: function(error) {
           Materialize.toast("Somewhere, something failed.", 4000)
         }
     });
  }
}
