import { Player } from "./player.js";
const CARD_VALUE_LOOK_UP = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};
class War {
  constructor(player1, player2) {
    if (!player1 instanceof Player || !player2 instanceof Player)
      throw Error("Players need to be an instance of Player.");
    this.player1 = player1;
    this.player2 = player2;
    this.ties = 0;
  }

  endGame() {
    const winningPlayer =
      this.player1.returnPlayerScore() > this.player2.returnPlayerScore()
        ? this.player1
        : this.player2;

    alert(
      `Congratulations ${
        winningPlayer.name
      }! You won.\n Your Score was: ${winningPlayer.returnPlayerScore()}\n The page will reload once you close this alert.`
    );
    location.reload();
  }
  runRound() {
    if (
      this.player1.deck.numberOfCards === 0 ||
      this.player2.deck.numberOfCards === 0
    )
      
    return this.endGame();
    const player1Card = this.player1.playerDrawCard();
    const player2Card = this.player2.playerDrawCard();
    this.updatePlayersHTML(player1Card, player2Card);
    if (CARD_VALUE_LOOK_UP[player1Card.value] > CARD_VALUE_LOOK_UP[player2Card.value] ) {
      return this.player1.incrementPlayerScore();
    } else if (
      CARD_VALUE_LOOK_UP[player2Card.value] >
      CARD_VALUE_LOOK_UP[player1Card.value]
    ) {
      return this.player2.incrementPlayerScore();
    } else {
      this.ties++;
      const tieScoreSpan = document.querySelector(".tie-score");
      tieScoreSpan.innerHTML = this.ties;
    }
  }
  updatePlayersHTML(card1, card2) {
    this.player1.updateCardHtml(card1);
    this.player2.updateCardHtml(card2);
  }
}
export { War };
