//your JS code here. If required.
//your JS code here. If required.
it("should have the pulse animation applied", () => {
  cy.get(".box").should(($box) => {
    const animation = $box.css("animation");
    expect(animation).to.include("pulse");
  });
});
