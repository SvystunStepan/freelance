$( document ).ready(function() {

  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
  
    $('body,html').animate({
      scrollTop: top - -20
    }, 1500);
  });


  //головний слайдер фото
  $('#slider1').slick({
    dots: true,
    arrows: false,
    speed: 2000,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 5000
    // adaptiveHeight: true
  });

  //слайдер телеканали
  $('#slider2').slick({
    dots: false,
    arrows: true,
    speed: 3000,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [{
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }]
  });

  //слайдер відгуків
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
    
    //сдайдер модулів
    $('#slider4').slick({
      dots: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true
    });

    //сдайдер бонусів
    $('#slider5').slick({
      dots: true,
      arrows: false,
      speed: 1000,
      slidesToShow: 1,
      // autoplay: true,
      // autoplaySpeed: 5000,
      adaptiveHeight: true
    });

    //фіксована кнопка мобіла 
    window.addEventListener('scroll', function() {
      var a = document.querySelector('.floating-button');
      var priceBlock = document.getElementById('price');
      var scrollY = window.scrollY;
      var priceBlockTop = priceBlock.offsetTop;
      var priceBlockHeight = priceBlock.offsetHeight;
      var priceBlockBottom = priceBlockTop + priceBlockHeight;
      
      if (scrollY > 0) {
        a.style.top = 'auto';
        a.style.bottom = '20px';
      } else {
        a.style.top = '450px';
        a.style.bottom = 'auto';
      }
      //зникає при знаходженні на блоці "price"
      if (scrollY > priceBlockTop && scrollY < priceBlockBottom) {
        a.style.display = 'none';
      } else {
        a.style.display = 'block';
      }

    });

  }
  

  /* if (/Mobi|Android/i.test(navigator.userAgent)) {
    // Код, який виконується на мобільних пристроях
  } else {
    // Код, який виконується на інших пристроях
  } */
}) 


