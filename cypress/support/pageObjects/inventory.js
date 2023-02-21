Cypress.Commands.add("inventory", (element) => {
    const ELEMENTS = {
        'product sort dropdown':                                '[data-test="product_sort_container"]',
        'add to cart sauce labs bp button':                     '[data-test="add-to-cart-sauce-labs-backpack"]',
        'add to cart sauce labs bike light button':             '[data-test="add-to-cart-sauce-labs-bike-light"]',
        'add to cart sauce labs bolt tshirt button':            '[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]',
        'add to cart sauce labs fleece jacket button':          '[data-test="add-to-cart-sauce-labs-fleece-jacket"]',
        'add to cart sauce labs onesie button':                 '[data-test="add-to-cart-sauce-labs-onesie"]',
        'add to cart sauce labs shirt two button':              '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]',
        'remove sauce labs bp button':                          '[data-test="remove-sauce-labs-backpack"]',
        'remove sauce labs bike light button':                  '[data-test="remove-sauce-labs-bike-light"]',
        'remove sauce labs bolt tshirt':                        '[data-test="remove-sauce-labs-bolt-t-shirt"]',
        'remove sauce labs fleece jacket':                      '[data-test="remove-sauce-labs-fleece-jacket"]',
        'remove sauce labs onesie':                             '[data-test="remove-sauce-labs-onesie"]',
        'remove sauce labs shirt two':                          '[data-test="remove-test.allthethings()-t-shirt-(red)"]',
    }

    if ( element in ELEMENTS ) {
        return cy.get( ELEMENTS[element] )
    }

    else {
        return null
    }
})
