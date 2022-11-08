import { War } from "./modules/war.js";
const suitsHTML = {
  spades: "&#9824;",
  hearts: "&#x2764;",
  clubs: "&#x2663;",
  diamonds: "&#x2666;",
};
let player1NameInput = prompt("What is the name of the first player?");
let player2NameInput = prompt("What is the name of the second player?");
const player1Name = document.querySelector(".player-1-name");
const player2Name = document.querySelector(".player-2-name");

//update UI with names
player1Name.innerText = player1NameInput;
player2Name.innerText = player2NameInput;

const dealButton = document.querySelector(".deal_button--js");
const player1CardValues = document.querySelectorAll(".player-1-card");
const player2CardValues = document.querySelectorAll(".player-2-card");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");
const tieScore = document.querySelector(".tie-score");
//WAR Class
//Deck Class
//Card Class
//Player Class
class Deck {

}
class Card{

}
class Player{}
const war = new War();
// dealButton.addEventListener('click', ()=>game.playersDraw());
