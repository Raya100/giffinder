/*global $*/

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

$(document).ready(function(){
  
  giphyURLWithSearchTerm();
  
  
});

function giphyURLWithSearchTerm(searchTerm) {
    // write a function that will return a url for the giphy API with
    // the searchTerm provided in the parameters
    var newUrl= "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    return newUrl;
}

function appendImageToBody(srcURL) {
    // write a function that will append an <img> to the body with the
    // URL provided in the parameters
    $('#here').html('<img src=' + srcURL + '>');
}
function callGiphyAPIWithSearchTerm(searchTerm) {
    $.ajax({
      url: giphyURLWithSearchTerm(searchTerm),
      method: "GET",
      success: function(response) {
        var url = response.data[0].images.original.url;
           appendImageToBody(url);
           console.log(response);
//$("body").append("<img src="+response.data[0].images.original.url+"/>");

  },
    }); 
}
$("#gif").click(function(){
  var input= $("#srch-term").val();  
  callGiphyAPIWithSearchTerm(input);
});