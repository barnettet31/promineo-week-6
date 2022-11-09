import { War } from "./modules/war.js";
import { Deck } from "./modules/deck.js";
import { Player } from "./modules/player.js";
let player1NameInput, player2NameInput;
const player1Name = document.querySelector(".player-1-name");
const player2Name = document.querySelector(".player-2-name");
const dealButton = document.querySelector(".deal_button--js");
const player1CardValues = document.querySelectorAll(".player-1-card");
const player2CardValues = document.querySelectorAll(".player-2-card");
const player1Score = document.querySelector(".player-1-score");
const player2Score = document.querySelector(".player-2-score");

window.addEventListener('load',()=>{
  if (document.location.pathname == "/" ||  document.location.pathname == "/promineo-week-6/" ) {
    player1NameInput = prompt("What is the name of the first player?");
    player2NameInput = prompt("What is the name of the second player?");
    player1Name.innerText = player1NameInput;
    player2Name.innerText = player2NameInput;
    const baseDeck = new Deck();
    baseDeck.shuffle();
    const middleOfBaseDeck = Math.ceil(baseDeck.numberOfCards / 2);
    const player1 = new Player(
      new Deck(baseDeck.cards.slice(0, middleOfBaseDeck)),
      player1NameInput,
      player1Score,
      player1CardValues
    );
    const player2 = new Player(
      new Deck(baseDeck.cards.slice(middleOfBaseDeck, baseDeck.numberOfCards)),
      player2NameInput,
      player2Score,
      player2CardValues
    );
    const game = new War(player1, player2);

    dealButton.addEventListener("click", () => {
      game.runRound();
    });
  }

})

