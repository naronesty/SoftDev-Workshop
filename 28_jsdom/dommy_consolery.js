/*
   your PPTASK:
   
   Test drive each bit of code in this file,
    and insert comments galore, indicating anything
     you discover,
      have questions about,
        or otherwise deem notable.
      	
        Write with your future self or teammates in mind.
      	
        If you find yourself falling out of flow mode, consult 
        other teams
        MDN

   A few comments have been pre-filled for you...
   
   (delete this block comment once you are done)
*/

// Team Adjective Nouns :: Noakai Aronesty, Kevin Cao
// SoftDev pd2
// K28
// 2022-02-08
// --------------------------------------------------


//send diagnostic output to console
//(Ctrl-Shift-K in Firefox to reveal console)
console.log("AYO");

var i = "hello";
var j = 20;


//assign an anonymous fxn to a var
var f = function (x) {
  var j = 30;
  return j + x;
};


//instantiate an object
var o = {
  'name': 'Thluffy',
  age: 15,
  items: [10, 20, 30, 40],
  morestuff: { a: 1, b: 'ayo' },
  func: function (x) {
    return x + 30;
  }
};


var addItem = function (text) {
  var list = document.getElementById("thelist");
  var newitem = document.createElement("li");
  newitem.innerHTML = text;
  list.appendChild(newitem);
};


var removeItem = function (n) {
  var listitems = document.getElementsByTagName('li');
  listitems[n].remove();
};


var red = function () {
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    items[i].classList.add('red');
  }
};


var stripe = function () {
  var items = document.getElementsByTagName("li");
  for (var i = 0; i < items.length; i++) {
    if (i % 2 == 0) {
      items[i].classList.add('red');
    } else {
      items[i].classList.add('blue');
    }
  }
};

function fact(n) {
  if (n == 1) {
    return n;
  }
  else return n * fact(n - 1);
}

function helpy(first, second, remain) {
  if (remain == 0) return second;
  else if (remain == 1) return first;
  else return helpy(second, (first + second), (remain - 1));
}

function fib(n) {
  return helpy(1, 1, (n));
}

function gcd(a, b) {
  if (a == b) return a
  else if (a > b) return gcd((a - b), b);
  else return gcd(a, (b - a));
}


var fibEle = document.getElementById("fib");
var rando = Math.floor(Math.random() * 100);
fibEle.innerHTML = "fib(" + rando + ") = " + fib(rando);
var factEle = document.getElementById("fact");
var rando = Math.floor(Math.random() * 20);
factEle.innerHTML = "fact(" + rando + ") = " + fact(rando);
var gcdEle = document.getElementById("gcd");
var rando0 = (Math.floor(Math.random() * 10)) * 2;
var rando1 = (Math.floor(Math.random() * 8) + 5) * 4;
gcdEle.innerHTML = "gcd(" + rando0 + ", " + rando1 + ") = " + gcd(rando0, rando1);