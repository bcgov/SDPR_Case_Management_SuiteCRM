import '../../node_modulesx/cypress-iframe'

describe('ASA 68 - Assign Roles', () => {
  describe('ASA 119 - Create role', () => {
    it('Should create a new role', () => {})
  })

  describe('ASA 120 - Update role', () => {
    it('Should update role name', () => {
      cy.visit('https://advocase-d0d1b5-dev.apps.gold.devops.gov.bc.ca/#/acl-roles/index')
      cy.wait(10000)
      cy.get('scrm-dynamic-field > a', { timeout: 10000 })
        .first()
        .click()
      cy.wait(5000)

      cy.frameLoaded('iframe')
      cy.iframe().find('input[title="Edit"]').click()

      cy.wait(5000)
      cy.frameLoaded('iframe')
      cy.iframe().find('input[id="name"]').type("ASA-120")
      cy.iframe().find('input[id="save_button"]').click()
    })
  })
})
