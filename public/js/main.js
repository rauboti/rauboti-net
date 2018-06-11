const projects = [
  {name: 'Scarecrow', link: '/scarecrow', description: 'Guild site created for the upcoming release of WoW Classic'},
  {name: 'CharHammer', link: '/charhammer', description: 'A lightweight app for storing and managing Warhammer characters'}
];

$(document).ready(function() {
  showPage('pHome');
  $('.menu1-button:first').addClass('menu1-button-selected');

  $('.menu1-button').click(function() {
    $('.menu1-button').removeClass('menu1-button-selected');
    $(this).addClass('menu1-button-selected');
    showPage($(this).attr('id'));
  });
});

function showPage(page) {
  if (page === 'pHome'){
    $('#pageContainer').html('<div class="container-main">This is the Home page</div>');
  } else if (page === 'pProjects') {
    $('#pageContainer').html('<div id="cntrCode" class="container-main"><h1># Project list</h1></div>');
    for (var i in projects) {
      $('#cntrCode').append('<a href="' + projects[i].link + '" target="_blank"><div class="container-group"><h2>' + projects[i].name + '</h2>' + projects[i].description + '</div></a>');
    }
  } else if (page === 'pAbout') {
    $('#pageContainer').html('<div class="container-main">This is the About page</div>');
  }
}
