/**
 * Spec created to test the login feature and its specifications:
 *  1. User authentication
 *  2. Testing positive and negavite paths for login process
 */

describe('Login Test', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Login Page - Test Blank Username Field", () => {
    // blank username field
    cy.log('_TEST BLANK USERNAME FIELD_')
    cy.login('username textbox')
      .should('have.attr', 'placeholder', 'Username')
    cy.login('login button').click()
    cy.login('error message').contains('Epic sadface: Username is required')
    cy.login('error message button').click()

    cy.log('_TEST BLANK USERNAME FIELD: Password filled in_')
    cy.login('password textbox').type('test')
    cy.login('login button').click()
    cy.login('error message').contains('Epic sadface: Username is required')
    cy.login('error message button').click()
    cy.login('password textbox').clear()
  })

  it("Login Page - Test Blank Password Field", () => {
    // blank password field
    cy.log('_TEST BLANK PASSWORD FIELD_')
    cy.login('password textbox')
      .should('have.attr', 'placeholder', 'Password')
    cy.login('username textbox').type('test')
    cy.login('login button').click()
    cy.login('error message').contains('Epic sadface: Password is required')
    cy.login('error message button').click()
  })

  it("Login Page - Test Unsuccessful Login - Invalid Username", () => {
    cy.log('_TEST INVALID USERNAME_')
    cy.login('username textbox').type('invalid_username')
    cy.login('password textbox').type('secret_sauce')
    cy.login('login button').click()
    cy.login('error message').contains('Epic sadface: Username and password do not match any user in this service')
    cy.login('error message button').click()
  })

  it("Login Page - Test Unsuccessful Login - Invalid Password", () => {
    cy.log('_TEST INVALID Password_')
    cy.login('username textbox').type('locked_out_user')
    cy.login('password textbox').type('invalidpassword')
    cy.login('login button').click()
    cy.login('error message').contains('Epic sadface: Username and password do not match any user in this service')
    cy.login('error message button').click()
  })

  it("Login Page - Test Unsuccessul Login - Locked-out user", () => {
    cy.log('_TEST LOGIN USING LOCKED OUT USER_')
    cy.login('username textbox').type('locked_out_user')
    cy.login('password textbox').type('secret_sauce')
    cy.login('login button').click()
    cy.login('error message').contains('Epic sadface: Sorry, this user has been locked out.')
    cy.login('error message button').click()
  })

  it("Login Page - Test Successful Login", () => {

    var VALID_USERNAMES = ['standard_user', 'problem_user', 'performance_glitch_user']

    cy.wrap(VALID_USERNAMES).each((index) => {
      cy.log('_TEST SUCCESSFUL LOGIN_')
      cy.login('username textbox').type(index)
      cy.login('password textbox').type('secret_sauce')
      cy.login('login button').click()
      cy.url().should('include', '/inventory')
      cy.common('title').should('be.visible')

      //logout
      cy.logOut()
    })
  })
})
