////////////////////////////////
//////  Script functions  //////
////////////////////////////////

function id(id) {
  return document.getElementById(id); }


//////  Site Functions  //////


////  Mouseover focus change  ////

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
