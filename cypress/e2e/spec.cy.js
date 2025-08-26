describe('.then()', () => {
  beforeEach(() => {
    cy.visit('/index.html')
    cy.get('#timestamp').as('timestamp')
  })

  it('copies the code, types it, submits it, then asserts on the success message', function () {
    const code = this.timestamp[0].innerText

    cy.get('#code').type(code)
    cy.contains('button', 'Submit').click()

    cy.contains('span', "Congrats! You've entered the correct code.")
      .should('be.visible')
  })
})
