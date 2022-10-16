let dictionnaire = ["chenille", "lucarne", "horloge", "loup", "paysan", "squelette", "voleur", "jacques", "angers", "poste", "triste", "frissons", "pirate", "corps", "olympique", "orange", "erreur", "parfumerie", "dossier", "soulever", "dessin", "crayon", "robinet", "ananas", "scientifique", "abeille", "planeur", "collectionneur", "farine", "pie", "hormones", "annoncer", "echarpe", "bouton", "cerveau", "porte", "poisson", "naviguer", "arbre", "table", "froid", "antibiotiques", "poitiers", "paris", "nantes", "chantez", "tribunal", "gramme", "singulier"]
let clavier = document.getElementById("clavier");
let divMot = document.getElementById("mot");
let titre = document.getElementsByTagName("h1")[0];
let nbrEssai = document.getElementById("nbrEssai");

let motCacher;
let nombreEssai;
let motResultat = "";
let lettreTrouver = false;

commencerUnePartie();

function commencerUnePartie() {
  reinitialiser();
  afficherClavier();
  nombreEssai = 7;
  imageInitiale();
  motCacher = genererMot();
  cacherLeMot();
  document.getElementById("rejouer").addEventListener("click", commencerUnePartie);
  document.getElementById("rejouer").style.visibility = "hidden";
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

function imageInitiale() {
  let img = document.createElement("img");
  img.id = "pendu";
  img.src = "img/pendu.jpg";
  nbrEssai.appendChild(img);

}

function cacherLeMot() {
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
    if (!lettreTrouver) {
      e.target.style.setProperty("color", "white");
      e.target.style.setProperty("background-color", "red")

    } else {
      e.target.style.setProperty("color", "black");
      e.target.style.setProperty("background-color", "lightgreen")
    }
  }

  afficherEssais();
  this.disabled = true;
  return motTmp;
}

function afficherEssais() {

  if (lettreTrouver == false) {
    nombreEssai--;
    nbrEssai.innerHTML = "Il vous reste " + (nombreEssai) + " essais";
    nbrEssai.style.color = "red";
    imagesPendu();
  }
  resultat();
}

function resultat() {
  motResultat = motTmp;
  divMot.innerHTML = motResultat;
  afficherGagner();
  afficherPerdu();

}

function afficherGagner() {

  if (motCacher == motResultat) {

    for (let i = 0; i < clavier.childNodes.length; i++) {
      clavier.childNodes[i].disabled = true;
    }

    titre.innerHTML = "Bravo ! Vous avez gagné :)"
    titre.style.color = "green";
    nbrEssai.innerHTML = ":)";
    nbrEssai.style.color = "green";
    document.getElementById("rejouer").style.visibility = "visible";
    let img = document.createElement("img");
    img.id = "pendu";
    img.src = "img/victoire.png";
    nbrEssai.appendChild(img);

  }
}

function afficherPerdu() {

  if (nombreEssai == 0) {

    for (let i = 0; i < clavier.childNodes.length; i++) {
      clavier.childNodes[i].disabled = true;
    }

    titre.innerHTML = "Vous avez perdu ! Veuillez rejouer SVP !"
    titre.style.color = "red";
    divMot.innerHTML = motCacher;
    nbrEssai.innerHTML = "0 essai ! :( ";
    nbrEssai.style.color = "red";

    document.getElementById("rejouer").style.visibility = "visible";

    let img = document.createElement("img");
    img.id = "pendu";
    img.src = "img/0.jpg";
    nbrEssai.appendChild(img);
  }
}

function reinitialiser() {
  nombreEssai = 7;
  nbrEssai.style.color = "green";
  titre.style.color = "black";
  titre.innerHTML = "Le Jeu Du Pendu"
  motCacher = "";
  motResultat = ""
  nbrEssai.innerHTML = "Il vous reste " + (nombreEssai) + " essais";
}

function imagesPendu() {
  let img = document.createElement("img");
  img.id = "pendu";
  img.src = "img/" + nombreEssai + ".jpg";
  nbrEssai.appendChild(img);

  if (nombreEssai == 1){
      alert("Dernier essai !!")
  }
}







