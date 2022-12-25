
window.addEventListener("DOMContentLoaded" , () => {
  const loader = document.querySelector(".loader-wrapper");
  setTimeout(function () {
    loader.style.opacity = 0;
    setTimeout(function () {
      loader.style.display = "none";
    }, 1500);
  }, 2000);

  window.addEventListener('scroll' ,  () => {
    let navbar = document.querySelector('.nav');
    navbar.classList.toggle('navbar-fixed-bg' , window.scrollY > 5);
    })
    
    

    // length max-text
  const textSection = document.querySelectorAll('.section__text');

  

    function textMaxLength(text) {
      let textArr = text.split(' ')
      if (textArr.length > 1) {
        let sliceArr = textArr.slice(0, 49)
        let joinAr=sliceArr.join(' ')
        return joinAr + '...'
      }else{
        return text
      }
    
    }
    
    textSection.forEach(item => {
        console.log(item.textContent);
        let maxText = ''
        maxText = item.textContent
        textMaxLength(maxText)
        console.log(textMaxLength(maxText));
    })


  });


  const body=document.querySelector('body')
    const block=document.createElement('div')
    const img=document.createElement('img')
    
    
    function card(div) {
      body.style.overflow='hidden'
      const src=div.querySelector('.card__img').getAttribute('src')
      block.classList.add('zoom-full')
      img.classList.add('zoom-img')
      img.setAttribute('src',src)
      block.appendChild(img)
      body.appendChild(block)
    }
    block.onclick=function(){
      block.remove()
      body.style.overflow='inherit'
    }




  // window.onload = () => {
  //   // (A) GET LIGHTBOX & ALL .ZOOMD IMAGES
  //   let all = document.getElementsByClassName("zoomD"),
  //       lightbox = document.getElementById("lightbox");
   
  //   // (B) CLICK TO SHOW IMAGE IN LIGHTBOX
  //   // * SIMPLY CLONE INTO LIGHTBOX & SHOW
  //   if (all.length>0) { for (let i of all) {
  //     i.onclick = () => {
  //       let clone = i.cloneNode();
  //       clone.className = "";
  //       lightbox.innerHTML = "";
  //       lightbox.appendChild(clone);
  //       lightbox.className = "show";
  //     };
  //   }}
   
  //   // (C) CLICK TO CLOSE LIGHTBOX
  //   lightbox.onclick = () => {
  //     lightbox.className = "";
  //   };
  // };


  const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 1);
        }else{
          counter.innerText = value;
        }
     
   }
   
   animate();
});


