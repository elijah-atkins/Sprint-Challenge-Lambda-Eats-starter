
describe("Test form inputs", function () {
    beforeEach(function(){
        cy.visit("http://localhost:3000/pizza")
    })
    it("adds text to name input", function () {
        cy
            .get('[data-cy=name]')
            .type('Hello Worlds')
            .should('have.value', "Hello Worlds");
        cy
            .get('[data-cy=pepperoni]')
            .check()
            .should("be.checked")
        cy
            .get('[data-cy=sausage]')
            .check()
            .should("be.checked")
        cy
            .get('[data-cy=blkOlives]')
            .check()
            .should("be.checked")
        cy
            .get('[data-cy=garlic]')
            .check()
            .should("be.checked")
        cy
            .contains("Submit")
            .click();
    })
})

