let dictionnaire = ["slimane", "sport", "football", "rapide", "perpondiculaire"]
let clavier = document.getElementById("clavier");
let divMot = document.getElementById("mot");
let titre = document.getElementsByTagName("h1")[0];
let nbrEssai = document.getElementById("nbrEssai");
let motCacher;
let motResultat = "";
let nombreEssai = 7;
let lettreTrouver = false;


start();

function start() {
  afficherClavier();
  motCacher = genererMot();
  cacheLeMot();
  //afficherEssais();
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
    button.addEventListener("click", verifierLettre);
    clavier.appendChild(button);
  }
}


function genererMot() {
  motCacher = dictionnaire[Math.floor(Math.random() * dictionnaire.length)];
  console.log(motCacher);
  motCacher = motCacher.toUpperCase();
  return motCacher;

}

function initMot() {
  let divMotCacher = document.createElement("span")
  divMotCacher.id = "mot";
  divMot.appendChild(divMotCacher);

}

function cacheLeMot() {
  for (let i = 0; i < motCacher.length; i++) {
    motResultat += "-";
  }
  divMot.innerHTML = motResultat;
}

function verifierLettre(e) {
  motTmp = "";
  lettre = e.target.value;
  lettreTrouver = false;
  for (i = 0; i < motCacher.length; i++) {
    if (motCacher.charAt(i) == lettre) {

      motTmp += lettre;
      lettreTrouver = true;
    } else {
      motTmp += motResultat[i];


    }
  }

  if (lettreTrouver == false) {
    console.log("gggggg");
    nombreEssai--;
    nbrEssai.innerHTML = "Il vous reste " + (nombreEssai) + " chance.";
  }

  motResultat = motTmp;
  divMot.innerHTML = motResultat;

  if (nombreEssai === 0) {
    alert("Perdu")
    location.reload();
  }

  return motTmp;

}

function afficherEssais() {

  if (lettreTrouver == false) {
    console.log("gggggg");
    nombreEssai--;
    nbrEssai.innerHTML = "Il vous reste " + (nombreEssai) + " chance.";
  }
  if (nombreEssai === 0) {
    alert("Perdu")
    location.reload();
  }

}

