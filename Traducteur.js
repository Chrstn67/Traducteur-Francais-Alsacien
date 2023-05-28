const traduction = {
  bonjour: "Bùschùr (Guete Morje)",
  bonsoir: "Guete'n Owe",
  salut: "Salü",
  merci: "Merci",
  prénom: "vornàmme",
  nom: "nàmme",
  "nom de famille": "fàmilienàmme",
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
  "à tous": "bisàmme",
  "faire connaissance": "sich kännelehere",
  "comment t'appelles-tu": "Wie heisch dü ?",
  "je m'appelle": "Ìch heiss",
  "et toi": "ùn dü ?",
  "quel est ton nom": "Wie ìsch diner Nàmme ?",
  "quel est votre prénom": "Wie ìsch diner Vornàmme ?",
  "mon nom est": "Minner nàmme ìsch",
  "mon prénom est": "Minner vornàmmer ìsch",
  enchanté: "Es frajt mich !",
  enchantée: "Es frajt mich !",
  "où habites-tu": "Wo wohnsch dü ?",
  "j'habite à": "Ìch whon ìn",
};

const handleSubmit = function (event) {
  event.preventDefault();

  const input = document.querySelector("#translator_input").value;
  const result = document.querySelector("#resultAls");

  if (input === "") {
    result.innerHTML = "Veuillez entrer ce que vous souhaitez traduire";
  } else {
    const translatedPhrases = [];

    let remainingInput = input.toLowerCase();
    let foundMatch = true;

    while (remainingInput.length > 0 && foundMatch) {
      foundMatch = false;

      for (const key in traduction) {
        if (remainingInput.startsWith(key.toLowerCase())) {
          translatedPhrases.push(traduction[key]);
          remainingInput = remainingInput.slice(key.length).trim();
          foundMatch = true;
          break;
        }
      }

      if (!foundMatch) {
        const words = remainingInput.split(" ");
        const firstWord = words[0];

        if (traduction.hasOwnProperty(firstWord)) {
          translatedPhrases.push(traduction[firstWord]);
          remainingInput = remainingInput.slice(firstWord.length).trim();
          foundMatch = true;
        }
      }
    }

    if (translatedPhrases.length > 0) {
      const translatedSentence = translatedPhrases.join(" ");
      result.innerHTML = translatedSentence;
    } else {
      result.innerHTML =
        "Mot ou expression inconnu(e) au bataillon... Pour l'instant &#128521;" +
        "<br>" +
        " " +
        "Mais vérifie l'orthographe quand même &#128527;";
    }
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const section = document.querySelector("#filtre");
const displayTranslations = (translations) => {
  section.innerHTML = "";
  let i = 0;

  for (const key in translations) {
    const div = document.createElement("div");
    div.textContent = `${key} : ${translations[key]}`;
    section.appendChild(div);
    i++;

    if (i === 7) {
      break;
    }
  }
};

const input = document.querySelector("input");
input.addEventListener("input", (event) => {
  const value = event.target.value;
  const filtered = {};

  for (const key in traduction) {
    if (key.toLowerCase().includes(value.toLowerCase())) {
      filtered[key] = traduction[key];
    }
  }

  displayTranslations(filtered);
});

const boardPrononciation = {
  btnPrononciation: null,

  init: function () {
    this.btnPrononciation = document.querySelector("#prononciation");
    this.btnPrononciation.addEventListener("click", this.handleClick);
  },

  handleClick: function (event) {
    event.preventDefault();
    const asideElem = document.querySelector("ul");
    asideElem.classList.toggle("list--hidden");
  },
};

boardPrononciation.init();

const btnInfos = {
  buttonInfos: null,

  init: function () {
    this.buttonInfos = document.querySelector(".infos");
    this.buttonInfos.addEventListener("click", this.handleClick);
  },

  handleClick: function (event) {
    event.preventDefault();
    const pElem = document.querySelector("p");
    pElem.classList.toggle("infos-Als--hidden");
  },
};

btnInfos.init();
