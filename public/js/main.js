$(document).ready(function() {
  $('.project-box').mouseover(function() {
    $(this).children('.project-description').animate({ opacity: 1}, 700);
  });
  $('.project-box').mouseleave(function() {
    $(this).children('.project-description').animate({ opacity: 0}, 200);
  });
});
