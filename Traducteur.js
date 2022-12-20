const traduction = {
  bonjour: "Bùschùr (Guete Morje)",
  bonsoir: "Guete'n Owe",
  salut: "Salü",
  merci: "Merci",
  prénom: "Vornàmme",
  nom: "Nàmme",
  "nom de famille": "Fàmilienàmme",
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
  "faire connaissance": "sich kännelehere",
  "comment t'appelles-tu ?": "Wie heisch dü ?",
  "je m'appelle...": "Ìch heiss...",
  "et toi ?": "ùn dü ?",
  "quel est ton nom ?": "Wie ìsch diner Nàmme ?",
  "quel est votre prénom ?": "Wie ìsch diner Vornàmme ?",
  "mon nom est...": "Minner nàmme ìsch",
  "mon prénom est...": "Minner vornàmmer ìsch",
};

// On crée une fonction pour gérer le submit
const handleSubmit = function (event) {
  // ATTENTION PREVENT DEFAULT ULTRA IMPORTANT SINON RECHARGEMENT DE PAGE
  event.preventDefault();
  let input;
  input = document.querySelector("#translator_input").value;
  input = input.toLowerCase();
  console.log(input);
  if (input === "") {
    const result = document.querySelector("#resultAls");
    result.innerHTML = "Veuillez entrer ce que vous souhaitez traduire";
  }
  // hasOwnProperty vérifie si la propriété existe dans un objet
  else if (traduction.hasOwnProperty(input)) {
    const result = document.querySelector("#resultAls");
    result.innerHTML = traduction[input];
  } else {
    const result = document.querySelector("#resultAls");
    result.innerHTML = "Mot ou expression inconnu(e) au bataillon...";
  }
};

// On récupère nos éléments
const form = document.querySelector("form");
// On rajoute l'event sur l'envoi du formulaire
form.addEventListener("submit", handleSubmit);

// tu récupères la section
const section = document.querySelector("#filtre");
// tu crées une fonction qui va boucler sur les clés du tableau et afficher les traductions
const displayTranslations = (translations) => {
  // tu vides la section
  section.innerHTML = "";
  let i = 0;
  // tu boucles sur les clés du tableau et tu affiches les traductions
  for (const key in translations) {
    const div = document.createElement("div");
    div.textContent = `${key} : ${traduction[key]}`;
    section.appendChild(div);
    i = i + 1;
    if (i === 7) {
      break;
    }
  }
};

// tu appelles la fonction pour afficher les traductions

// tu récupères le champ de recherche
const input = document.querySelector("input");
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
  },
  handleClick: function (event) {
    event.preventDefault();
    const asideElem = document.querySelector("ul");
    asideElem.classList.toggle("list--hidden");
  },
};

boardPrononciation.init();

// Bouton infos
const btnInfos = {
  init: function () {
    btnInfos.btnPrononciation = document.querySelector(".infos");
    btnInfos.btnPrononciation.addEventListener("click", btnInfos.handleClick);
  },
  handleClick: function (event) {
    event.preventDefault();
    const pElem = document.querySelector("p");
    pElem.classList.toggle("infos-Als--hidden");
  },
};

btnInfos.init();
