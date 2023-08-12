const  nav =document.querySelector('nav');
const navOffset= nav.offsetTop;


    function toggleSticky() {
        if (window.pageYOffset >= navOffset) {
          nav.classList.add('sticky');
        } else {
          nav.classList.remove('sticky');
        }
      }
window.addEventListener('scroll', toggleSticky);