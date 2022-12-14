
/* Scroll to top Functionality */

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*------------------------------*/

var swiper = new Swiper(".mySwiper", {
      
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
  
    // },
    loop:true,
    slidesPerView: 7,
    spaceBetween: 0,
    autoplay:{
        delay:3000
    },
    speed: 2000,
    breakpoints:{
        
        1199: {
        slidesPerView: 7
         },
         991: {
        slidesPerView: 3
         },

         767: {
        slidesPerView: 2
         },
         100: {
        slidesPerView: 1
         },
    }
  });



  var swiper = new Swiper(".mySwiperdata", {
      
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  
    },
    loop:true,
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 2000,
    autoplay:{
        delay:3000
    }
   
  });
  const date = new Date();
  document.getElementById("year").innerHTML=date.getFullYear()