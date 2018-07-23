var scarecrow = {
  _apiLocationReload: function(data) {
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: '../scarecrow/api',
      success: function(data) {
        location.reload();
      }
    });
  },
  _boxConfirm: function(attr, callbackConfirm, callbackDecline) {
    this._toggleFadeOut('.pageMainComponents');
    $('#pageContainer').append('<div id="boxConfirm" class="popupBox"><div class="popupBoxContainer"><div class="popupBoxTitle">' + attr.type + '</div><div class="popupBoxElement">' + attr.question + '</div><div class="buttonRow"><button id="resAccept" class="input-button">Yes</button><button id="resDecline" class="input-button">No</button></div></div></div>');
    $('#resAccept').click(function () {
      $('#boxConfirm').remove();
      callbackConfirm(attr.id);
    });
    $('#resDecline').click(function () {
      $('#boxConfirm').remove();
      callbackDecline();
    });
  },
  _confirm: function(frmId, validationFunction, title, text, confirmName, confirmValue) {
    $('.container-sc').append('<form class="popupForm" id="' + frmId + '" name="' + frmId + '" method="post" onsubmit="return scarecrow.' + validationFunction + '();">'
    + '<div class="container-frame">'
    + '<div class="container-headline">' + title + '</div>'
    + '<div class="container-body">' + text + '</div>'
    + '<div class="container-foot"><div class="buttonRow">'
    + '<button id="btnDecline" type="submit" name="back" value="back" class="response-button icon-decline"></button>'
    + '<button id="btnConfirm" type="submit" name="' + confirmName + '" value="' + confirmValue + '" class="response-button icon-accept"></button>'
    + '</div></div>'
    + '</div>'
    + '</form>'
    );
    $('.response-button').click(function() {
      clicked = $(this).attr('id').split('btn')[1];
    });
  },
  _toggleFadeOut: function(object) {
    $(object).toggleClass('inactive');
  },
  _validateApplication: function() {
    $('#txtCharName').val() === '' ? $('#txtCharName').addClass('invalid') : $('#txtCharName').removeClass('invalid');
    $('#txtCharName').val() === '' ? $('#txtCharNameError').html('Field required') : $('#txtCharNameError').html('');
    $('#slctCharClass option:selected').text() === '' ? $('#slctCharClass').addClass('invalid') : $('#slctCharClass').removeClass('invalid');
    $('#slctCharClass option:selected').text() === '' ? $('#slctCharClassError').html('Field required') : $('#slctCharClassError').html('');
    $('#slctCharRole option:selected').text() === '' ? $('#slctCharRole').addClass('invalid') : $('#slctCharRole').removeClass('invalid');
    $('#slctCharRole option:selected').text() === '' ? $('#slctCharRoleError').html('Field required') : $('#slctCharRoleError').html('');
    $('#txtLevel').val() === ''? $('#txtLevel').addClass('invalid') : $('#txtLevel').removeClass('invalid');
    $('#txtLevel').val() === '' ? $('#txtLevelError').html('Field required') : $('#txtLevelError').html('');
    $('#txtSpecLink').val() === '' ? $('#txtSpecLink').addClass('invalid') : $('#txtSpekLink').removeClass('invalid');
    $('#txtSpecLink').val() === '' ? $('#txtSpecLinkError').html('Field required') : $('#txtSpecLinkError').html('');
    $('#txtArmoryLink').val() === '' ? $('#txtArmoryLink').addClass('invalid') : $('#txtArmoryLink').removeClass('invalid');
    $('#txtArmoryLink').val() === '' ? $('#txtArmoryLinkError').html('Field required') : $('#txtArmoryLinkError').html('');
    $('#txtNumberOfRaids').val() === '' ? $('#txtNumberOfRaids').addClass('invalid') : $('#txtNumberOfRaids').removeClass('invalid');
    $('#txtNumberOfRaids').val() === '' ? $('#txtNumberOfRaidsError').html('Field required') : $('#txtNumberOfRaidsError').html('');
    $('#txtPreparation').val() === '' ? $('#txtPreparation').addClass('invalid') : $('#txtPreparation').removeClass('invalid');
    $('#txtPreparation').val() === '' ? $('#txtPreparationError').html('Field required') : $('#txtPreparationError').html('');
    $('#txtValuableAsset').val() === '' ? $('#txtValuableAsset').addClass('invalid') : $('#txtValuableAsset').removeClass('invalid');
    $('#txtValuableAsset').val() === '' ? $('#txtValuableAssetError').html('Field required') : $('#txtValuableAssetError').html('');
    $('#txtMakingMistake').val() === '' ? $('#txtMakingMistake').addClass('invalid') : $('#txtMakingMistake').removeClass('invalid');
    $('#txtMakingMistake').val() === '' ? $('#txtMakingMistakeError').html('Field required') : $('#txtMakingMistakeError').html('');
    $('#txtAnythingElse').val() === '' ? $('#txtAnythingElse').addClass('invalid') : $('#txtAnythingElse').removeClass('invalid');
    $('#txtAnythingElse').val() === '' ? $('#txtAnythingElseError').html('Field required') : $('#txtAnythingElseError').html('');

    if ($('#txtCharName').val() === '' || $('#slctCharClass option:selected').text() === '' || $('#slctCharRole option:selected').text() === '' || $('#txtLevel').val() === '' || $('#txtSpecLink').val() === '' || $('#txtArmoryLink').val() === '' || $('#txtNumberOfRaids').val() === '' || $('#txtPreparation').val() === '' || $('#txtValuableAsset').val() === '' || $('#txtMakingMistake').val() === '' || $('#txtAnythingElse').val() === '') {
      return false;
    } else {
      return true;
    }
  },
  _validateCharacterForm: function() {
    $('#txtCharName').val() === '' ? $('#txtCharName').addClass('invalid') : $('#txtCharName').removeClass('invalid');
    $('#txtCharName').val() === '' ? $('#txtCharNameError').html('Field required') : $('#txtCharNameError').html('');
    $('#slctCharClass option:selected').text() === '' ? $('#slctCharClass').addClass('invalid') : $('#slctCharClass').removeClass('invalid');
    $('#slctCharClass option:selected').text() === '' ? $('#slctCharClassError').html('Field required') : $('#slctCharClassError').html('');
    $('#slctCharRole option:selected').text() === '' ? $('#slctCharRole').addClass('invalid') : $('#slctCharRole').removeClass('invalid');
    $('#slctCharRole option:selected').text() === '' ? $('#slctCharRoleError').html('Field required') : $('#slctCharRoleError').html('');
  },
  _validateNewChar: function() {
    $('#txtCharName').val() === '' ? $('#txtCharName').addClass('invalid') : $('#txtCharName').removeClass('invalid');
    $('#txtCharName').val() === '' ? $('#txtCharNameError').html('Field required') : $('#txtCharNameError').html('');
    $('#slctCharClass option:selected').text() === '' ? $('#slctCharClass').addClass('invalid') : $('#slctCharClass').removeClass('invalid');
    $('#slctCharClass option:selected').text() === '' ? $('#slctCharClassError').html('Field required') : $('#slctCharClassError').html('');
    $('#slctCharRole option:selected').text() === '' ? $('#slctCharRole').addClass('invalid') : $('#slctCharRole').removeClass('invalid');
    $('#slctCharRole option:selected').text() === '' ? $('#slctCharRoleError').html('Field required') : $('#slctCharRoleError').html('');

    if ($('#txtCharName').val() === '' || $('#slctCharClass option:selected').text() === '' || $('#slctCharRole option:selected').text() == '') {
      return false;
    } else {
      return true;
    }
  },
  _validateUserAdmin: function() {
    if (clicked === 'Back') {
      return true;
    } else if (clicked === 'Delete') {
      this._confirm('frmConfirmUserActions', '_validateUserAdmin', 'Delete user', 'Are you sure you want to delete this user?', 'delete', 'user');
      this._toggleFadeOut('.pageMainComponent');
      return false;
    } else if (clicked === 'Decline') {
      $('#frmConfirmUserActions').remove();
      this._toggleFadeOut('.pageMainComponent');
      return false;
    } else if (clicked === 'Confirm') {
      return true;
    }
  },
  _validateUserCharacter: function() {
    console.log(clicked);
    if (clicked === 'AddCharacter') {
      this._toggleFadeOut('.pageMainComponent');
      this.addCharacter('frmCharacterDetails', '_validateUserCharacter', 'add', 'character');
      return false;
    } else if (clicked === 'Decline') {
      $('#frmCharacterDetails').remove();
      this._toggleFadeOut('.pageMainComponent');
      return false;
    } else if (clicked === 'Confirm') {
      this._validateCharacterForm();
      if ($('#txtCharName').val() === '' || $('#slctCharClass option:selected').text() === '' || $('#slctCharRole option:selected').text() == '') {
        return false;
      } else {
        return true;
      }
    } else if (clicked === 'ChangeMainCharacter') {
      return true;
    }
  },
  _validateSignIn: function() {
    let userValid = true;
    let pwValid = true;
    let errormsg = '';
    $('.input-text-big').removeClass('invalid');
    $('.input-text-big').removeClass('valid');
    if ($('#username').val().length < 3) {
      $('#username').addClass('invalid');
      $('#usernameError').html('Username required');
      userValid = false;
    } else {
      $('#usernameError').html('');
    }
    if ($('#password').val() === '') {
      $('#password').addClass('invalid');
      $('#passwordError').html('Password required')
      pwValid = false;
    } else {
      $('#passwordError').html('');
    }
    if (!userValid || !pwValid) {
      return false
    } else {
      return true;
    }
  },
  _validateSignUp: function() {
    let userValid = true;
    let pwValid = true;
    let errormsg = '';
    $('.input-text-big').removeClass('invalid');
    $('.input-text-big').removeClass('valid');
    if ($('#username').val().length < 3) {
      $('#username').addClass('invalid');
      $('#usernameError').html('Username with at least 3 characters required');
      userValid = false;
    } else {
      $('#usernameError').html('')
    }
    if ($('#password').val() === '') {
      $('#password').addClass('invalid');
      $('#passwordError').html('Password required');
      pwValid = false;
    } else if ($('#password').val() !== $('#password_confirm').val()) {
      $('#password').addClass('invalid');
      $('#password_confirm').addClass('invalid');
      $('#passwordError').html('The passwords must match each other');
      $('#passwordConfirmError').html('The passwords must match each other');
      pwValid = false;
    } else {
      $('#passwordError').html('');
      $('#passwordConfirmError').html('');
    }
    if (!userValid || !pwValid) {
      return false
    } else {
      return true;
    }
  },
  _validateUpdateInfo: function() {
    $('#txtUsername').val() === '' ? $('#txtUsername').addClass('invalid') : $('#txtUsername').removeClass('invalid');
    $('#txtUsername').val() === '' ? $('#txtUsernameError').html('Field required') : $('#txtUsernameError').html('');

    if ($('#txtUsername').val() === '') {
      return false;
    } else {
      return true;
    }
  },
  addCharacter: function(frmId, validationFunction, confirmName, confirmValue) {
    $('.container-sc').append('<form class="popupForm" id="' + frmId + '" name="' + frmId + '" method="post" onsubmit="return scarecrow.' + validationFunction + '();">'
    + '<div class="container-frame">'
    + '<div class="container-headline">Add character</div>'
    + '<div class="container-body">'
    + '<table><tr><td>Character name</td><td>Class</td><td>Role</td></tr>'
    + '<tr><td valign="top"><div class="input-text-container"><input id="txtCharName" name="cName" type="input" class="input-text" /><div id="txtCharNameError" class="text-error"></div></div></td>'
    + '<td valign="top"><div class="input-text-container"><select id="slctCharClass" name="cClass" class="input-text"></select><div id="slctCharClassError" class="text-error"></div></div></td>'
    + '<td valign="top"><div class="input-text-container"><select id="slctCharRole" name="cRole" class="input-text"></select><div id="slctCharRoleError" class="text-error"></div></div></td></tr></table></div>'
    + '<div class="container-foot"><div class="buttonRow">'
    + '<button id="btnDecline" type="submit" name="back" value="back" class="response-button icon-decline"></button>'
    + '<button id="btnConfirm" type="submit" name="' + confirmName + '" value="' + confirmValue + '" class="response-button icon-accept"></button>'
    + '</div></div>'
    + '</div>'
    + '</form>'
    );
    $('.response-button').click(function() {
      clicked = $(this).attr('id').split('btn')[1];
    });
    scarecrow.getCharacterClasses('../../../scarecrow/api');
    $('.input-text').change(function() {
      scarecrow._validateCharacterForm();
    });
  },
  closeWindow: function(win) {
    $(win).remove();
    this._toggleFadeOut('.pageMainComponent');
  },
  deleteCharacter: function (cID, cName, cClass) {
    var data = { request: 'characterDelete', cID: cID, cName: cName, cClass: cClass };
    this._apiLocationReload(data);
  },
  getCharacterClasses: function(url) {
    var data = { request: 'getCharacterClasses' };
    $.ajax({
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json',
      url: url,
      success: function(classes) {
        $('#slctCharClass').html('<option class="select-options2" selected></option>');
        for (var i in classes) {
          $('#slctCharClass').append('<option class="select-options2">' + classes[i].name + '</option>')
        }
        $('#slctCharClass').change(function() {
          $('#slctCharRole').html('<option class="select-options2" selected></option>');
          for (var i in classes) {
            if (classes[i].name === $('#slctCharClass :selected').text()) {
              classes[i].isDamage !== 0 ? $('#slctCharRole').append('<option class="select-options2">Damage</option>') : '';
              classes[i].isSupport !== 0 ? $('#slctCharRole').append('<option class="select-options2">Support</option>') : '';
              classes[i].isTank !== 0 ? $('#slctCharRole').append('<option class="select-options2">Tank</option>') : '';
            }
          }
        });
      }
    });
  },
  submitNewCharacter: function(cName, cClass, cRole) {
    var data = { request: 'characterSubmitNew', cName: cName, cClass: cClass, cRole: cRole };
    this._apiLocationReload(data);
  },
  submitUpdatedInfo: function(username, email) {
    var data = { request: 'userInformationUpdate', username: username, email: email };
    this._apiLocationReload(data);
  },
  updateInfo: function(username, email) {
    this._toggleFadeOut('.pageMainComponent');

    $('#pageContainer').append('<div id="boxUpdateInfo" class="popupBox"><form id="frmUpdateInfo" name="frmUpdateInfo" method="post" onsubmit="return scarecrow._validateUpdateInfo()"><div class="popupBoxContainer">'
    +'<div class="popupBoxTitle">Update user information</div>'
    +'<div class="popupBoxElement">'
    +'<table><tr><td>Username</td><td>Email</td></tr>'
    +'<tr><td valign="top"><div class="input-text-container"><input id="txtUsername" name="username" type="input" class="input-text" value="' + username + '" /><div id="txtUsernameError" class="text-error"></div></div></td>'
    +'<td valign="top"><div class="input-text-container"><input id="txtEmail" name="email" type="input" class="input-text" value="' + email + '" /><div id="txtEmailError" class="text-error"></div></div></td></tr></table>'
    +'</div></form><div class="buttonRow"><button id="btnSubmit" type="submit" name="accept" value="updateInfo" class="response-button icon-accept" form="frmUpdateInfo"></button><button id="btnCancel" type="button" name="decline" value="decline" class="response-button icon-decline"></button></div>'
    +'</div>');

    $('#btnCancel').click(function() {
      scarecrow.closeWindow('#boxUpdateInfo');
    });

    scarecrow.getCharacterClasses('../scarecrow/api');
    $('.input-text').change(function() {
      scarecrow._validateUpdateInfo();
    });
  }
}
