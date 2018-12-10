//"queryselector" uses css class styles for markup.

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradient");

function colorInput() {
    body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value
    + ")";
}

color1.addEventListener("input", colorInput);
color2.addEventListener("input", colorInput);