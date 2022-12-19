// On récupère nos éléments
const input = document.querySelector("#translator_input");
const form = document.querySelector("form");

// On crée une fonction pour gérer le submit
const handleSubmit = function (event) {

	// ATTENTION PREVENT DEFAULT ULTRA IMPORTANT SINON RECHARGEMENT DE PAGE
	event.preventDefault();
	// hasOwnProperty vérifie si la propriété existe dans un objet
	if(traduction.hasOwnProperty(input.value)){
		console.log(traduction[input.value]);
	}
	else{
		console.log("false");
	}
}
// On rajoute l'event sur l'envoi du formulaire
form.addEventListener("submit", handleSubmit);

let francais = ["bonjour", "merci"];

let alsacien = ["bùschùr", "merci vielmols"];

let traduction = {
	"bonjour-salut" : "bùschùr",
	merci : "merci vielmols"
}

// if (word == francais[0]) {
//   console.log(alsacien[0]);
// }






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

// const search_word = function keyup() {
//   let input = document.getElementById("translatorFrAls").value;
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
