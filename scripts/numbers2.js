function id(id) {
  return document.getElementById(id); }

var decimal = 0;

localStorage.setItem(number, 100);
localStorage.setItem(decimal, 1);

function increase() {
    var n = parseInt(localStorage.getItem(number));
    n = parseInt(n + 1);
    var d = n/100;
    localStorage.setItem(number, n);
    localStorage.setItem(decimal, d);
    console.log(d);
}

function decrease() {
    var n = parseInt(localStorage.getItem(number));
    n = parseInt(n - 1);
    var d = n/100;
    localStorage.setItem(number, n);
    localStorage.setItem(decimal, d);
    console.log(d);
}


Mousetrap.bind('right', function() {
  increase();
  id("number").innerHTML = localStorage.getItem(decimal);
} );

Mousetrap.bind('pagedown', function() {
  increase();
  id("number").innerHTML = localStorage.getItem(decimal);
} );

Mousetrap.bind('pageup', function() {
  decrease();
  id("number").innerHTML = localStorage.getItem(decimal);
} );

Mousetrap.bind('left', function() {
  decrease();
  id("number").innerHTML = localStorage.getItem(decimal);
} );
