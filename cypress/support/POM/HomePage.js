class HomePage {
  visit() {
    cy.visit("/");
  }

  search(productName) {
    cy.searchProduct(productName);
  }

  typeInSearch(productName) {
    cy.getByData("search-query").clear().type(productName);
  }

  openFirstProduct() {
    cy.getByData("product-name").first().click();
  }

  openCart() {
    cy.getByData("nav-cart").click();
  }

  openSignIn() {
    cy.getByData("nav-sign-in").click();
  }

  selectCategory(categoryName) {
    cy.contains("label", categoryName).click();
  }

  verifySearchButtonVisible() {
    cy.getByData("search-submit").should("be.visible");
  }

  verifyCartButtonVisible() {
    cy.getByData("nav-cart").should("be.visible");
  }

  verifySignInButtonVisible() {
    cy.getByData("nav-sign-in").should("be.visible");
  }

  verifyProductListExists() {
    cy.getByData("product-name").should("exist");
  }

  verifyHomePageVisible() {
    cy.get("body").should("be.visible");
    cy.get("body").should("contain.text", "Practice");
  }

  verifyCategorySectionVisible() {
    cy.get("body").should("contain.text", "Categories");
    cy.get("body").should("contain.text", "Hand Tools");
  }
}

export default HomePage;