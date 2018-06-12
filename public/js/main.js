const projects = [
  {name: 'Scarecrow', link: '/scarecrow', description: 'Guild site created for the upcoming release of WoW Classic'}
];

$(document).ready(function() {
  showPage('pHome');
  $('.menu-button-big:first').addClass('menu-button-selected');

  $('.menu-button-big').click(function() {
    $('.menu-button-big').removeClass('menu-button-selected');
    $(this).addClass('menu-button-selected');
    showPage($(this).attr('id'));
  });
});

function showPage(page) {
  if (page === 'pHome'){
    $('#pageContainer').html('<div class="container-rauboti">This is the Home page</div>');
  } else if (page === 'pProjects') {
    $('#pageContainer').html('<div id="cntrCode" class="container-rauboti"><h1># Project list</h1></div>');
    for (var i in projects) {
      $('#cntrCode').append('<a href="' + projects[i].link + '" target="_blank"><div class="container-rauboti-group"><h2>' + projects[i].name + '</h2>' + projects[i].description + '</div></a>');
    }
  } else if (page === 'pAbout') {
    $('#pageContainer').html('<div class="container-rauboti">This is the About page</div>');
  }
}
