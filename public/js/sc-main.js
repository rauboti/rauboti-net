$(document).ready(function() {
  $('.signup-input').blur(function() {
    scarecrow._validateSignUp();
  });
  $('.signin-input').blur(function() {
    scarecrow._validateSignIn();
  });
  $('.menu-button-small').click(function() {
    if ($(this).attr('id').split('-')[1] === 'Progression') {
      $('.tblProgression').addClass('hidden');
      $(".boss-" + $(this).attr('id').split('-')[2]).removeClass('hidden');
    }
    $('.menu-button-small').removeClass('menu-button-selected');
    $(this).addClass('menu-button-selected');
  });
  $('.button').click(function() {
    if ($(this).attr('id').split('btn')[1] === 'AddCharacter') { scarecrow.addNewCharacter(); }
    else if ($(this).attr('id').split('btn')[1].split('_')[0] === 'DeleteCharacter') {
      const cID = $(this).attr('id').split('btn')[1].split('_')[1];
      var attr = {
        type: 'Delete character',
        question: 'Do you really want to delete ' + $('#character_' + cID).children('.charName').text() + '?',
        id: cID
      };
      scarecrow._boxConfirm(attr, function(cID) {
        scarecrow.deleteCharacter(cID, $('#character_' + cID).children('.charName').text(), $('#character_' + cID).children('.charClass').text(), $('#character_' + cID).children('.charRole').text());
        scarecrow._toggleFadeOut('#pageMainComponents');
      }, function() {
        scarecrow._toggleFadeOut('#pageMainComponents');
      });
    }
    else if ($(this).attr('id').split('btn')[1].split('_')[0] === 'UpdateInfo') { scarecrow.updateInfo($('#tblUsername').text(), $('#tblEmail').text()); }
  });
});
