import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../POM/HomePage";

const homePage = new HomePage();

When("I select category from filter page", () => {
  cy.fixture("userData").then((data) => {
    homePage.selectCategory(data.category);
  });
});

Then("filtered product results should be visible", () => {
  cy.getByData("product-name").should("exist");
  cy.getByData("product-name").first().should("be.visible");
});

Then("category area should be visible", () => {
  homePage.verifyCategorySectionVisible();
});