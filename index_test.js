import { Deck } from "./modules/deck.js";

const expect = chai.expect;
describe("MyFunctions", function () {
  describe("Deck", function () {
    it("Create an instance of a deck", function () {
      const myDeck = new Deck();
      expect(myDeck).to.be.an.instanceof(Deck);
    });
   
  });

});
