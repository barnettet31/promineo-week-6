import { Card } from "./card.js";
const CARD_SUITS = ["&#9824;", "&#x2764;", "&#x2663;", "&#x2666;"];
const CARD_VALUES = [
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
export const makeTheDeck = () =>
  CARD_SUITS.flatMap((suit) =>
    CARD_VALUES.map((value) => new Card(suit, value))
  );
class Deck {
  constructor(cards = makeTheDeck()) {
    this.cards = cards;
  }
  get numberOfCards() {
    return this.cards.length;
  }
  addCard(card){
    this.cards.push(card);
  }
  returnCard(){
    return this.cards.shift()
  }
  shuffle() {
    for(let i = this.numberOfCards -1; i > 0; i--){
        const newIndex = Math.floor(Math.random() * (i +1));
        [this.cards[newIndex], this.cards[i]] = [this.cards[i], this.cards[newIndex]] // used a fancy array destructuring to reassign values (thank you python)
    }
  
    
  }
  
}

export { Deck };
