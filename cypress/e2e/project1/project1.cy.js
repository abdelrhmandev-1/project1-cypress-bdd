describe('Software Testing Project 1 - Practice Software Testing', () => {
  let userData;

  before(() => {
    cy.fixture('userData').then((data) => {
      userData = data;
    });
  });

  beforeEach(() => {
    cy.visitHomePage();
  });

  afterEach(() => {
    cy.log('Test finished');
  });

  it('TC01 - Home page loads successfully', () => {
    cy.url().should('include', 'practicesoftwaretesting');
    cy.get('body').should('be.visible');
    cy.contains('Home').should('be.visible');
  });

  it('TC02 - Sign in page opens successfully', () => {
    cy.clickSignIn();

    cy.url().should('include', '/auth/login');
    cy.get('[data-test="email"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
  });

  it('TC03 - Invalid login keeps user on login page', () => {
    cy.clickSignIn();
    cy.login('wrong@test.com', '123456');

    cy.url().should('include', '/auth/login');
    cy.get('[data-test="email"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
  });

  it('TC04 - Search field accepts product name', () => {
    cy.searchProduct(userData.searchItem);

    cy.get('[data-test="search-query"]').should('have.value', userData.searchItem);
    cy.get('body').should('contain.text', userData.searchItem);
    cy.url().should('include', 'practicesoftwaretesting');
  });

  it('TC05 - Product details page opens for Pliers', () => {
    cy.openProduct('Pliers');

    cy.url().should('include', '/product');
    cy.contains('Pliers').should('exist');
    cy.contains('button', 'Add to cart').should('be.visible');
  });

  it('TC06 - Product can be added to cart', () => {
    cy.openProduct('Pliers');
    cy.addToCart();

    cy.get('[data-test="nav-cart"]').should('be.visible');
    cy.url().should('include', '/product');
    cy.get('body').should('be.visible');
  });

  it('TC07 - Cart page opens and shows selected product', () => {
    cy.openProduct('Pliers');
    cy.addToCart();
    cy.goToCart();

    cy.url().should('include', '/checkout');
    cy.contains('Pliers').should('exist');
    cy.get('body').should('be.visible');
  });

  it('TC08 - Registration page opens successfully', () => {
    cy.openRegistration();

    cy.url().should('include', '/auth/register');
    cy.get('[data-test="first-name"]').should('be.visible');
    cy.get('[data-test="last-name"]').should('be.visible');
    cy.get('[data-test="email"]').should('be.visible');
  });

  it('TC09 - Registration form accepts fixture data', () => {
    cy.openRegistration();
    cy.fillRegistration(userData);

    cy.get('[data-test="first-name"]').should('have.value', userData.firstName);
    cy.get('[data-test="last-name"]').should('have.value', userData.lastName);
    cy.get('[data-test="email"]').should('have.value', userData.email);
  });

  it('TC10 - Register button is visible and enabled', () => {
    cy.openRegistration();

    cy.get('[data-test="register-submit"]').should('be.visible');
    cy.get('[data-test="register-submit"]').should('be.enabled');
    cy.get('form').should('exist');
  });

  it('TC11 - Hand Tools category opens successfully', () => {
    cy.openHandToolsCategory();

    cy.url().should('include', 'category');
    cy.get('body').should('contain.text', 'Hand Tools');
    cy.get('body').should('be.visible');
  });

  it('TC12 - Main navigation is visible', () => {
    cy.get('nav').first().should('exist');
    cy.get('nav').first().should('be.visible');
    cy.contains('Contact').should('be.visible');
  });

  it('TC13 - Sort dropdown is visible and selectable', () => {
  cy.get('[data-test="sort"]').should('exist')
  cy.get('[data-test="sort"]').should('be.visible')
  cy.get('[data-test="sort"]').select('Name (A - Z)')
})

  it('TC14 - Search input is visible and enabled', () => {
    cy.get('input[data-test="search-query"]').should('exist');
    cy.get('input[data-test="search-query"]').should('be.visible');
    cy.get('input[data-test="search-query"]').should('be.enabled');
  });

  it('TC15 - Contact page opens successfully', () => {
    cy.openContactPage();

    cy.url().should('include', '/contact');
    cy.get('form').should('be.visible');
    cy.contains('Contact').should('be.visible');
  });
});