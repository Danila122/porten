function ibg(){

  let ibg = document.querySelectorAll(".ibg");
    
    for (let i = 0; i < ibg.length; i++) {
      let img = ibg[i].querySelector('img')

      if(img){
        ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
      }
    }
  }
  
  ibg();