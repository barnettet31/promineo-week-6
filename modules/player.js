import {Deck} from "./deck.js";

export class Player {
  constructor(deck, name, counterReference, cardRef) {
    if(!deck instanceof Deck) throw Error('Deck parameter needs to be an instance of a Deck');
    this.name = name;
    this.deck = deck;
    this.counter = counterReference;
    this.htmlCardReference = cardRef;
    this.score = 0;
   
   
  }
  
  playerDrawCard(){
   return this.deck.returnCard();
  }
  incrementPlayerScore(){
    this.score = this.score + 1;
    this.counter.innerHTML = this.score;
  }
  returnPlayerScore(){
    return this.score;
  }
  updateCardHtml(card){
    this.htmlCardReference.forEach((element) => {
      element.innerHTML = `${card.value} ${card.suit}`;
      element.style.color = card.color;
    });
  }
}


