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

When("I search for invalid product", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.invalidProduct);
  });
});

When("I type valid product in search input", () => {
  cy.fixture("userData").then((data) => {
    homePage.typeInSearch(data.validProduct);
  });
});

Then("product results should be visible", () => {
  cy.getByData("product-name").should("exist");
  cy.getByData("product-name").first().should("be.visible");
});

Then("no product results should be visible", () => {
  cy.get("body").should("contain.text", "There are no products found");
});

Then("search input should contain valid product", () => {
  cy.fixture("userData").then((data) => {
    cy.getByData("search-query").should("have.value", data.validProduct);
  });
});