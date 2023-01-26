import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

const swiper = new Swiper('.image-slider__swiper', {

  //Стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  //Навигация 
  //Буллеты, текущее положение, прогрессбар
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,

  },


  keyboard: {
    enabled: true,
    onlyInViewport: true, 
  },

  autoHeight: true, 
  slidesPerView: 4,
  watchOverFlow: true, 
  spaceBetween: 23, 
  slidesPerGroup: 1,
  centeredSlides: false,
  loop: true, 
  freeMode: true, 

  autoplay: {
    delay: 2000, 
    spotOnLastSlide: false, 
    disableOnInteraction: false, 
  },
  speed: 800,

  effect: 'slide',  

  breakpoints: {
    1300: {
      slidesPerView: 4,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 0,
    },

    700:{
      slidesPerView: 2,
    },

    320:{
      slidesPerView: 1,
    },
    100:{
      slidesPerView: 1,
    },
  },
})


export default swiper