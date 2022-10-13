let dictionnaire = ["slimane", "sport", "football", "rapide", "perpondiculaire"]
let clavier = document.getElementById("clavier");
let divMot = document.getElementById("mot");
let motCacher;
let motResultat;


start();

function start() {
  afficherClavier();
  motCacher = genererMot();
  cacheLeMot();

}

function afficherClavier() {
  clavier.innerHTML = '';
  alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  for (i = 0; i < alphabet.length; i++) {
    let lettre = alphabet.charAt(i)
    var button = document.createElement("input");
    button.type = "button"
    button.value = lettre;
    button.id = lettre;
    button.addEventListener("click", e => {
      inputCheck(e.target.id)
    });
    clavier.appendChild(button);
  }
}

function inputCheck(value) {
  divMot.innerHTML = value;
}

function genererMot() {
  motCacher = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];
  console.log(motCacher);
  motCacher = motCacher.toLocaleLowerCase();
  return motCacher;

}

function initMot() {
  let divMotCacher = document.createElement("span")
  divMotCacher.id = "mot";
  divMot.appendChild(divMotCacher);
}

function cacheLeMot() {
  for (let i = 0; i < motCacher.length; i++) {
    divMot.innerHTML += "-";
  }

}

/*
function testLettre(lettre) {
  saveTmp = "";
  for (i = 0; i < motCacher.length; i++) {

    if (motCacher.charAt(i) === lettre) {
      saveTmp += lettre + " "
      cpt++;
    } else {
      saveTmp += "-"
    }
  }

  return saveTmp

}
*/

