let monTxtZone = document.getElementById("mazone");
console.log("monTxtZone: ", monTxtZone);
monTxtZone.addEventListener("click", erase);

let content = monTxtZone.innerHTML;
console.log("content HTML de MontxtZone: ", content);

let remplace =
  "Avec cette application en ligne vous pouvez compter les mots, espâces, les ponctuations et pleins d'autres choses compter. Cliquez ici pour commencer";

monTxtZone.textContent = remplace;

let myReset = document.getElementById("reset");
myReset.addEventListener("click", reset);

let total = document.getElementById("total");
let words = document.getElementById("mots");
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
let count = document.getElementById("count");
count.addEventListener("click", compteur);

console.log("monTxtZone: ", monTxtZone);
console.log("monTxtZone typeof: ", typeof monTxtZone);

console.log("******************");

//let laClasse=monTxtZone.classList;

//console.log('laClasse: ', laClasse);

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// //////////////// LES FONCTIONS     //////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

function compteur() {
  let lesChar = monTxtZone.value;
  //console.log('lesMots typeof: ', typeof lesMots);

  // calcul nombre de caracteres
  let long = lesChar.length;
  console.log("long: ", long);

  console.log("long: ", long);

  total.textContent = long;

  // calcul nombre de mots

  let myWords = lesChar.split(" ").length;
  console.log("🚀  compteur ~ myWords:", myWords);
  let myWords2 = lesChar.split("  ").length;
  console.log("🚀 compteur ~ myWords2:", myWords2);
  let myWords3 = lesChar.split("   ").length;
  console.log("🚀 ~ file: script.js:61 ~ compteur ~ myWords3:", myWords3);

  words.textContent = myWords;
}

function initializ(monTxtZone) {
  monTxtZone.textContent = "C'est reparti !";
}

function erase() {
  monTxtZone.textContent = "";
}

function stringify() {
  this.toString();
}

function reset() {
  location.reload();
}
