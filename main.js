//https://stackoverflow.com/questions/26027787/simplify-this-javascript-for-show-one-hide-rest


$(document).ready(function(){
   $('html').animate({scrollTop: 0}, 200);
   console.log("top");
 $(".navigate").click(function() {
      // Hides all images.
      $(".flex-box").hide();
      // Shows appropriate one.
      var imageid = $(this).data("imageid");
       $(".flex-box[data-imageid="+imageid+"]").show().css('display', 'flex');
       console.log( $(".flex-box[data-imageid="+imageid+"]"));
       $('html').animate({scrollTop: 0}, 200);
       console.log("top");
   });
});

// $(document).ready(function(){
//    $("nav li").click(function() {
//    $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
//    $( this ).siblings().addClass("unselected").siblings(".selected").removeClass("unselected");
//    });
// });



function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-up").style.display = "block";
        console.log("scrolling down")
    } else {
        document.getElementById("scroll-up").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

$(document).ready(function(){
   $("#scroll-up").click(function(){
      console.log("scroll to top")
   $('html').animate({scrollTop: 0}, 400, 'linear');
});
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
