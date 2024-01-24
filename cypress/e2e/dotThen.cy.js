describe('.then()', () => {
  beforeEach(() => {
    cy.visit('/index.html')
  })

  it('copies the code, types it, submits it, then asserts on the success message', () => {
    cy.get('#timestamp')
      .then($element => {
        const code = $element[0].innerText

        cy.get('#code').type(code)
        cy.contains('button', 'Submit').click()

        cy.contains('span', "Congrats! You've entered the correct code.")
          .should('be.visible')
      })
  })
})
