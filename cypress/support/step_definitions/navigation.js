import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../POM/HomePage";

const homePage = new HomePage();

When("I click sign in from navigation page", () => {
  homePage.openSignIn();
});

Then("sign in page should be displayed", () => {
  cy.url().should("include", "/auth/login");
  cy.getByData("email").should("be.visible");
});

Then("navigation buttons should be visible", () => {
  homePage.verifyCartButtonVisible();
  homePage.verifySignInButtonVisible();
});