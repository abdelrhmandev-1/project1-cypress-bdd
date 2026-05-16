import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../POM/HomePage";
import ProductPage from "../POM/ProductPage";

const homePage = new HomePage();
const productPage = new ProductPage();

When("I search product before opening details", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.validProduct);
  });
});

When("I open product details from product page", () => {
  homePage.openFirstProduct();
});

Then("product details page should be displayed", () => {
  productPage.verifyProductDetails();
});