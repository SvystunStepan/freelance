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
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    // adaptiveHeight: true,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
  });

  $('#slider3').slick({
    dots: false,
    speed: 1000,
    slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // adaptiveHeight: true
    arrows: true,
    responsive: [{
      breakpoint: 768, 
      settings: {
        arrows: false,
        dots: true
      }
    }]
  });

  if (window.matchMedia("(max-width: 768px)").matches) {
    $('#slider4').slick({
      dots: true,
      arrows: false,
      speed: 2000,
      slidesToShow: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true
    });
    $('#slider5').slick({
      dots: true,
      arrows: false,
      speed: 2000,
      slidesToShow: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true
    });
  }
  

  window.addEventListener('scroll', function() {
    var button = document.querySelector('.floating-button');
    var scrollY = window.scrollY;
  
    if (scrollY > 0) {
      button.style.top = 'auto';
      button.style.bottom = '20px';
    } else {
      button.style.top = '440px';
      button.style.bottom = 'auto';
    }
  });
  



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


