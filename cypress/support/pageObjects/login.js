Cypress.Commands.add("login", (element) => {
    const ELEMENTS = {
        'username textbox':                 '[data-test="username"]',
        'password textbox':                 '[data-test="password"]',
        'reset password link':              '[data-test="sign-in-forgot-password-link"]',
        'login button':                     '[data-test="login-button"]',
        'error message':                    '[data-test="error"]',
        'error message button':             '[data-test="error"] button'
    }

    if ( element in ELEMENTS ) {
        return cy.get( ELEMENTS[element] )
    }

    else {
        return null
    }
})

/**
 *  logIn()
 *  - page command to log in on application
 *  
 *  @username      varchar       username to use for login
 */
Cypress.Commands.add("logIn", (username) => {
    cy.login('username textbox').type(username)
    cy.login('password textbox').type('secret_sauce')
    cy.login('login button').click()
    cy.url().should('include', '/inventory')
    cy.common('title').should('be.visible')
})
