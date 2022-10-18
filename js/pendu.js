let dictionnaire = ["chenille", "ABOMINERONS", "ACCOMMODEES", "VULNERANTES", "lucarne", "horloge", "loup", "paysan", "squelette", "voleur", "jacques", "angers", "poste", "triste", "frissons", "pirate", "corps", "olympique", "orange", "erreur", "parfumerie", "dossier", "soulever", "dessin", "crayon", "robinet", "ananas", "scientifique", "abeille", "planeur", "collectionneur", "farine", "pie", "hormones", "annoncer", "echarpe", "bouton", "cerveau", "porte", "poisson", "naviguer", "arbre", "table", "froid", "antibiotiques", "poitiers", "paris", "nantes", "chantez", "tribunal", "gramme", "singulier", "AFFECTIONNASSIONS", "CIRCONSTANCIERAIT", "abélianisée", "bredouillis", "capitularde", "cadenassais", "daltonienne", "cylindrerai", "damasquiner"]
let clavier = document.getElementById("clavier");
let divMot = document.getElementById("mot");
let titre = document.getElementsByTagName("h1")[0];
let nbrEssai = document.getElementById("nbrEssai");
let image = document.getElementById("image");


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
  if (image.childElementCount > 1){
    image.removeChild(image.children[1]);
  }
  let img = document.createElement("img");
  img.id = "pendu";
  img.src = "img/7.jpg";
  image.appendChild(img);

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
      // document.getElementById("pendu").src="img/"+nombreEssai+".jpg";

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
    document.querySelectorAll("img")[0].src = "img/" + nombreEssai + ".jpg";
    if (nombreEssai == 1) {
      nbrEssai.innerHTML = "ATTENTION ! Dernier essai"
    }

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
    document.querySelectorAll("img")[0].src = "img/victoire.png";

  }
}

function afficherPerdu() {

  if (nombreEssai == 0) {

    for (let i = 0; i < clavier.childNodes.length; i++) {
      clavier.childNodes[i].disabled = true;
    }

    titre.innerHTML = "PERDU"
    titre.style.color = "red";
    divMot.innerHTML = motCacher;
    nbrEssai.innerHTML = ":(";
    nbrEssai.style.color = "red";

    document.getElementById("rejouer").style.visibility = "visible";


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

/*function imagesPendu() {
  let img = document.createElement("img");
  img.id = "pendu";
  img.src = "img/" + nombreEssai + ".jpg";
  nbrEssai.appendChild(img);

}
*/







