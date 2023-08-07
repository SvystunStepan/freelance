//nav
$('#nav').slick({
  infinite: true, // Нескінченне перелистування слайдів
  slidesToShow: 7, // Кількість видимих слайдів одночасно
  slidesToScroll: 1, // Кількість слайдів для прокручування за один раз
  autoplay: true, // Автоматичне перелистування
  autoplaySpeed: 0, // Час перелистування між слайдами (0 мс - без паузи)
  speed: 5000, // Час переміщення слайду (5000 мс - 5 секунд, можна змінити за потребою)
  cssEase: 'linear', // Тип ефекту переходу між слайдами (плавний)
  arrows: false, // Приховати стрілки переключення слайдів (за потребою)
  dots: false, // Приховати крапки навігації (за потребою)
  responsive: [
    {
      breakpoint: 768, // Розмір, при якому мобільна версія застосовується
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 15000
      }
    }
  ]
});

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$( document ).ready(function() {

  /* $('.head').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated slideInUp',
    offset: '0%'
  }); */
  $('.header-img, .speaker-img, .in-img, .reviews-img').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn',
    offset: '30%'
  });
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp',
    offset: '20%'
  });
  $('.up-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInUp',
    offset: '20%'
  });
  $('.up-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInUp',
    offset: '20%'
  });
  $('.up-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeInUp',
    offset: '20%'
  });
  $('.up-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-4 fadeInUp',
    offset: '20%'
  });
  $('.up-5').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-5 fadeInUp',
    offset: '20%'
  });
  $('.down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: '20%'
  });
  $('.right, .top-10-block').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: '20%'
  });
  $('.right-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInRight',
    offset: '20%'
  });
  $('.right-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInRight',
    offset: '20%'
  });
  $('.left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: '20%'
  });
  /* $('.left-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-1 fadeInLeft',
    offset: '20%'
  });
  $('.left-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-2 fadeInLeft',
    offset: '20%'
  });
  $('.flip').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated flipInY',
    offset: '20%'
  }); */
  $('.in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 fadeIn',
    offset: '30%'
  });
  /* $('.bounce-in').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceIn',
    offset: '20%'
  }); */
  $('.bounce-left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 bounceInLeft',
    offset: '20%'
  });
  $('.bounce-right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated-3 bounceInRight',
    offset: '20%'
  });
  /* $('.bounce-up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInUp',
    offset: '20%'
  });
  $('.bounce-down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInDown',
    offset: '20%'
  }); */
  $('.results').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated rotateIn',
    offset: '30%'
  });

  /* //фіксована кнопка desctop
  window.addEventListener('scroll', function() {
    let block = document.querySelector('.float');
    let priceBlock = document.getElementById('price');
    let bannerBlock = document.getElementById('banner');
    let scrollY = window.scrollY;
    let priceBlockTop = priceBlock.offsetTop;
    let priceBlockHeight = priceBlock.offsetHeight;
    let priceBlockBottom = priceBlockTop + priceBlockHeight;
    let bannerBlockTop = bannerBlock.offsetTop;
    let bannerBlockHeight = bannerBlock.offsetHeight;
    let bannerBlockBottom = bannerBlockTop + bannerBlockHeight;

    //стає на місце при знаходженні на блоці "banner"
    if (scrollY < bannerBlockBottom) {
      block.style.position = 'relative'; //static
      // block.style.bottom = '0px';
      // block.style.left = '50%';
      // block.style.transform = 'translateX(-50%)';
      // block.style.top = '0';
      // block.style.bottom = '0';
    } else {
      block.style.position = 'fixed';
      block.style.top = 'auto';
      block.style.bottom = '20px';
      block.style.left = '50%';
      block.style.transform = 'translateX(-50%)';
    }

    //зникає при знаходженні на блоці "price"
    if (scrollY > priceBlockTop && scrollY < priceBlockBottom) {
      block.style.display = 'none';
    } else {
      block.style.display = 'block';
    }
  }); */

  // Scroll
  $('.scroll').click(function (e) {
    event.preventDefault();
    let id = $(this).attr('href'),
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
    autoplaySpeed: 3000
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
    adaptiveHeight: true,
    arrows: true,
  });

  //accardion
  const accordions = document.querySelectorAll(".accordion");
  const contents = document.querySelectorAll(".accordion-content");
  const arrows = document.querySelectorAll(".arrow");
  const bgArrows = document.querySelectorAll(".bg-arrow");

  // Функція для зміни стилів активного елемента
  const setActiveStyle = (index) => {
    // Спочатку змінимо стилі всіх елементів .bg-arrow
    bgArrows.forEach((bgArrow, i) => {
      if (i === index) {
        bgArrow.style.backgroundColor = "#FF4E7C";
      } else {
        bgArrow.style.backgroundColor = "#4343FF";
      }
    });

    // Змінимо стилі всіх елементів .arrow
    arrows.forEach((arrow, i) => {
      if (i === index) {
        arrow.style.transform = "rotate(-135deg)";
      } else {
        arrow.style.transform = "rotate(45deg)";
      }
    });
  };

  // Функція для обробки кліку на акордеон
  const active = (item, index) => {
    contents.forEach((content, i) => {
      if (i !== index) {
        content.style.height = 0;
      }
    });
    item.style.height = `${item.scrollHeight}px`;
    setActiveStyle(index);
  };

  // Додали обробник кліку на всі кнопки акордеону
  accordions.forEach((accordion, i) => {
    accordion.addEventListener("click", () => active(contents[i], i));
  });


})