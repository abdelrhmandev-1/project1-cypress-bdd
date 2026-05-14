import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";

const homePage = new HomePage();
const productPage = new ProductPage();

Given("I open the home page", () => {
  homePage.visit();
});

When("I search for valid product", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.validProduct);
  });
});

When("I open the first product", () => {
  homePage.openFirstProduct();
});

Then("product details should be visible", () => {
  productPage.verifyProductDetails();
});