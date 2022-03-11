function id(id) {
  return document.getElementById(id); }

let min = 1;
let max = 50;
const possibleNumbers = [];
const usedNumbers = [];
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

function getRandomNumberNew() {
  if (id("repeat-checkbox").checked == true) {
    a = randomizer();
    for (var i = 0; i < list.length; i++) {
      if (list[i] == a) {
        console.log('duplicate found, trying again');
        getRandomNumber();
      }
      else {
        list[list.length] = a;
        console.log(list);
        rememberNumber(a);
        return a;
      }
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
