import 'cypress-axe'
import 'cypress-iframe'
import { terminalLog } from '../../utils'

describe('Case Module Accessibility',{
  env: {
    route: '/#cases'
  }
}, () => {
  it('Create Case', () => {
    cy.visit(`/${Cypress.env('route')}/edit`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('View Case', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })

  it('View Case Detail', () => {
    cy.visit(`/${Cypress.env('route')}/index`)
    cy.wait(10000)

    cy.get('.table-body-row', { timeout: 10000 })
      .first()
      .click()
    cy.wait(6000)

    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
