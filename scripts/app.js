$(document).on("ready", function(){
 var giffyUrl = 'http://api.giphy.com/v1/gifs/search?q=';
 var key = '&api_key=3YQRgKLWq03ivvXzkHjfnpOsIMAg4VRL';
 $('.form-inline').on('submit', function(e) {
   e.preventDefault();
   var searchG = $('.gif-input').val();

   console.log(searchG);
   $.ajax({
     method : 'GET',
     url: giffyUrl + searchG + key,
     success: succQ
     // error: onError
   });
 });
});

function succQ (response){

 for(var i=0; i<response.data.length ; i++) {
   // console.log("img");
   // console.log(response.data[i]);
   // console.log(response.data[i].images.original);
   $('.container').append('<img src="' + response.data[i].images.fixed_height.url + '">');
 }
}
