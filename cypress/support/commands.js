Cypress.Commands.add("getByData", (selector, options = {}) => {
  return cy.get(`[data-test="${selector}"]`, options);
});

Cypress.Commands.add("visitHomePage", () => {
  cy.visit("https://practicesoftwaretesting.com/");
});

Cypress.Commands.add("clickSignIn", () => {
  cy.getByData("nav-sign-in").click();
});

Cypress.Commands.add("login", (email, password) => {
  cy.getByData("email").clear().type(email);
  cy.getByData("password").clear().type(password);
  cy.getByData("login-submit").click();
});

Cypress.Commands.add("searchProduct", (productName) => {
  cy.getByData("search-query").clear().type(productName);
  cy.getByData("search-submit").click();
});

Cypress.Commands.add("openProduct", (productName) => {
  cy.searchProduct(productName);

  cy.getByData("product-name", { timeout: 10000 })
    .contains(productName, { matchCase: false })
    .should("be.visible")
    .click({ force: true });

  cy.url({ timeout: 10000 }).should("include", "/product");
});

Cypress.Commands.add("addToCart", () => {
  cy.getByData("add-to-cart", { timeout: 10000 })
    .scrollIntoView()
    .should("be.visible")
    .click({ force: true });
});

Cypress.Commands.add("goToCart", () => {
  cy.getByData("nav-cart").click();
});

Cypress.Commands.add("openRegistration", () => {
  cy.visit("https://practicesoftwaretesting.com/auth/register");
});

Cypress.Commands.add("fillRegistration", (user) => {
  cy.getByData("first-name").clear().type(user.firstName);
  cy.getByData("last-name").clear().type(user.lastName);
  cy.getByData("dob").clear().type(user.dob);
  cy.getByData("street").clear().type(user.street);
  cy.getByData("postal_code").clear().type(user.postalCode);
  cy.getByData("city").clear().type(user.city);
  cy.getByData("state").clear().type(user.state);
  cy.getByData("country").select(user.country);
  cy.getByData("phone").clear().type(user.phone);
  cy.getByData("email").clear().type(user.email);
  cy.getByData("password").clear().type(user.password);
});

Cypress.Commands.add("openContactPage", () => {
  cy.contains("Contact").click();
});

Cypress.Commands.add("openCategoriesMenu", () => {
  cy.contains("Categories").click();
});

Cypress.Commands.add("openHandToolsCategory", () => {
  cy.openCategoriesMenu();
  cy.contains("Hand Tools").click();
});