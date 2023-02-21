Cypress.Commands.add("cart", (element) => {
    const ELEMENTS = {
        'cart list':                    '#cart_contents_container',
        'checkout button':              '[data-test="checkout"]'
    }

    if ( element in ELEMENTS ) {
        return cy.get( ELEMENTS[element] )
    }

    else {
        return null
    }
})