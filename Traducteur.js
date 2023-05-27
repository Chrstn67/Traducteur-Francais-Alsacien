const traduction = {
  Bonjour: "Bùschùr (Guete Morje)",
  Bonsoir: "Guete'n Owe",
  Salut: "Salü",
  Merci: "Merci",
  prénom: "Vornàmme",
  nom: "Nàmme",
  "nom de famille": "Fàmilienàmme",
  "Merci beaucoup": "Merci vielmols",
  "Bon après-midi": "Gueter middàà",
  "Au revoir": "O revoir",
  "à tout de suite": "Bis glich",
  "à toute à l'heure": "Bis noochhärde",
  "à plus tard": "Bis später",
  "à la prochaine": "Bis's nächscht Mol",
  "Bonne journée": "Gueter Dàà",
  "Bonne nuit": "Guet Nàcht",
  "tout le monde": "bisàmme",
  "à tous": "bisàmme",
  "faire connaissance": "sich kännelehere",
  "Comment t'appelles-tu ?": "Wie heisch dü ?",
  "Je m'appelle": "Ìch heiss",
  "et toi": "ùn dü ?",
  "Quel est ton nom": "Wie ìsch diner Nàmme ?",
  "Quel est votre prénom": "Wie ìsch diner Vornàmme ?",
  "Mon nom est": "Minner nàmme ìsch",
  "Mon prénom est": "Minner vornàmmer ìsch",
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
        "Mot ou expression inconnu(e) au bataillon... Pour l'instant &#128521;";
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
