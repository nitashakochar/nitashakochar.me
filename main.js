//https://stackoverflow.com/questions/26027787/simplify-this-javascript-for-show-one-hide-rest


// $(document).ready(function(){
//    $('html').animate({scrollTop: 0}, 200);
//    console.log("top");
//  $(".navigate").click(function() {
//       // Hides all images.
//       $(".flex-box").hide();
//       // Shows appropriate one.
//       var imageid = $(this).data("imageid");
//        $(".flex-box[data-imageid="+imageid+"]").show().css('display', 'flex');
//        console.log( $(".flex-box[data-imageid="+imageid+"]"));
//        $('html').animate({scrollTop: 0}, 200);
//        console.log("top");
//    });
// });

// $(document).ready(function(){
//    $("nav li").click(function() {
//    $( this ).addClass( "selected" ).siblings(".selected").removeClass("selected");
//    $( this ).siblings().addClass("unselected").siblings(".selected").removeClass("unselected");
//    });
// });

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}



var slideIndex = 1;
showDivs2(slideIndex);

function plusDivs2(n) {
  showDivs2(slideIndex += n);
  console.log(slideIndex);
}

function showDivs2(n) {
  var i;
  var x = document.getElementsByClassName("mySlides2");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}



//
// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scroll-up").style.display = "block";
//     console.log("scrolling down")
//   } else if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20) {
//     document.getElementById("scroll-up").style.display = "block";
//     console.log("scrolling down")
//   } else {
//     document.getElementById("scroll-up").style.display = "none";
//   }
// }
//
// //When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }
//
// if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
//   window.scrollTo(200, 100) // first value for left offset, second value for top offset
// } else {
//   $(document).ready(function() {
//     $("#scroll-up").click(function() {
//       console.log("scroll to top")
//       $('html').animate({
//         scrollTop: 0
//       }, 400, 'linear');
//     });
//   });
// }

// $(document).ready(function(){
//    $("#scroll-up").click(function(){
//       console.log("scroll to top")
//    $('html').animate({scrollTop: 0}, 400, 'linear');
// });
// });

// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {
//   scrollFunction()
// };