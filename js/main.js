
/* Nav Toggle */ 
let nav = $("#nav");
let navToggle = $("#navToggle");
  
$("#navToggle").on("click", function(event) {
  event.preventDefault();
  nav.toggleClass("show");
});


$('.nav-toggle').on('click', function(event){
  $('.nav-toggle').toggleClass('opened');
  $('#body').toggleClass('no-scroll');
});

$('.nav__link').on('click', function(event){
  $('#body').removeClass('no-scroll');
  $('.nav').removeClass('show');
  $('.nav-toggle').removeClass('opened');
});



/* Smooth Scroll */
$("[data-scroll]").on("click", function(event) {
  event.preventDefault();
      
    let elementId = $(this).data(`scroll`);
    let elementOffset = $(elementId).offset().top;
              
$("html, body").animate({
  scrollTop: elementOffset - 50
  }, 600);
});



/* Scroll Up Button */
  
$(document).ready(function() { //when document is ready
$(window).scroll(function() { //when webpage is scrolled
  if ($(this).scrollTop() > 500) { //if scroll from top is more than 500
$('.scroll-up').fadeIn(); //display element with class 'top-scroll'; opacity increases
  } else { //if not
$('.scroll-up').fadeOut(); //hide element with class 'top-scroll'; opacity decreases
    }
  });
});


/* Pricing section Slider */

$('.pricing__offer-wrapper').slick({
  arrows: true,
  dots: true,
});

/* Sponsor section Slider */

$('.sponsor__slides').slick({
  arrows: true,
  dots: false,
  autoplay: true,
  autoplaySpeed: 5000,
});