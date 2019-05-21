//should have a total of five defined variables one of which should be for the button
var animateMe = document.getElementById("animation-select");
var welcome = document.getElementById("welcome");
var button = document.getElementById("animate");
var input = document.getElementById("name-input");
var output = document.getElementById("name-output");

input.addEventListener("input", function() {
  output.textContent = input.value;
});

//Listens for the "click" of the button and then performs animation upon clicking.
button.addEventListener("click", function() {
  welcome.classList.add(animateMe.value);
});

welcome.addEventListener("animationend", function() {
  welcome.classList.remove("animateMe");
});
