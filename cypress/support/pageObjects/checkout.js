Cypress.Commands.add("checkout", (element) => {
    const ELEMENTS = {
        'first name textbox':               '[data-test="firstName"]',
        'last name textbox':                '[data-test="lastName"]',
        'postal code textbox':              '[data-test="postalCode"]',
        'continue button':                  '[data-test="continue"]',
        'checkout summary':                 '#checkout_summary_container',
        'finish button':                    '[data-test="finish"]'
    }

    if ( element in ELEMENTS ) {
        return cy.get( ELEMENTS[element] )
    }

    else {
        return null
    }
})