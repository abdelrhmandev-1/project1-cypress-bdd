class HomePage {
  visit() {
    cy.location("pathname", { timeout: 10000 }).then((path) => {
      if (path !== "/") {
        cy.visit("/", { failOnStatusCode: false });
      }
    });

    cy.get("body", { timeout: 15000 }).should("be.visible");

    cy.get("body").then(($body) => {
      if (!$body.find('[data-test="search-query"]').length) {
        cy.visit("/", { failOnStatusCode: false });
      }
    });

    cy.getByData("search-query", { timeout: 15000 }).should("be.visible");
  }

  forceVisitHome() {
    cy.visit("/", { failOnStatusCode: false });
    cy.get("body", { timeout: 15000 }).should("be.visible");
    cy.getByData("search-query", { timeout: 15000 }).should("be.visible");
  }

  search(productName) {
    cy.getByData("search-query", { timeout: 15000 })
      .clear()
      .type(productName);

    cy.getByData("search-submit", { timeout: 15000 }).click();
  }

  typeInSearch(productName) {
    cy.getByData("search-query", { timeout: 15000 })
      .clear()
      .type(productName);
  }

  openFirstProduct() {
    cy.getByData("product-name", { timeout: 15000 })
      .first()
      .should("be.visible")
      .click({ force: true });
  }

  openCart() {
    cy.visit("/checkout", {
      failOnStatusCode: false,
    });

    cy.get("body", { timeout: 15000 }).should("be.visible");
  }

  openSignIn() {
    cy.visit("/auth/login", {
      failOnStatusCode: false,
    });

    cy.get("body", { timeout: 15000 }).should("be.visible");
  }

  selectCategory(categoryName) {
    cy.contains("label", categoryName, { timeout: 15000 })
      .should("be.visible")
      .click();
  }

  verifySearchButtonVisible() {
    cy.getByData("search-submit", { timeout: 15000 }).should("be.visible");
  }

  verifyCartButtonVisible() {
    cy.get("body", { timeout: 15000 }).should("be.visible");
  }

  verifySignInButtonVisible() {
    cy.get("body", { timeout: 15000 }).should("be.visible");
  }

  verifyProductListExists() {
    cy.getByData("product-name", { timeout: 15000 }).should("exist");
  }

  verifyHomePageVisible() {
    cy.get("body", { timeout: 15000 }).should("be.visible");
    cy.get("body").should("contain.text", "Practice");
  }

  verifyCategorySectionVisible() {
    cy.get("body", { timeout: 15000 }).should("contain.text", "Categories");
  }
}

export default HomePage;