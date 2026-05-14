import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

const homePage = new HomePage();

Given("I open the home page", () => {
  homePage.visit();
});

When("I search for valid product", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.validProduct);
  });
});

Then("product results should be visible", () => {
  cy.getByData("product-name").should("exist");
  cy.getByData("product-name").first().should("be.visible");
});