deviceAdjustment();
$(document).ready(function() {
  $('.container-group').mouseenter(function() {
    $(this).children('.hover-visible').animate({ opacity: 1}, 700);
  });
  $('.container-group').mouseleave(function() {
    $(this).children('.hover-visible').animate({ opacity: 0}, 200);
  });
});
