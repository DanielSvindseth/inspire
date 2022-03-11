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
var possibleNumbers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'y'];
//prepareList();
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
  timer();
  if (id("repeat-checkbox").checked == false) {
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

  else if (id("repeat-checkbox").checked == true) {
    a = randomizer();
    list[list.length] = a;
    console.log(list);
    rememberNumber(a);
    return a;
  }
}

/*
function prepareList() {
  for (var i = 0; i < max; i++) {
    possibleNumbers[possibleNumbers.length] = i + 1;
  }
  console.log(possibleNumbers);
}
*/

function rememberNumber(e) {
  let f = e + "<br>"
  //id("memory-child").innerHTML += f;
  id("memory-child").insertAdjacentHTML("afterbegin", f);
}
/*
Mousetrap.bind('space', function() {
  id("number").innerHTML = getRandomNumber();
 } );
*/

 Mousetrap.bind('space', function() {
   id("number").innerHTML = getRandomNumberNew();
  } );

/*
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "TIDA ER UTE";
    }
  }, 1000);
*/
function timer() {

  var timeoutHandle;
    function countdown(minutes, seconds) {
        function tick() {
            var counter = document.getElementById("timer");
            counter.innerHTML =
                minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
            seconds--;
            if (seconds >= 0) {
                timeoutHandle = setTimeout(tick, 1000);
            } else {
                if (minutes >= 1) {
                    // countdown(mins-1);   never reach “00″ issue solved:Contributed by Victor Streithorst
                    setTimeout(function () {
                        countdown(minutes - 1, 59);
                    }, 1000);
                }
            }
        }
        tick();
    }

    countdown(1, 30);
}
