function id(id) {
  return document.getElementById(id); }

function getRandomNumber() {
  a = Math.floor(Math.random() * 50) + 1;
  return a;
}

Mousetrap.bind('space', function() {
  id("number").innerHTML = getRandomNumber();
 } );
