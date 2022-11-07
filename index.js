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
class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
}

class Deck {
  constructor() {
    const suits = ["spades", "hearts", "clubs", "diamonds"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];
    this.deck = [];
    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = new Card(suits[i], values[x]);
        this.deck.push(card);
      }
    }
  }

  dealCard() {
    let card = this.deck[Math.floor(Math.random() * this.deck.length)];
    this.deck.splice(this.deck.indexOf(card), 1);
    return card;
  }
}

class WarGame {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.ties = 0;
  }
  start() {
    this.dealCardsToPlayers();
  }
  updateTies(value){
    tieScore.innerText = this.ties;
  }
  playersDraw(){
   let player1Card = this.player1.dealCard();
   let player2Card = this.player2.dealCard();
    player1CardValues.forEach(
      (element) =>
        (element.innerHTML = ` ${player1Card.value} ${
          suitsHTML[player1Card.suit]
        }`)
    );
    player2CardValues.forEach(
      (element) =>
        (element.innerHTML = `${player2Card.value} ${
          suitsHTML[player2Card.suit]
        }`)
    );
    let winner = player1Card.value > player2Card.value ? this.player1 : this.player2; 
    console.log(winner);
  }
}
class Player {
  constructor(name, number, cards) {
    this.cards = [...cards];
    this.playerNumber = number;
    this.name = name;
    this.score = 0;
  }
  set score(value) {
    document.querySelector(`.player-${this.playerNumber}-score`).innerText =
      value;
  }
  dealCard() {
    let card = this.cards[Math.floor(Math.random() * this.cards.length)];
    this.cards.splice(this.cards.indexOf(card), 1);
    return card;
  }
  win(){
    this.score++;
  }
}
const deck = new Deck();
const player1 = new Player(player1NameInput, "1", [...Array(26).keys()].map(x=>deck.dealCard()));
const player2 = new Player(player2NameInput, "2", [...Array(26).keys()].map(x=>deck.dealCard()));
const game = new WarGame(player1, player2);
dealButton.addEventListener('click', ()=>game.playersDraw());
