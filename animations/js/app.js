//var fNameInput = document.querySelector(".name-input");

//fNameInput.addEventListener("input", function() {
//  console.log("user typed:", fNameInput.value);
//});

//should have a total of five defined variables one of which should be for the button
var animateMe = document.getElementById("animation-select");
var welcome = document.getElementById("welcome");
var button = document.getElementById("button");
var input = document.getElementById("name-input");
var output = document.getElementById("name-output");

input.addEventListener("input", function(etwas) {
  output.textContent = input.value;
});

//nameOutput.value = " ";

//nameInput.addEventListener(
// "keypress",
// function() {
//  var input = nameInput.value;
//   nameOutput.value = keypress;
// },
//{ once: true }
//);

animateMe.addEventListener("click", function(animateYes) {
  welcome.classList.add(animateMe.value);
});

welcome.addEventListener("animationend", function(animateNo) {
  welcome.classList.remove("animateMe.value");
});
