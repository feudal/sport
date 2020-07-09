$(document).ready(function() {
  $('.big-slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: true,
  });
  $('.slider').slick({
  	dots: false,
  	adaptiveHeight: true,
  })

});