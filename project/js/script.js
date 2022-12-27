
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
    
    

  const counters = document.querySelectorAll('.value');
const speed = 200;

counters.forEach( counter => {
   const animate = () => {
      const value = +counter.getAttribute('akhi');
      const data = +counter.innerText;
     
      const time = value / speed;
     if(data < value) {
          counter.innerText = Math.ceil(data + time);
          setTimeout(animate, 4);
        }else{
          counter.innerText = value;
        }

        console.log(counter.clientHeight);
   }
   animate();
});

window.addEventListener('scroll', function () { 
  if (window.pageYOffset > 100) { 
    toTop.style.display = "flex" 
  } else { 
    toTop.style.display = "none" 
  } 
})

