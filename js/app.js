
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

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //

// external js: isotope.pkgd.js


// init Isotope
var $grid = $('.grid').isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRows',
});

// bind filter button click
$('#filters').on( 'click', 'button', function() {
  var filterValue = $( this ).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// change is-checked class on buttons
$('.button-group').each( function( i, buttonGroup ) {
  var $buttonGroup = $( buttonGroup );
  $buttonGroup.on( 'click', 'button', function() {
    $buttonGroup.find('.active').removeClass('active');
    $( this ).addClass('active');
  });
});
  
