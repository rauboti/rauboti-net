deviceAdjustment();
$(document).ready(function() {
  $('.container-group').mouseenter(function() {
    $(this).children('.container-text').animate({ opacity: 1}, 700);
  });
  $('.container-group').mouseleave(function() {
    $(this).children('.container-text').animate({ opacity: 0}, 200);
  });
});
