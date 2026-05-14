import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import ProductPage from "../../pages/ProductPage";
import CartPage from "../../pages/CartPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

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

When("I add the product to cart", () => {
  productPage.addToCart();
});

When("I open the cart page", () => {
  homePage.openCart();
});

Then("cart page should open", () => {
  cartPage.verifyCartPage();
});

Then("product should be added to cart", () => {
  productPage.verifyProductAdded();
});