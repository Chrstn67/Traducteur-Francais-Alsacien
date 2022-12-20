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

const traduction = {
  bonjour: "Bùschùr (Guete Morje)",
  bonsoir: "Guete'n Owe",
  salut: "Salü",
  merci: "Merci",
  "merci beaucoup": "Merci vielmols",
  "bon après-midi": "Gueter middàà",
  "au revoir": "O revoir",
  "à tout de suite": "Bis glich",
  "à toute à l'heure": "Bis noochhärde",
  "à plus tard": "Bis später",
  "à la prochaine": "Bis's nächscht Mol",
  "bonne journée": "Gueter Dàà",
  "bonne nuit": "Guet Nàcht",
  "tout le monde": "bisàmme",
};

// tu récupères la section
const section = document.querySelector("#filtre");
// tu crées une fonction qui va boucler sur les clés du tableau et afficher les traductions
const displayTranslations = (translations) => {
  // tu vides la section
  section.innerHTML = "";
  // tu boucles sur les clés du tableau et tu affiches les traductions
  for (const key in translations) {
    const div = document.createElement("div");
    div.textContent = `${key} : ${traduction[key]}`;
    section.appendChild(div);
  }
};

// tu appelles la fonction pour afficher les traductions
displayTranslations(traduction);

// tu récupères le champ de recherche
const input = document.querySelector("input");
// input = input.toLowerCase();
// tu écoutes l'événement input
input.addEventListener("input", (event) => {
  // tu récupères la valeur de l'input
  const value = event.target.value;

  // tu clones tes traductions pour ne pas modifier le tableau original
  const filtered = { ...traduction };
  // tu filtres les clés du tableau en fonction de la valeur de l'input
  for (const key in traduction) {
    if (!key.includes(value)) {
      delete filtered[key];
    }
  }

  // tu utilises la fonction
  displayTranslations(filtered);
});

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

// // barre de recherche à adapter:
// // https://stacklima.com/barre-de-recherche-utilisant-html-css-et-javascript/

// const search_word = function keyup() {
//   let input = document.getElementById("translator_input").value;
//   input = input.toLowerCase();
//   let x = document.getElementsByClassName("list-proposition");

//   for (i = 0; i < x.length; i++) {
//     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//       x[i].style.display = "none";
//     } else {
//       x[i].style.display = "list-item";
//     }
//   }
// };

// search_word();
