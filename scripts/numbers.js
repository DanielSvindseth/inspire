function id(id) {
  return document.getElementById(id); }

var decimal = 0;
var number = 0;
var numbers1_decimal = 0;
var numbers1_number = 0;

localStorage.setItem(numbers1_number, 10);
localStorage.setItem(numbers1_decimal, 1);

function increase() {
    var n = parseInt(localStorage.getItem(numbers1_number));
    n = parseInt(n + 1);
    var d = n/10;
    localStorage.setItem(numbers1_number, n);
    localStorage.setItem(numbers1_decimal, d);
    console.log(d);
}

function decrease() {
    var n = parseInt(localStorage.getItem(numbers1_number));
    n = parseInt(n - 1);
    var d = n/10;
    localStorage.setItem(numbers1_number, n);
    localStorage.setItem(numbers1_decimal, d);
    console.log(d);
}


Mousetrap.bind('right', function() {
  increase();
  id("number").innerHTML = localStorage.getItem(numbers1_decimal);
} );

Mousetrap.bind('pagedown', function() {
  increase();
  id("number").innerHTML = localStorage.getItem(numbers1_decimal);
} );

Mousetrap.bind('pageup', function() {
  decrease();
  id("number").innerHTML = localStorage.getItem(numbers1_decimal);
} );

Mousetrap.bind('left', function() {
  decrease();
  id("number").innerHTML = localStorage.getItem(numbers1_decimal);
} );
