class ProductPage {
  verifyProductDetails() {
    cy.getByData("product-name").should("be.visible");
    cy.getByData("add-to-cart").should("be.visible");
  }

  addToCart() {
    cy.getByData("add-to-cart").click();
  }

  verifyProductAdded() {
    cy.get("body").should("contain.text", "Product added to shopping cart");
  }
}

export default ProductPage;