import '../index.html';
import '../scss/style.scss';
import ibg from './ibg';
import Swiper from './Swiper';
import ScrollAnim from './ScrollAnim';


class App{

  activeOnMenuBurger(){
    let menuBurger = document.querySelector('.menu__burger');
    let menuBody = document.querySelector('.menu__body');
    let body = document.querySelector('body');

    menuBurger.addEventListener('click', ()=>{
      menuBurger.classList.toggle('active');
      menuBody.classList.toggle('active');
      body.classList.toggle('lock');
    })
  }

  init(){
    this.activeOnMenuBurger()
  }
}

new App().init()