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
    offset: '20%'
  });
  $('.bounce-right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated bounceInRight', 
    offset: '20%'
  });
  $('.right').addClass("hidden_animation").viewportChecker({
    classToAdd: 'visible animated fadeInRight', 
    offset: '0%'
  });
  //=====================

  // Burger-main
  $('.drop-btn').click(function() {
    let dropdown = document.getElementById("dropdown");
    let container = document.querySelector(".blok");
    dropdown.classList.toggle("show");
    container.classList.toggle("change");
  });
  
  window.addEventListener("click", function(event) {
    var dropdowns = document.getElementsByClassName("nav-box-right");
    var containers = document.getElementsByClassName("blok");
    
    if (!event.target.matches('.drop-btn') && !event.target.matches('.bar1') && !event.target.matches('.bar2') && !event.target.matches('.bar3') && !event.target.matches('.blok')) {
      for (var i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        var container = containers[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
          container.classList.remove('change');
        }
      }
    }
  });
  //=====================

  // Language
  const mainFlagDesktop = document.querySelector('.language-switch.desktop .main-flag');
  const languageMenuDesktop = document.querySelector('.language-switch.desktop .language-menu');

  mainFlagDesktop.addEventListener('click', () => {
    languageMenuDesktop.style.display = languageMenuDesktop.style.display === 'none' ? 'block' : 'none';
  });

  const mainFlagMobile = document.querySelector('.language-switch.mobile .main-flag');
  const languageMenuMobile = document.querySelector('.language-switch.mobile .language-menu');

  mainFlagMobile.addEventListener('click', () => {
    languageMenuMobile.style.display = languageMenuMobile.style.display === 'none' ? 'block' : 'none';
  });

  const flagsDesktop = document.querySelectorAll('.language-switch.desktop .language-flag:not(.main-flag)');

  flagsDesktop.forEach(flag => {
    flag.addEventListener('click', () => {
      mainFlagDesktop.src = flag.src;
      mainFlagDesktop.alt = flag.alt;
      languageMenuDesktop.style.display = 'none';
    });
  });

  const flagsMobile = document.querySelectorAll('.language-switch.mobile .language-flag:not(.main-flag)');

  flagsMobile.forEach(flag => {
    flag.addEventListener('click', () => {
      mainFlagMobile.src = flag.src;
      mainFlagMobile.alt = flag.alt;
      languageMenuMobile.style.display = 'none';
    });
  });

/*   const mainFlag = document.querySelector('.main-flag');
  const languageMenu = document.querySelector('.language-menu');

  mainFlag.addEventListener('click', () => {
    languageMenu.style.display = languageMenu.style.display === 'none' ? 'block' : 'none';
  });
  const flags = document.querySelectorAll('.language-flag:not(.main-flag)');

  flags.forEach(flag => {
    flag.addEventListener('click', () => {

      mainFlag.src = flag.src;
      mainFlag.alt = flag.alt;

      languageMenu.style.display = 'none';
    });
  }); */
  //=====================

  // КНОПКА "ПОКАЗАТИ БІЛЬШЕ" - "ПРИХОВАТИ"
  var showMoreBtn = document.getElementById('showMoreBtn');
  var projectCards = document.querySelectorAll('.project-card');
  // Приховує всі блоки, крім перших 4
  for (var i = 4; i < projectCards.length; i++) {
    projectCards[i].classList.add('project-hidden');
  }
  showMoreBtn.addEventListener('click', function() {
    // Перевіряємо, чи є хоча б один прихований блок
    var hiddenBlocks = document.querySelectorAll('.project-card.project-hidden');
    if (hiddenBlocks.length > 0) {
        // Показуємо всі приховані блоки
        for (var i = 0; i < hiddenBlocks.length; i++) {
          hiddenBlocks[i].classList.remove('project-hidden');
        }
        showMoreBtn.textContent = 'Приховати';
    } else {
        // Приховуємо всі блоки, крім перших двох
        for (var i = 4; i < projectCards.length; i++) {
          projectCards[i].classList.add('project-hidden');
        }
        showMoreBtn.textContent = 'Показати більше';
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


