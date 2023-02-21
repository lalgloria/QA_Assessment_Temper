/**
 * Spec created to test the the end-to-end process of making an order:
 *  1. Logging in to the site
 *  2. Adding items to cart
 *  3. Checking out items on cart
 *  4. Inputting info
 *  5. Confirming order details
 */

const USERNAME = 'standard_user'
const ADD_TO_CART_SELECTORS = ['add to cart sauce labs bp button',
                                'add to cart sauce labs bike light button',
                                'add to cart sauce labs bolt tshirt button',
                                'add to cart sauce labs fleece jacket button',
                                'add to cart sauce labs onesie button',
                                'add to cart sauce labs shirt two button']
var i = 1

describe('Make An Order Test', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.logIn(USERNAME)
    })

    afterEach(() => {
        cy.logOut()
    })

    it("Make an Order - Test Adding items to cart", () => {
        // initial checking that cart is empty
        cy.common('shopping cart icon').should('be.visible')
        cy.common('shopping cart badge').should('not.exist')

        // add items to cart
        cy.log('_ADD ITEMS TO CART_')
        cy.common('title').contains('Products')
        cy.wrap(ADD_TO_CART_SELECTORS).each((index) => {
            cy.inventory(`${index}`).click()
            cy.common('shopping cart badge').contains(i++)
        })
    })

    it("Make an Order - Test Checking out items to cart", () => {
        // initial checking that cart is empty
        cy.common('shopping cart icon').should('be.visible')
        cy.common('shopping cart badge').should('not.exist')

        // add items to cart
        cy.log('_ADD ITEMS TO CART_')
        cy.wrap(ADD_TO_CART_SELECTORS).each((index) => {
            cy.inventory(`${index}`).click()
        })

        // go to cart
        cy.common('shopping cart icon').click()
        cy.common('title').contains('Your Cart')

        // check list of checked-out items
        cy.log('_CHECK ITEMS ON CART_')
        const ITEMS_ON_CART = ['Sauce Labs Backpack',
                                'Sauce Labs Bike Light',
                                'Sauce Labs Bolt T-Shirt',
                                'Sauce Labs Fleece Jacket',
                                'Sauce Labs Onesie',
                                'Test.allTheThings() T-Shirt (Red)']
        
        cy.wrap(ITEMS_ON_CART).each((index) => { 
            cy.cart('cart list').contains(index)
        })
        cy.log('_CHECKOUT ITEMS ON CART_')
        cy.cart('checkout button').click()
    })

    it("Make an Order - Test Checking out items to cart - Add info and finish", () => {
        // initial checking that cart is empty
        cy.common('shopping cart icon').should('be.visible')
        cy.common('shopping cart badge').should('not.exist')

        // add items to cart
        cy.log('_ADD ITEMS TO CART_')
        cy.wrap(ADD_TO_CART_SELECTORS).each((index) => {
            cy.inventory(`${index}`).click()
        })

        // go to cart and checkout
        cy.log('_CHECKOUT ITEMS ON CART_')
        cy.common('shopping cart icon').click()
        cy.cart('checkout button').click()

        // add checkout info
        cy.log('_ADD INFO_')
        cy.common('title').scrollIntoView()
            .contains('Checkout: Your Information')
        cy.checkout('first name textbox').type('John')
        cy.checkout('last name textbox').type('Doe')
        cy.checkout('postal code textbox').type('12345')
        cy.checkout('continue button').click()

        // check summary
        cy.log('_CHECK SUMMARY_')
        cy.common('title').scrollIntoView()
            .contains('Checkout: Overview')
        const ITEMS_ON_CART = ['Sauce Labs Backpack',
                                'Sauce Labs Bike Light',
                                'Sauce Labs Bolt T-Shirt',
                                'Sauce Labs Fleece Jacket',
                                'Sauce Labs Onesie',
                                'Test.allTheThings() T-Shirt (Red)']
        
        cy.wrap(ITEMS_ON_CART).each((index) => { 
            cy.checkout('checkout summary').contains(index)
        })
        cy.get('div.summary_total_label').contains('140.34')  // total amount
        cy.checkout('finish button').click()
    })
})
