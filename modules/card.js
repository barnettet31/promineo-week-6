 class Card {
  constructor(suit, value) {
    this.suit = suit;
    this.value = value;
  }
  get color() {
    return this.suit == "&#9824;" || this.suit == "&#x2663;" ? "black" : "red";
  }
  
}

export {
  Card
}