// var container = document.getElementById("container");
// var slider = document.getElementById("slider");
// var slides = document.getElementsByClassName("slide").length;
// var buttons = document.getElementsByClassName("btn");

// var currentPosition = 0;
// var currentMargin = 0;
// var slidesPerPage = 0;
// var slidesCount = slides - slidesPerPage;
// // var containerWidth = container.offsetWidth;
// var prevKeyActive = false;
// var nextKeyActive = true;

// window.addEventListener("resize", checkWidth);

// function checkWidth() {
//   //   containerWidth = container.offsetWidth;
//   setParams(containerWidth);
// }

// function setParams(w) {
//   if (w < 551) {
//     slidesPerPage = 1;
//   } else {
//     if (w < 901) {
//       slidesPerPage = 2;
//     } else {
//       if (w < 1101) {
//         slidesPerPage = 3;
//       } else {
//         slidesPerPage = 4;
//       }
//     }
//   }
//   slidesCount = slides - slidesPerPage;
//   if (currentPosition > slidesCount) {
//     currentPosition -= slidesPerPage;
//   }
//   currentMargin = -currentPosition * (100 / slidesPerPage);
//   slider.style.marginLeft = currentMargin + "%";
//   if (currentPosition > 0) {
//     buttons[0].classList.remove("inactive");
//   }
//   if (currentPosition < slidesCount) {
//     buttons[1].classList.remove("inactive");
//   }
//   if (currentPosition >= slidesCount) {
//     buttons[1].classList.add("inactive");
//   }
// }

// setParams();

// function slideRight() {
//   if (currentPosition != 0) {
//     slider.style.marginLeft = currentMargin + 100 / slidesPerPage + "%";
//     currentMargin += 100 / slidesPerPage;
//     currentPosition--;
//   }
//   if (currentPosition === 0) {
//     buttons[0].classList.add("inactive");
//   }
//   if (currentPosition < slidesCount) {
//     buttons[1].classList.remove("inactive");
//   }
// }

// function slideLeft() {
//   if (currentPosition != slidesCount) {
//     slider.style.marginLeft = currentMargin - 100 / slidesPerPage + "%";
//     currentMargin -= 100 / slidesPerPage;
//     currentPosition++;
//   }
//   if (currentPosition == slidesCount) {
//     buttons[1].classList.add("inactive");
//   }
//   if (currentPosition > 0) {
//     buttons[0].classList.remove("inactive");
//   }
// }

$(function() {
    $('.main__bottom-left .floor .floorsBtn button').on('click', function(){
        $('.main__bottom-left .floor .floorsBtn button').removeClass('active');
        $(this).addClass('active');
    })
    $('.left_veritcal_block .camera').on('click', function(e){
        e.preventDefault();
        $('.youtube_popup').addClass('active');
    })
    $('.menu-btn').on('click', function(e) {
      e.preventDefault();
      $(this).toggleClass('menu-btn_active');
      $('.side_menu').toggleClass('active');
    });
    $('.slider-content').slick({
        arrows: true,
    });
    $('.architecture__right').slick({
        arrows: true,
        prevArrow: $('#left-btn'),
        nextArrow: $('#right-btn'),
    });
    if(window.screen.width < 767){ 
        $('.gallery_mob_carousel').slick({
            arrows: true,
            prevArrow: $('#left-btn'),
            nextArrow: $('#right-btn'),
        });
    } else {
        $('.color__bottom.carousel').slick({
            arrows: true,
            prevArrow: $('#left-btn'),
            nextArrow: $('#right-btn'),
        });
    }
    
    $('.slider-left').on('click', function(){
    	$('.slider-container.active .slider-content').slick('slickNext');
    })
    $('.slider-right').on('click', function(){
    	$('.slider-container.active .slider-content').slick('slickPrev');
    })
    $('.tab').on('click', function(){
    	$('.tab').removeClass('active');
    	$(this).addClass('active');
    	$('.slider-container').hide()
    	$('.slider-container').removeClass('active');
    	var tab = $(this).attr('tab-id');
    	console.log(tab);
    	$('#'+tab).addClass('active');
    	$('#'+tab).fadeIn();
    	$('.slider-content').slick("setPosition", 0);
    })   
    $('.close_btn').on('click', function(e){
        e.preventDefault();
        $('.youtube_popup').removeClass('active');
    })
    if(window.screen.width < 767){
        $('.architecture__right').append($('.architecture__left-bottom'));
    }
    if(window.screen.width < 767){
        $('.carousel__right').append($('.carousel__left-btn'));
    }
    if(window.screen.width < 767){
        $('.aboutDeveloper').append($('.slider__top-right'));
    }

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 500, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: true, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

});


// jQuery(function($){
//     $(document).mouseup( function(e){ // событие клика по веб-документу
//         var div = $( ".youtube_popup" ); // тут указываем ID элемента
//         if ( !div.is(e.target) // если клик был не по нашему блоку
//             && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
//             div.hide(); // скрываем его
//         }
//     });
// });