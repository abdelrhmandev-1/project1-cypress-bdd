import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../POM/HomePage";
import ProductPage from "../POM/ProductPage";
import CartPage from "../POM/CartPage";

const homePage = new HomePage();
const productPage = new ProductPage();
const cartPage = new CartPage();

When("I open cart from cart page", () => {
  homePage.openCart();
});

When("I open product for cart", () => {
  homePage.openFirstProduct();
});

When("I add product from cart scenario", () => {
  productPage.addToCart();
});

Then("cart checkout page should be displayed", () => {
  cartPage.verifyCartPage();
});

Then("cart success message should be displayed", () => {
  productPage.verifyProductAdded();
});