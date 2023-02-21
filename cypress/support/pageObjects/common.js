Cypress.Commands.add("common", (element) => {
    const ELEMENTS = {
        'title':                        'span.title',
        'hamburger menu':               'div.bm-burger-button',
        'sidebar':                      'nav.bm-item-list',
        'shopping cart icon':           '#shopping_cart_container',
        'shopping cart badge':          'span.shopping_cart_badge',
    }

    if ( element in ELEMENTS ) {
        return cy.get( ELEMENTS[element] )
    }

    else {
        return null
    }
})

/**
 *  logOut()
 *  - page command to log out in application
 */
Cypress.Commands.add("logOut", () => {
    cy.common('hamburger menu').click()
    cy.common('sidebar').contains('Logout')
        .click()
    cy.login('username textbox').should('be.visible')
})