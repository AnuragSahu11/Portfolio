var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var value1 = document.querySelector(".value1");
var value2 = document.querySelector(".value2");
var body = document.querySelector("#cont");
color1.value = "#972894";
color2.value = "#374dc8";
function setcolor(){
    body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")"
};


color1.addEventListener("input",function(){
     setcolor();
     value1.value = color1.value;
});

color2.addEventListener("input",function(){
    setcolor();
    value2.value = color2.value;
});

heading.classList.add("animate__animated","animate__bounce");

