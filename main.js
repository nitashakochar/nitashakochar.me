//https://stackoverflow.com/questions/26027787/simplify-this-javascript-for-show-one-hide-rest

$(document).ready(function(){
 $(".navigate").click(function() {
      // Hides all images.
      $(".flex-box").hide();
      // Shows appropriate one.
      var imageid = $(this).data("imageid");
       $(".flex-box[data-imageid="+imageid+"]").show().css('display', 'flex');
       console.log( $(".flex-box[data-imageid="+imageid+"]"))
   });
});
