/**
 * The support/commands.js is file where all separated commands are placed
 * Cypress.Commands.add() create new function that could be call and reuse
 * multiple time in any integration/spec.js file
 */

/*
Command for verifiying every element visiblity in home-page
 method get CSS (from fixture/locators.json) and should assert it is visible
*/
//Assert that home page contains logo
Cypress.Commands.add("assertHomePageLoaded", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.logo).should("be.visible");
  });
});

//This loop works for testing of tours. Need to make code prettier and to put a list into separate fixture JSON file and integrate here
Cypress.Commands.add("assertCardContainer", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    var list = [
      "Dota 2",
      "Fifa 2019",
      "Rainbow Six Siege",
      "Underlords",
      "Teamfight Tactics",
      "Chess Rush"
    ];

    list.forEach(function(element) {
      cy.get(locator.cardContainer).should("be.visible");
      cy.get(locator.cardName).contains(element);
    });
  });
});
