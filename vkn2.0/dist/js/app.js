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

    window.addEventListener('scroll', function() {
      var a = document.querySelector('.floating-button');
      var scrollY = window.scrollY;
    
      a.addEventListener('click', function() {
        a.style.display = 'none';
      });
      
      if (scrollY > 0) {
        a.style.top = 'auto';
        a.style.bottom = '20px';
      } else {
        a.style.top = '440px';
        a.style.bottom = 'auto';
      }
    });
  }
  

  


  
  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({
      scrollTop: top - 0
    }, 1500);
  });
  

}) 


