Cypress.Commands.add('visitHomePage', () => {
  cy.visit('https://practicesoftwaretesting.com/');
});

Cypress.Commands.add('clickSignIn', () => {
  cy.contains('Sign in').click();
});

Cypress.Commands.add('login', (email, password) => {
  cy.get('[data-test="email"]').clear().type(email);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-submit"]').click();
});

Cypress.Commands.add('searchProduct', (product) => {
  cy.get('[data-test="search-query"]').clear().type(product);
});

Cypress.Commands.add('openProduct', (product) => {
  cy.searchProduct(product);

  cy.contains('a', product, { timeout: 10000 })
    .should('be.visible')
    .first()
    .click({ force: true });

  cy.url({ timeout: 10000 }).should('include', '/product');
});

Cypress.Commands.add('addToCart', () => {
  cy.contains('button', 'Add to cart', { timeout: 10000 })
    .scrollIntoView()
    .should('be.visible')
    .click({ force: true });
});

Cypress.Commands.add('goToCart', () => {
  cy.get('[data-test="nav-cart"]').click();
});

Cypress.Commands.add('openRegistration', () => {
  cy.visit('https://practicesoftwaretesting.com/auth/register');
});

Cypress.Commands.add('fillRegistration', (user) => {
  cy.get('[data-test="first-name"]').clear().type(user.firstName);
  cy.get('[data-test="last-name"]').clear().type(user.lastName);
  cy.get('[data-test="dob"]').clear().type(user.dob);
  cy.get('[data-test="street"]').clear().type(user.street);
  cy.get('[data-test="postal_code"]').clear().type(user.postalCode);
  cy.get('[data-test="city"]').clear().type(user.city);
  cy.get('[data-test="state"]').clear().type(user.state);
  cy.get('[data-test="country"]').select(user.country);
  cy.get('[data-test="phone"]').clear().type(user.phone);
  cy.get('[data-test="email"]').clear().type(user.email);
  cy.get('[data-test="password"]').clear().type(user.password);
});

Cypress.Commands.add('openContactPage', () => {
  cy.contains('Contact').click();
});

Cypress.Commands.add('openCategoriesMenu', () => {
  cy.contains('Categories').click();
});

Cypress.Commands.add('openHandToolsCategory', () => {
  cy.openCategoriesMenu();
  cy.contains('Hand Tools').click();
});
Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test="${selector}"]`);
});

Cypress.Commands.add("searchProduct", (productName) => {
  cy.getByData("search-query").clear().type(productName);
  cy.getByData("search-submit").click();
});