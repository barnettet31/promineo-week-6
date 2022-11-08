# Promineo Week 6 Homework

This is my homework for week 6 of the Promineo Front End Development Bootcamp. 

## Table of contents

- [Overview](#overview)
  - [Links](#links)
- [My process](#my-process)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview
This final JavaScript project is an automated version of the classic card game WAR.  
- As a part of this assignment, you will also be asked to consider:
- Creating classes such as Card, Deck & Player
- Keeping in mind what fields and methods each class might have.

- The completed project will do the following:

- Deal 26 Cards to 2 Players from a Deck
- Iterate through the turns where each Player plays a Card
- Award a point to the Player with the higher Card
- Ties result in zero points for both Players
- After all cards have been played, display the score and declare the winner.
- Finally, you will be asked to write a Unit Test using Mocha and Chai for at least one of your functions



### Links
- Live Site URL: [Live Site On GitHub Pages](https://barnettet31.github.io/promineo-week-6/)

## My process
I first started by laying out a very basic UI for a user to view the cards live, track the scores, and then also deal new cards every round! 

After laying out the UI, I grabbed ahold of the necessary elements from the page so that I can update them on every round! 

Next I created classes to represent each player, each card, deck, and finally the game respectively.

On page load the deck is created in the game with the cards randomly shuffled, then it deals out 26 of those cards to each player.

When the button "deal" is clicked, each player's card from the top is popped off and compared, and the score is updated accordingly using a setter method. 
When the end of the player decks are won, a small pop up appears that tells the players what they have won, and then asks if they want to replay! Upon replay the location is reset! 



### What I learned
We are implementing Classes in JS so I will be implementing those and working on just a basic menu app. 
Particularly Proud of this which is the shuffle method on the decks, it randomly swaps values of js functions using ES6 array destructuring! 

```js

shuffle() {
    for(let i = this.numberOfCards -1; i > 0; i--){
        const newIndex = Math.floor(Math.random() * (i +1));
        [this.cards[newIndex], this.cards[i]] = [this.cards[i], this.cards[newIndex]] // used a fancy array destructuring to reassign values (thank you python)
    }
  
    
  }
```





## Author

- Twitter - [@barnett_travis5](https://twitter.com/barnett_travis5)
- LinkedIn - [@travis-barnette-ba7987237](https://www.linkedin.com/in/travis-barnette-ba7987237/)
