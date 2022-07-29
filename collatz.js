var collatz = collatz || {};

collatz.multiplier = 3;

collatz.even = function (n) {
  return n / 2;
};
collatz.odd = function (n) {
  return n * this.multiplier + 1;
};
collatz.steps = 0;
collatz.stepsOut = document.querySelector("#result .steps");
collatz.output = document.querySelector("#result ul");

collatz.li = function (n) {
  var li = document.createElement("li");
  li.innerText = n;
  return li;
};
collatz.init = function (n) {
  this.steps++;
  this.stepsOut.innerText = collatz.steps;
  if (n % 2 === 0) {
    n = this.even(n);
  } else {
    n = this.odd(n);
  }
  this.output.appendChild(collatz.li(n));

  if (n !== 1) {
    collatz.init(n);
  }
};
collatz.reset = function () {
  collatz.steps = 0;
  while (this.output.firstChild) {
    this.output.removeChild(this.output.firstChild);
  }
};

var input = document.querySelector("#collatz");
var multiplier = document.querySelector("#multiplier");

multiplier.addEventListener("change", function (e) {
  var value = e.target.value;
  collatz.multiplier = e.target.value;
  collatz.reset();
  collatz.init(input.value);
});

input.addEventListener("change", function (e) {
  var value = e.target.value;
  collatz.reset();
  collatz.init(value);
});
