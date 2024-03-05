// $(document).ready(function(){
   
//     $(".owlCarousel").owlCarousel(
//         {
//             center: true,
//             items:1,
//             loop:true,
//             margin:10,
//             autoplay:true,
//             autoplayTimeout:1000,
//             autoplayHoverPause:true,
//             responsive:{
//                 600:{
//                     items:4
//                 }
//             }
//         }
//     );
//     $("#bg_carousel").owlCarousel(
//         {
//             center: true,
//             items:1,
//             loop:false,
//             margin:10,
//             // autoplay:true,
//             // autoplayTimeout:1000,
//             // autoplayHoverPause:true,
//             responsive:{
//                  600:{
//                     items:4
//             }
//              }
//         }
//     );
//   });
// // const section_hero = document.querySelector(".section-hero");
// // const nav_header=document.querySelector(".header");

// // const Observer= new IntersectionObserver(
// //     (entries) => {
// //         const ent = entries[0];
// //         console.log(ent);
// //         ent.isIntersecting === false?nav_header.classList.add("sticky"):nav_header.classList.remove("sticky");

// //  }, 
// //  {
// //     root:null,
// //     rootMargin:"-80px",
// //     threshold:"0",
// // });

// // // Observer.observe(".section_hero");

// // $(document).ready(function() {
// //     var $window = $(window),
// //         win_height_padded = $window.height() * 2;
  
// //     $window.on('scroll', revealOnScroll);
  
// //     function revealOnScroll() {
// //         var scrolled = $window.scrollTop(),
// //             win_height_padded = $window.height() * 1.02;
  
// //         // Showed...
// //         $(".revealOnScroll:not(.animated)").each(function() {
// //             var $this = $(this),
// //                 offsetTop = $this.offset().top;
// //             if (scrolled + win_height_padded > offsetTop) {
// //                 if ($this.data('timeout')) {
// //                     window.setTimeout(function() {
// //                         if ($this.hasClass("path")) {
// //                             $this.addClass($this.data('animation'));
// //                         } else {
// //                             $this.addClass('animated ' + $this.data('animation'));
// //                         }
// //                         function stopTimer() {
// //                             timer.stop;
// //                         }
// //                         $this.animate("", "slow");
// //                     }, parseInt($this.data('timeout'), 10));
// //                 } else {
// //                     $this.addClass('animated ' + $this.data('animation'));
// //                 }
// //             }
// //         });
// //     }
// //   });
// // //   let currentIndex = 0;

// //   function showSlide(index) {
// //     const slides = document.querySelector('.slides');
// //     const slideWidth = document.querySelector('.slide').offsetWidth;
// //     const newPosition = -index * slideWidth;
// //     slides.style.transform = `translateX(${newPosition}px)`;
// //     currentIndex = index;
// //   }
// //   function nextSlide() {
// //     currentIndex = (currentIndex + 1) % document.querySelectorAll('.slide').length;
// //     showSlide(currentIndex);
// //   }
// //   function prevSlide() {
// //     currentIndex = (currentIndex - 1 + document.querySelectorAll('.slide').length) % document.querySelectorAll('.slide').length;
// //     showSlide(currentIndex);
// //   }
document.addEventListener("DOMContentLoaded", function() {
    const openFormButton = document.getElementById('open-form');
    const contactForm = document.getElementById('contact-form');
    const background = document.getElementById('background');

    openFormButton.addEventListener('click', function() {
        // Show the contact form and background
        contactForm.classList.add('visible');
        background.style.display = 'block';
    });

    // Optional: Close the form when clicking outside of it
    background.addEventListener('click', function() {
        contactForm.classList.remove('visible');
        background.style.display = 'none';
    });

    // Prevent clicks within the form from closing it
    contactForm.addEventListener('click', function(event) {
        event.stopPropagation();
    });
});