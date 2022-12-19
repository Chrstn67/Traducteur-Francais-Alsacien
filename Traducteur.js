let input = document.querySelector("#translator_input");
word = input.value;
console.log(word);

let francais = ["bonjour", "merci"];

let alsacien = ["bùschùr", "merci vielmols"];

if (word == francais[0]) {
  console.log(alsacien[0]);
}

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
