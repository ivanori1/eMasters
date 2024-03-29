describe("Smoke Test", () => {
  before(() => {
    
    // it is only call visti '/' because default url is set in cypres.json
    cy.visit("/");
  });

  context("Home Page", () => {
    it("Assert home page is loaded", () => {
      cy.assertHomePageLoaded();
    });
    it("Assert Game Card Container is visible and  within list of games", () => {
      cy.assertCardContainer();
    })
  });
  context("Sign Up", ()=> {
    it("Click on menu icon", () => {
      cy.clickMenu();
    })
    it("Sign up ", ()=> {
      cy.negativeSignUpTest();

    })
  });
  context("Sign Up Positive", ()=> {
    it("Login", () => {
      cy.positiveSignUp();
    })
  })

//   context("ChessRushGame", ()=> {
//     it("ChessRush", () => {
//       cy.chessRush();
//     })
//   })
 });
