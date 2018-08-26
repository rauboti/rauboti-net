var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};

function deviceAdjustment() {
  if( isMobile.any() ) {
    $('menu').addClass('menu-mobile');
    $('section').addClass('section-mobile');
    $('.container').addClass('container-mobile');
    $('.container-group').addClass('container-group-mobile');
    $('.container-headline').addClass('container-headline-mobile');
    $('.container-ingress').addClass('container-ingress-mobile');
    $('.container-text').addClass('container-text-mobile');
    $('.hover-visible').addClass('hover-visible-mobile');
    $('.menu-button').addClass('menu-button-mobile');
  } else {
    $('menu').addClass('menu-desktop');
    $('section').addClass('section-desktop');
    $('.container').addClass('container-desktop');
    $('.container-group').addClass('container-group-desktop');
    $('.container-headline').addClass('container-headline-desktop');
    $('.container-ingress').addClass('container-ingress-desktop');
    $('.container-text').addClass('container-text-desktop');
    $('.menu-button').addClass('menu-button-desktop');
  }
}
