describe("payment spec", () => {
  it("should display the payment page correctly", () => {
    cy.visit("http://localhost:3000/");

    cy.get("h3").contains("Payment");

    cy.compareSnapshot("payment", 0.0);
  });
});
