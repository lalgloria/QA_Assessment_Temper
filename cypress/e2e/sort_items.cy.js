/**
 * Spec created to test sauce demo's sorting feature (low to high)
 */

const USERNAME = 'standard_user'
describe('Sort Items Test', () => {
    beforeEach(() => {
        cy.visit("/")
        cy.logIn(USERNAME)
    })

    afterEach(() => {
        cy.logOut()
    })

    it("Sort items - Low To High", () => {


        // choose price (low to high) sorting option
        cy.log('_CHOOSE PRICE (LOW TO HIGH SORTING OPTION)_')
        cy.inventory('product sort dropdown').select('Price (low to high)')
        cy.get('span.select_container').find('span.active_option')
            .contains('Price (low to high)')

        // check if items are sorted
        cy.log('_CHECK IF ITEMS ARE SORTED)_')
        cy.get('div.inventory_item_price').invoke('text')
            .then(text => {
                var removeCurrency = text.replace(/[^\d\.]/g, ',')
                var arr = removeCurrency.split(',')
                var priceArr = arr.shift()
                cy.log(arr)
                
                for (let index = 0; index < priceArr.length; index++) {
                    if (priceArr[index] > arr[index + 1]) {
                        return true
                    } else {
                        throw new Error ("items are not sorted")
                    }
                }
            })
        
    })
})
