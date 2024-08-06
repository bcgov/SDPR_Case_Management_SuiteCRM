describe('Create, search and modify contact', {
  env: {
    route: '/#contacts'
  }
}, () => {
  describe('Create contact', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/edit`)
      cy.wait(6000)
    })

    it('ASA 71 - Should create a new contact', () => {
      cy.get('.field-name-advocase_contact_type_c').within(() => {
      cy.get('.custom-select').select('Friend')
     })

      cy.get('.dynamic-field-name-first_name').within(() => {
      cy.get('.form-control').type('Automate Tester')
     })

      cy.get('.dynamic-field-name-advocase_clbl_eligible_c').within(() => {
      cy.get('.custom-select').select('Yes')
     })

      cy.get('.settings-button')
      .first()
      .click()
    })
  })

  describe('Search contact and access contact history', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/index`)
      cy.wait(6000)
    })

    it('ASA 75 - Should search contact', () => {
      cy.get('.filter-settings-button').click()

      cy.get('.dynamic-field-name-first_name').within(() => {
      cy.get('.form-control').type('test')
      })
      
      cy.get('.filter-button')
        .last()
        .click()
    })

    it('ASA 89 - Should access contact history', () => {
      cy.get('.table-body-row', { timeout: 10000 })
        .first()
        .click()
      cy.wait(6000)

      cy.get('.insight-panel-card')
        .last()
        .click()
    })
  })

  describe('ASA 92 - Update contact', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/index`)
      cy.wait(10000)

      cy.get('.table-body-row', { timeout: 10000 })
        .first()
        .click()
      cy.wait(6000)

      cy.get('.settings-button')
        .first()
        .click()
      cy.wait(6000)
    })

    it('ASA 90 - Should choose a type of contact', () => {
      cy.get('.field-name-advocase_contact_type_c').within(() => {
      cy.get('.custom-select').select('Health Authority')
      })

      cy.get('.settings-button')
      .first()
      .click()
    })

    it('ASA 91 - Should save a secondary number', () => {
      cy.get('.dynamic-field-name-phone_other').within(() => {
      cy.get('.form-control').type('604-999-9999')
      })

      cy.get('.settings-button')
      .first()
      .click()
    })
  })
})
