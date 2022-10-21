function id(id) {
  return document.getElementById(id); }

localStorage.setItem('numbers2_number', 100);
localStorage.setItem('numbers2_decimal', 1);

function increase() {
    var n = parseInt(localStorage.getItem('numbers2_number'));
    n = parseInt(n + 1);
    var d = n/100;
    localStorage.setItem('numbers2_number', n);
    localStorage.setItem('numbers2_decimal', d);
    console.log(d);
}

function decrease() {
    var n = parseInt(localStorage.getItem('numbers2_number'));
    n = parseInt(n - 1);
    var d = n/100;
    localStorage.setItem('numbers2_number', n);
    localStorage.setItem('numbers2_decimal', d);
    console.log(d);
}


Mousetrap.bind('right', function() {
  increase();
  var i = String(localStorage.getItem('numbers2_decimal'));
  if(i.includes('.')) {
    i = i.replace('.', ',');
  }
  id("number").innerHTML = i;
} );

Mousetrap.bind('pagedown', function() {
  increase();
  var i = String(localStorage.getItem('numbers2_decimal'));
  if(i.includes('.')) {
    i = i.replace('.', ',');
  }
  id("number").innerHTML = i;
} );

Mousetrap.bind('pageup', function() {
  decrease();
  var i = String(localStorage.getItem('numbers2_decimal'));
  if(i.includes('.')) {
    i = i.replace('.', ',');
  }
  id("number").innerHTML = i;
} );

Mousetrap.bind('left', function() {
  decrease();
  var i = String(localStorage.getItem('numbers2_decimal'));
  if(i.includes('.')) {
    i = i.replace('.', ',');
  }
  id("number").innerHTML = i;
} );
