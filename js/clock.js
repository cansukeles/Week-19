let namePrompt = prompt("Lütfen isminizi yazın");

let nameDOM = document.querySelector("#myName");

var d = new Date();
var n = d.toLocaleTimeString();

document.getElementById("myClock").innerHTML = d +n;
