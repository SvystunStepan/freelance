$( document ).ready(function() {
  
  $('#slider1').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  });

  $('#slider2').slick({
    dots: false,
    arrows: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    adaptiveHeight: true
  });

  $('#slider3').slick({
    dots: false,
    arrows: true,
    speed: 1000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    adaptiveHeight: true
  });


 /*  $('.one-time').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
  }); */


  /* $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  }); */

  
  // Scroll
  /* $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({
      scrollTop: top - 90
    }, 500);
  
  }); */
  

}) 


