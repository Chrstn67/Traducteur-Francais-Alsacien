// On récupère nos éléments
const form = document.querySelector("form");
// On crée une fonction pour gérer le submit
const handleSubmit = function (event) {
  // ATTENTION PREVENT DEFAULT ULTRA IMPORTANT SINON RECHARGEMENT DE PAGE
  event.preventDefault();

  let input = document.querySelector("#translator_input").value;
  input = input.toLowerCase();
  console.log(input);

  // hasOwnProperty vérifie si la propriété existe dans un objet
  if (traduction.hasOwnProperty(input)) {
    // console.log(traduction[input.value]);

    const result = document.querySelector("#resultAls");
    result.innerHTML = traduction[input];
  } else {
    // console.log("false");
    const result = document.querySelector("#resultAls");
    result.innerHTML = "Mot ou expression inconnu(e) au bataillon...";
  }
};

// On rajoute l'event sur l'envoi du formulaire
form.addEventListener("submit", handleSubmit);

let traduction = {
  bonjour: "Bùschùr (Guete Morje)",
  bonsoir: "Guete'n Owe",
  salut: "Salü",
  merci: "Merci",
  "merci beaucoup": "Merci vielmols",
  "bon après-midi": "Gueter middàà",
  "au revoir": "O revoir",
  "à tout de suite": "Bis glich",
  "à toute à l'heure": "Bis noochhärde",
};

// Tableau prononciation
const boardPrononciation = {
  init: function () {
    boardPrononciation.btnPrononciation =
      document.querySelector("#prononciation");
    boardPrononciation.btnPrononciation.addEventListener(
      "click",
      boardPrononciation.handleClick
    );
    //console.log(boardPrononciation.btnPrononciation);
  },
  handleClick: function (event) {
    event.preventDefault();
    const asideElem = document.querySelector("ul");
    asideElem.classList.toggle("list--hidden");
  },
};

boardPrononciation.init();

// barre de recherche à adapter:
// https://stacklima.com/barre-de-recherche-utilisant-html-css-et-javascript/

const search_word = function keyup() {
  let input = document.getElementById("translator_input").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("list-proposition");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
};

search_word();
