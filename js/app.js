// Top bar js

// Scroll Reveal
function revealOnScroll() {
  let reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

// Sticky Header
function stickyHeader() {
  let header = document.getElementById("topbar");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Events
window.addEventListener("scroll", () => {
  revealOnScroll();
  stickyHeader();
});




// Banner slider js

$(document).ready(function(){
  var $track = $('.slider-track');

  $('.vertical-slider').hover(
    function() { $track.css('animation-play-state', 'paused'); },
    function() { $track.css('animation-play-state', 'running'); }
  );
});


// Logo slider JS

$('.logo-slider .owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// Exhibition JS

$('.exhibition .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots: false,
    navText: [
    '<i class="fa-solid fa-circle-arrow-left"></i>',   // custom prev icon
    '<i class="fa-solid fa-circle-arrow-right"></i>'  // custom next icon
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4.5
        }
    }
})