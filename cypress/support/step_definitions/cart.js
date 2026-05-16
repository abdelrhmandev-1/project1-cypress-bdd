import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../POM/HomePage";
import ProductPage from "../POM/ProductPage";
import CartPage from "../POM/CartPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

When("I search product before adding to cart", () => {
  cy.fixture("userData").then((data) => {
    homePage.search(data.validProduct);
  });
});

When("I open product for cart", () => {
  homePage.openFirstProduct();
});

When("I add product from cart scenario", () => {
  productPage.addToCart();
});

When("I open cart from cart page", () => {
  homePage.openCart();
});

Then("cart checkout page should be displayed", () => {
  cartPage.verifyCartPage();
});

Then("cart success message should be displayed", () => {
  productPage.verifyProductAdded();
});