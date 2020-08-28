
// ----------------- SmoothScroll -------------------
var scroll = new SmoothScroll('a[href*="#"]',{
    speed: 600
});


// ------------------ Navbar Color Change On Scroll -----------------
$(function () {
  $(document).scroll(function () {
      var $nav = $(".fixed-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});


// ========================================================================= //
//  Typed Js
// ========================================================================= //
var typed = new Typed('.element', {
  strings: ["Rumman Sadik", "a Designer.", "a Developer.", "a Freelancer."],
  typeSpeed: 100,
  loop: true,
});