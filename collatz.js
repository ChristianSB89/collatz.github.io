console.log("The Collatz Conjecture");

//Variables that gets elements from HTML//
const testTallet = document.querySelector("#myBtn");
const inputTall = document.querySelector("#inputField");
const slettTallet = document.querySelector("#deleteBtn");

//Button for input field//
testTallet.addEventListener("click", handleInput);

//Write to HTML//
function handleInput() {
  let valgtTall = parseInt(inputTall.value);
  const tallArray = collatzFormodning(valgtTall);
  logTall(tallArray, valgtTall);
}

//The Collatz function//
function collatzFormodning(valgtTall) {
  let tallArray = [];
  while (valgtTall !== 1) {
    if (valgtTall % 2 == 0) {
      valgtTall = valgtTall / 2;
    } else {
      valgtTall = valgtTall * 3 + 1;
    }
    console.log(valgtTall);
    tallArray.push(valgtTall);
  }
  console.dir(tallArray);
  return tallArray;
}

//Logging numbers from console to innerHTML//
function logTall(tallSomLogges, gammeltTall) {
  document.getElementById("test").innerHTML = gammeltTall;
  document.getElementById("tallrekke").innerHTML = tallSomLogges.length;
  document.getElementById("alleTall").innerHTML = tallSomLogges;
}

//Reset input field//
function clear() {
  document.getElementById("tallrekke").innerHTML = "";
  document.getElementById("test").innerHTML = "";
  document.getElementById("inputField").innerHTML = "";
}
slettTallet.addEventListener("click", clear);

const btn = document.getElementById("deleteBtn");

btn.addEventListener("click", function handleClick(event) {
  event.preventDefault();
  const testFelt = document.getElementById("inputField");
  console.log(testFelt.value);
  testFelt.value = "";
});

