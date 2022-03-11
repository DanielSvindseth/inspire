function id(id) {
  return document.getElementById(id); }

function shuffle(array) {
  var i = array.length,
    j = 0,
    temp;
    while (i--) {

      j = Math.floor(Math.random() * (i+1));

      // swap randomly chosen element with current element
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;

    }
  return array;
}

function getIterator(arr) {
  var counter = 0;
  return function next() {
    if (counter === arr.length) { return undefined; }
    return arr[counter++];
  };
}

let min = 1;
let max = 50;
var possibleNumbers = [];
prepareList();
var ranNumbers = shuffle(possibleNumbers);

const list = [];

function randomizer() {
  let a = Math.floor(Math.random() * max) + min;
  return a;
}

function getRandomNumber() {
  a = randomizer();
  rememberNumber(a);
  return a;
}


i = 0;
function getRandomNumberNew() {

  if (id("repeat-checkbox").checked == true) {
    console.log(ranNumbers);
    if (ranNumbers != undefined) {
      n = ranNumbers[i]
      i++;
      console.log(n);
      rememberNumber(n);
      return n;
    }
    else {
      return "Alle nummera er brukt!";
    }
  }

  else if (id("repeat-checkbox").checked == false) {
    a = randomizer();
    list[list.length] = a;
    console.log(list);
    rememberNumber(a);
    return a;
  }
}

function prepareList() {
  for (var i = 0; i < max; i++) {
    possibleNumbers[possibleNumbers.length] = i + 1;
  }
  console.log(possibleNumbers);
}


function rememberNumber(e) {
  let f = e + "<br>"
  //id("memory-child").innerHTML += f;
  id("memory-child").insertAdjacentHTML("afterbegin", f);
}


Mousetrap.bind('space', function() {
  id("number").innerHTML = getRandomNumber();
 } );


 Mousetrap.bind('space', function() {
   id("number").innerHTML = getRandomNumberNew();
  } );
