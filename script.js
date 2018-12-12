var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var colors = document.querySelector(".colors");
var body = document.querySelector(".gradient");
var randomBtn = document.getElementById("btn");

function randomColorValue() {
    var newNum = Math.floor(Math.random() * 255);
    return newNum;
}

randomBtn.addEventListener("click", function(){
        body.style.background =
        "linear-gradient(to right, rgb(" +
            randomColorValue() +
        "," +
            randomColorValue() +
        "," +
            randomColorValue() +
        "),rgb(" +
            randomColorValue() +
        "," +
            randomColorValue() +
        "," +
            randomColorValue() +
        "))";
    
    colors.textContent = body.style.background + ";";
});

body.onload = function () {
    colorInput();
}

function colorInput() {
    body.style.background =
        "linear-gradient(to right, " +
        color1.value +
        "," +
        color2.value +
        ")";

    colors.textContent = body.style.background + ";";
}

color1.addEventListener("input", colorInput);
color2.addEventListener("input", colorInput);

