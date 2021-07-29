function id(id) {
  return document.getElementById(id); }

// Talet på slides +1
var numberOfSlides = '15';

Mousetrap.bind('o', function() { location.href = '#/overview' } );
Mousetrap.bind('i', function() { location.href = '#/TOC'; } );

Mousetrap.bind('1', function() { location.href = '#/s1' } );
Mousetrap.bind('2', function() { location.href = '#/s2' } );
Mousetrap.bind('3', function() { location.href = '#/s3' } );
Mousetrap.bind('4', function() { location.href = '#/s4' } );
Mousetrap.bind('5', function() { location.href = '#/s5' } );
Mousetrap.bind('6', function() { location.href = '#/s6' } );
Mousetrap.bind('7', function() { location.href = '#/s7' } );
Mousetrap.bind('8', function() { location.href = '#/s8' } );
Mousetrap.bind('9', function() { location.href = '#/s9' } );
Mousetrap.bind('0', function() { location.href = '#/s10' } );
Mousetrap.bind('shift+1', function() { location.href = '#/s11' } );
Mousetrap.bind('shift+2', function() { location.href = '#/s12' } );
Mousetrap.bind('shift+3', function() { location.href = '#/s13' } );
Mousetrap.bind('shift+4', function() { location.href = '#/s14' } );
Mousetrap.bind('shift+5', function() { location.href = '#/s15' } );
Mousetrap.bind('shift+6', function() { location.href = '#/s16' } );
Mousetrap.bind('shift+7', function() { location.href = '#/s17' } );
Mousetrap.bind('shift+8', function() { location.href = '#/s18' } );
Mousetrap.bind('shift+9', function() { location.href = '#/s19' } );
Mousetrap.bind('shift+0', function() { location.href = '#/s20' } );

Mousetrap.bind('enter', function() { randomSlide(); } );

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

function randomSlide() {
  let number = getRandomInt('1', numberOfSlides);
  let slide = '#/s' + number;
  location.href = slide;
}
