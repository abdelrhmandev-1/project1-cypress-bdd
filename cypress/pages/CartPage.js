class CartPage {
  verifyCartPage() {
    cy.url().should("include", "/checkout");
    cy.get("body").should("be.visible");
  }
}

export default CartPage;