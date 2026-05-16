class HomePage {
  visit() {
    cy.visit("https://practicesoftwaretesting.com/", {
      failOnStatusCode: false,
    });

    cy.wait(2000);
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
    cy.visit("/checkout", { failOnStatusCode: false });
  }

  openSignIn() {
    cy.visit("/auth/login", { failOnStatusCode: false });
  }

  selectCategory(categoryName) {
    cy.contains("label", categoryName).click();
  }

  verifySearchButtonVisible() {
    cy.getByData("search-submit").should("be.visible");
  }

  verifyCartButtonVisible() {
    cy.url().should("include", "/checkout");
  }

  verifySignInButtonVisible() {
    cy.getByData("email").should("be.visible");
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
  }
}

export default HomePage;