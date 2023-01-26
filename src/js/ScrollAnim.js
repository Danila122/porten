

class ScrollAnim{
  constructor(){
    this.animItems = document.querySelectorAll('._anim_items');
    
  }

  //Метод возвращает позицию объекта относительно верха сайта
  offset(elem){
    const rect = elem.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop;
  }

  animOnScroll(){
    
    if(this.animItems.length > 0){
      
      this.animItems.forEach(animItem => {
        
        const animItemHeight = animItem.offsetHeight; //высота элемента
        const animItemOffset = this.offset(animItem);//позиция объекта относительно верха сайта
        const animStart = 4; //коэффициент регулирует момента старта анимации (1/4)
  
        let animItemPoint = window.innerHeight - animItemHeight/animStart;
  
        //проверка, если анимируемый объект выше окна браузера
        if(animItemHeight > window.innerHeight){
  
          animItemPoint = window.innerHeight - window.innerHeight/animStart;
        }

        if((window.pageYOffset > animItemOffset - animItemPoint) && window.pageYOffset<(animItemOffset+animItemHeight)){

          animItem.classList.add('_active');
        }else{
          if(!animItem.classList.contains('_anim-no-hide')){ // отменяем анимацию при вопторном скролле на елемент
            animItem.classList.remove('_active');
          }
        }
      })
     
    }
  }

  init(){
    
    setTimeout(()=>{
      this.animOnScroll()

    },300)

    addEventListener('scroll', ()=>this.animOnScroll())
  }
}

new ScrollAnim().init()