import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the home page", () => {
  cy.visit("https://practicesoftwaretesting.com/");
});

When("I search for valid product", () => {
  cy.get('[data-test="search-query"]').clear().type("hammer");
  cy.get('[data-test="search-submit"]').click();
});

Then("product results should be visible", () => {
  cy.get('[data-test="product-name"]').should("exist");
  cy.get('[data-test="product-name"]').first().should("be.visible");
});