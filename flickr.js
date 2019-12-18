var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://www.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=7b988aa71579dbe7ee1460cf477a327d&gallery_id=72157704515204635&per_page=&format=json&nojsoncallback=1",
    "method": "GET",
    "headers": {}
  }
  
  $.ajax(settings).done(function (data) {
  
  
    $.each( data.photos.photo, function(i, gp ) {
  
      if (i<6) {
        var farmId = gp.farm;
        var serverId = gp.server;
        var id = gp.id;
        var secret = gp.secret;
  
        console.log(farmId + ", " + serverId + ", " + id + ", " + secret);
  
        //  https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}.jpg
  
        $(".flickr").append('<img src="https://farm' + farmId + '.staticflickr.com/' + serverId + '/' + id + '_' + secret + '.jpg"/>');
  
    }
  
    });
  
  
  });