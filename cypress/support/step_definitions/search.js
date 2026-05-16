import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../POM/HomePage";

const homePage = new HomePage();

Given("I open the home page", () => {
  homePage.visit();
});

When("I search for valid product in search page", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.validProduct);
  });
});

When("I search for invalid product in search page", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.invalidProduct);
  });
});

Then("search results should appear", () => {
  cy.getByData("product-name").should("exist");
  cy.getByData("product-name").first().should("be.visible");
});

Then("no search results should appear", () => {
  cy.get("body").should("contain.text", "There are no products found");
});