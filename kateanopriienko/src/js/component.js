/**
 * jQuery-viewport-checker - v1.8.8 - 2017-09-25
 * https://github.com/dirkgroenen/jQuery-viewport-checker
 *
 * Copyright (c) 2017 Dirk Groenen
 * Licensed MIT <https://github.com/dirkgroenen/jQuery-viewport-checker/blob/master/LICENSE>
 */

!function(a){a.fn.viewportChecker=function(b){var c={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(a,b){},scrollHorizontal:!1,scrollBox:window};a.extend(c,b);var d=this,e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()};return this.checkElements=function(){var b,f;c.scrollHorizontal?(b=Math.max(a("html").scrollLeft(),a("body").scrollLeft(),a(window).scrollLeft()),f=b+e.width):(b=Math.max(a("html").scrollTop(),a("body").scrollTop(),a(window).scrollTop()),f=b+e.height),d.each(function(){var d=a(this),g={},h={};if(d.data("vp-add-class")&&(h.classToAdd=d.data("vp-add-class")),d.data("vp-remove-class")&&(h.classToRemove=d.data("vp-remove-class")),d.data("vp-add-class-full-view")&&(h.classToAddForFullView=d.data("vp-add-class-full-view")),d.data("vp-keep-add-class")&&(h.removeClassAfterAnimation=d.data("vp-remove-after-animation")),d.data("vp-offset")&&(h.offset=d.data("vp-offset")),d.data("vp-repeat")&&(h.repeat=d.data("vp-repeat")),d.data("vp-scrollHorizontal")&&(h.scrollHorizontal=d.data("vp-scrollHorizontal")),d.data("vp-invertBottomOffset")&&(h.scrollHorizontal=d.data("vp-invertBottomOffset")),a.extend(g,c),a.extend(g,h),!d.data("vp-animated")||g.repeat){String(g.offset).indexOf("%")>0&&(g.offset=parseInt(g.offset)/100*e.height);var i=g.scrollHorizontal?d.offset().left:d.offset().top,j=g.scrollHorizontal?i+d.width():i+d.height(),k=Math.round(i)+g.offset,l=g.scrollHorizontal?k+d.width():k+d.height();g.invertBottomOffset&&(l-=2*g.offset),k<f&&l>b?(d.removeClass(g.classToRemove),d.addClass(g.classToAdd),g.callbackFunction(d,"add"),j<=f&&i>=b?d.addClass(g.classToAddForFullView):d.removeClass(g.classToAddForFullView),d.data("vp-animated",!0),g.removeClassAfterAnimation&&d.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){d.removeClass(g.classToAdd)})):d.hasClass(g.classToAdd)&&g.repeat&&(d.removeClass(g.classToAdd+" "+g.classToAddForFullView),g.callbackFunction(d,"remove"),d.data("vp-animated",!1))}})},("ontouchstart"in window||"onmsgesturechange"in window)&&a(document).bind("touchmove MSPointerMove pointermove",this.checkElements),a(c.scrollBox).bind("load scroll",this.checkElements),a(window).resize(function(b){e={height:a(c.scrollBox).height(),width:a(c.scrollBox).width()},d.checkElements()}),this.checkElements(),this}}(jQuery);

$( document ).ready(function() {

  $('.header-foto, .about-me-foto, .maket').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated zoomIn', 
    offset: '0%'
  });
  $('.up-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-1 fadeInUp', 
    offset: '0%'
  });
  $('.up-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-2 fadeInUp', 
    offset: '0%'
  });
  $('.up-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-3 fadeInUp', 
    offset: '0%'
  });
  $('.up-4').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-4 fadeInUp', 
    offset: '0%'
  });
  $('.up').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInUp', 
    offset: '30%'
  });
  $('.bounce-right-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-1 bounceInRight', 
    offset: '0%'
  });
  $('.bounce-right-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-2 bounceInRight', 
    offset: '0%'
  });
  $('.bounce-right-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-3 bounceInRight', 
    offset: '0%'
  });
  $('.down').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInDown', 
    offset: '30%'
  });
  $('.hover-btn-1').addClass("hidden_animation").viewportChecker({ 
    classToAdd: 'visible animated bounceIn', 
    offset: '0%'
  });
  $('.bounce-down-1').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-1 bounceInDown', 
    offset: '0%'
  });
  $('.bounce-down-2').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-2 bounceInDown', 
    offset: '0%'
  });
  $('.bounce-down-3').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible time-3 bounceInDown', 
    offset: '0%'
  });
  $('.bounce-left').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInLeft', 
    offset: '30%'
  });
  $('.bounce-right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInRight', 
    offset: '30%'
  });
  $('.right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', 
    offset: '0%'
  });
  //=====================

  // Language
  const mainFlag = document.querySelector('.main-flag');
  const languageMenu = document.querySelector('.language-menu');

  mainFlag.addEventListener('click', () => {
    languageMenu.style.display = languageMenu.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', (event) => {
    if (!languageMenu.contains(event.target) && event.target !== mainFlag) {
      languageMenu.style.display = 'none';
    }
  });

  // Функція для зміни мови при кліку на прапорець (ви можете налаштувати зміну мови за вашими потребами)
  function changeLanguage(langCode) {
    // Ваш код для зміни мови на сторінці
    console.log('Мову змінено на:', langCode);
  }
  //=====================

  // КНОПКА "ПОКАЗАТИ БІЛЬШЕ" - "ПРИХОВАТИ"
  const projectCardsContainer = document.querySelector(".project-cards");
  const showMoreBtn = document.getElementById("showMoreBtn");

  showMoreBtn.addEventListener("click", function() {
    if (projectCardsContainer.style.maxHeight) {
      // Контент вже розгорнуто, тому згорнемо його
      projectCardsContainer.style.maxHeight = null;
      showMoreBtn.textContent = "Показати більше";
    } else {
      // Розгортаємо контент
      projectCardsContainer.style.maxHeight = projectCardsContainer.scrollHeight + "px";
      showMoreBtn.textContent = "Приховати";
    }
  });
  //=====================

  // ПАНЕЛЬ СОРТУВАННЯ НА СТОРІНЦІ - "project"
  const buttons = document.querySelectorAll('.page-project-btn');
  const projects = document.querySelector('.projects');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      const filter = button.getAttribute('data-filter');
      filterProjects(filter);
    });
  });

  function filterProjects(filter) {
    // Виконати сортування проектів тут в залежності від обраного фільтру
    // Наприклад, ви можете використовувати класи CSS або додавати/видаляти елементи DOM
    // Приклад: якщо filter === 'graphic', приховати всі проекти, крім тих, що мають клас 'graphic'
  }
  //=====================

  
  /*  //ЗНИКАННЯ ІКОНОК У INPUT
  // Отримуємо посилання на всі поля вводу та зображення
  const inputFields = document.querySelectorAll('input');
  const imageElements = document.querySelectorAll('.input-ico');

  // Функція для зміни видимості зображень
  function toggleImageVisibility(index) {
    if (inputFields[index].value.trim() === '') {
      imageElements[index].style.display = 'inline';
    } else {
      imageElements[index].style.display = 'none';
    }
  }

  // Слухаємо подію введення тексту у кожному полі вводу
  inputFields.forEach((inputField, index) => {
    inputField.addEventListener('input', () => toggleImageVisibility(index));
    // Викликаємо функцію один раз для початкового значення
    toggleImageVisibility(index);
  }); */
  //=====================

  /* $(window).scroll(function () {
    return $('.nav').toggleClass("fixed", $(window).scrollTop() > 0);
  }); */
  //=====================
  
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


