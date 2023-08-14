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

function scrollToTop(){
  window.scrollTo({
   top:0,
   behavior:"smooth"
  });
}

window.onscroll = function() {
  var scrollToTopBtn = document.getElementById("#scroll-to-top-btn");
  if (window.scrollY >= 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
}; 

function toggleMenu(){
  const navbar=document.querySelector('nav ul');
  navbar.classList.toggle('active');
}
const navbar  =document.querySelector('.navbar-toggle');
navbarToggle.addEventListener('click',toggleMenu);