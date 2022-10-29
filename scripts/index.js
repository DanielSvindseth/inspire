////////////////////////////////
//////  Script functions  //////
////////////////////////////////

function id(id) {
  return document.getElementById(id); }
function tag(tag) {
  return document.getElementsByTagName(tag); }


//////  Site Functions  //////

function boxify() {
  for (var i = 0; i < tag('a').length; i++) {
    //tag('a')[i].style.height = '40px';
    //tag('a')[i].style.width = '40px';
    getRandomColor(tag('a')[i]);
  }
}

function getRandomColor(e) {
  var r = Math.floor(Math.random() * (255 - 95) + 95);
  console.log('Red value   = ' + r);
  var g = Math.floor(Math.random() * (255 - 95) + 95);
  console.log('Green value = ' + g);
  var b = Math.floor(Math.random() * (255 - 95) + 95);
  console.log('Blue value  = ' + b);
  var a = 1;
  e.style.backgroundColor='rgba(' + r + ', ' + g + ', ' + b + ', ' + a + ')';
}

////  Mouseover focus change  ////
/*
id('ha').onmouseover = function() { id('ha').focus(); }
id('body').onmouseover = function() { id('ha').focus(); }

id('ba').onmouseover = function() { id('ba').focus(); }
id('bb').onmouseover = function() { id('bb').focus(); }
id('bc').onmouseover = function() { id('bc').focus(); }
id('bd').onmouseover = function() { id('bd').focus(); }
id('be').onmouseover = function() { id('be').focus(); }

////  Button links  ////

id('ba').onclick = function() { window.location = 'dig.html' }
id('bb').onclick = function() { window.location = 'ped.html' }
id('bc').onclick = function() { window.location = 'eng.html' }
id('bd').onclick = function() { window.location = 'mat.html' }
id('be').onclick = function() { window.location = 'praksis-math2.html' }
*/
boxify();
