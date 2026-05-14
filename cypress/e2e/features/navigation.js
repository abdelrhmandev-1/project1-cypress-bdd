import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import HomePage from "../../pages/HomePage";
import CartPage from "../../pages/CartPage";

const homePage = new HomePage();
const cartPage = new CartPage();

Given("I open the home page", () => {
  homePage.visit();
});

When("I click sign in", () => {
  homePage.openSignIn();
});

When("I open the cart page", () => {
  homePage.openCart();
});

Then("sign in page should open", () => {
  cy.url().should("include", "/auth/login");
  cy.getByData("email").should("be.visible");
});

Then("cart page should open", () => {
  cartPage.verifyCartPage();
});

Then("cart button should be visible", () => {
  homePage.verifyCartButtonVisible();
});

Then("sign in button should be visible", () => {
  homePage.verifySignInButtonVisible();
});