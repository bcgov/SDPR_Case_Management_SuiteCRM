import 'cypress-axe'
import 'cypress-iframe'
import { terminalLog } from '../../utils'

describe('Dashboard Accessibility',{
  env: {
    route: '/#home'
  }
}, () => {
  it('Dashboard', () => {
    cy.visit(`/${Cypress.env('route')}`)
    cy.wait(6000)
    cy.injectAxe()
    cy.checkA11y(null, null, terminalLog)
  })
})
