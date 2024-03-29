/**
 * The support/commands.js is file where all separated commands are placed
 * Cypress.Commands.add() create new function that could be call and reuse
 * multiple time in any integration/spec.js file
 */

/*
Command for verifiying every element visiblity in home-page
 method get CSS (from fixture/locators.json) and should assert it is visible
*/
const lists = require("./../fixtures/lists");

//Assert that home page contains logo
Cypress.Commands.add("assertHomePageLoaded", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.logo).should("be.visible");
  });
});

//This loop works for testing of games Container. Need to make code prettier and to put a list into separate fixture JSON file and integrate here
Cypress.Commands.add("assertCardContainer", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    let listGame = lists.listOfGames;
    listGame.forEach(function(element) {
      cy.get(locator.cardContainer).within(function() {
        cy.get(locator.cardName).contains(element);
      });
    });
  });
});

Cypress.Commands.add("clickMenu", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.menuIcon).click();
    cy.get(locator.signUpButton).click();
  });
});


Cypress.Commands.add("negativeSignUpTest", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.confirmSignUpButton).click();
    let listError = lists.listOfErrors;
    listError.forEach(function(element) {
      cy.get(locator.signUpContainer).within(function() {
        cy.get(locator.signUpInputErrors).contains(element);
      });
    });
  });
});


Cypress.Commands.add("positiveSignUp", () => {
  cy.fixture("locators").as("locatorFixture");
  cy.get("@locatorFixture").then(locator => {
    cy.get(locator.loginTab).click();
    cy.get(locator.username).type('klipan');
    cy.get(locator.loginButton).click();
    cy.get(locator.password).type('Mihajlo1');
    cy.get(locator.loginButton).click();
    cy.wait(5);
    cy.get(locator.loginAvatar).should('be.visible');
  });
});

// Cypress.Commands.add("chessRush", () => {
//   cy.fixture("locators").as("locatorFixture");
//   cy.get("@locatorFixture").then(locator => {
//     cy.wait(15);
//     cy.get(locator.chessRushCard).click();
//   });
// });