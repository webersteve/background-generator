var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector("button");

setGradient();

function randomNumber() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " + color1.value + 
	"," + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomColor() {
	var rand1 = randomNumber();
	var rand2 = randomNumber();
	color1.value = rand1;
	color2.value = rand2;
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", randomColor);