import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";

const homePage = new HomePage();

Given("I open the home page", () => {
  homePage.visit();
});

When("I select category from fixture", () => {
  cy.fixture("userData").then((data) => {
    homePage.selectCategory(data.category);
  });
});

Then("filtered products should be visible", () => {
  cy.getByData("product-name").should("exist");
  cy.getByData("product-name").first().should("be.visible");
});

Then("category section should be visible", () => {
  homePage.verifyCategorySectionVisible();
});

Then("product list should exist", () => {
  homePage.verifyProductListExists();
});