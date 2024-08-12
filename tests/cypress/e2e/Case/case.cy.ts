describe('Create, search and modify case', {
  env: {
    route: '/#cases'
  }
}, () => {
  describe('ASA 4 - Create case', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/edit`)
      cy.wait(6000)
    })

    it('Should create a new case with Agencies engaged [ASA 79]; ASQ action [ASA 80]; Case city [ASA 86]; Case region [ASA 87]; Case note [ASA 94]; Case action date [ASA 93]', () => {

      cy.get('.field-name-name').within(() => {
      cy.get('.form-control').type('Automate Test Case')
     })
      cy.get('.field-name-advocase_communication_type_c').within(() => {
      cy.get('.custom-select').select('Phone call')
     })
      cy.get('.field-name-advocase_communication_date_c').within(() => {
      cy.get('.form-control').click().type('06/24/2024')
     })
      cy.get('.field-name-advocase_case_issue_1_c').within(() => {
      cy.get('.custom-select').select('Education')
     })
      cy.get('.field-name-advocase_oasq_mandate_c').within(() => {
      cy.get('.custom-select').select('Yes')
     })

      //agency engaged
      cy.get('.field-name-adovcase_case_agencies_c').within(() => {
      cy.get('.p-multiselect-trigger').click()
      cy.get('.p-checkbox-box').eq(1).click()
     })

      //asq action
      cy.get('.field-name-advocase_asq_action_c').within(() => {
      cy.get('.p-multiselect-trigger').click()
      cy.get('.p-checkbox-box').eq(1).click()
     })

      //case city
      cy.get('.field-name-advocase_case_city_c').within(() => {
      cy.get('.form-control').type('Surrey')
     })

      //case region
      cy.get('.field-name-advocase_case_region_c').within(() => {
      cy.get('.custom-select').select('Fraser')
     })

      //case note
      cy.get('.field-name-work_log').within(() => {
      cy.get('.form-control').type('This is written by cypress automation test')
     })

      //case action taken date
      cy.get('.field-name-advocase_case_action_date_c').within(() => {
      cy.get('.form-control').click().type('05/25/2025')
     })

      cy.get('.settings-button')
      .first()
      .click()
    })
  })

  describe('ASA 16 - Modify case', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/index`)
      cy.wait(10000)

      cy.get('.table-body-row', { timeout: 10000 })
        .first()
        .click()
      cy.wait(6000)
    })

    it('Should close a case', () => {
      cy.get('.settings-button')
      .first()
      .click()
      cy.wait(6000)

      cy.get('.field-name-advocase_case_status_c').within(() => {
      cy.get('.custom-select').select('Closed')
      })
  
      cy.get('.settings-button')
      .first()
      .click()
    })

    it('Should reopen a case', () => {
      cy.get('.settings-button')
      .first()
      .click()
      cy.wait(6000)
      
      cy.get('.field-name-advocase_case_status_c').within(() => {
      cy.get('.custom-select').select('Open')
      })
  
      cy.get('.settings-button')
      .first()
      .click()
    })

    it('ASA 77 - Add more than one case issues', () => {
      cy.get('.settings-button')
      .first()
      .click()
      cy.wait(6000)
      
      cy.get('.field-name-advocase_case_issue_2_c').within(() => {
      cy.get('.custom-select').select('Aging')
      })

      cy.get('.field-name-advocase_case_issue_3_c').within(() => {
      cy.get('.custom-select').select('Dental')
      })

      cy.get('.field-name-advocase_case_issue_4_c').within(() => {
      cy.get('.custom-select').select('Health')
      })
  
      cy.get('.settings-button')
      .first()
      .click()
    })

    it('ASA 78 - Add case issue as "other"', () => {
      cy.get('.settings-button')
      .first()
      .click()
      cy.wait(6000)
      
      cy.get('.field-name-advocase_case_other_issue_c').within(() => {
      cy.get('.form-control').type('Automate testing an issue as "other"')
      })
  
      cy.get('.settings-button')
      .first()
      .click()
    })

    it('ASA 69 - Add attachment to a case', () => {
      cy.get('.insight-panel-card').first().click()
      cy.get('.insight-panel-card').eq(1).click()
      cy.wait(6000)

      cy.get('.button-group-button').last().click()
      cy.wait(6000)

      cy.get('.cdk-column-checkbox').first().within(() => {
      cy.get('input[type="checkbox"]').click({force:true})
      })

      cy.get('.btn-primary').click()
    })

    it('ASA 81 - Link contact to a case', () => {
      cy.get('.button-group-button').last().click()
      cy.wait(6000)

      cy.get('.cdk-column-checkbox').first().within(() => {
      cy.get('input[type="checkbox"]').click({force:true})
      })

      cy.get('.btn-primary').click()
    })
  })

  describe('Search a case', () => {
    beforeEach(() => {
      cy.visit(`/${Cypress.env('route')}/index`)
      cy.wait(6000)
    })

    it('Should search a case', () => {
      cy.get('.filter-settings-button').click()

      cy.get('.field-name-name').within(() => {
      cy.get('.form-control').type('test')
      })
      
      cy.get('.filter-button')
        .last()
        .click()
    })
  })
})