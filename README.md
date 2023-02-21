# QA_Assessment_Temper
Automation Exercise for Temper

<br>

# Test Structure
- The tests are located under `/cypress/e2e`
- All the tests are independent of each other intended for easier maintenance and usage for specific feature testing
<br>

# Page Object Model (POM)

In order to keep the tests DRY, Page Object Model is used. This allows to list selectors in an object repository and use it to multiple scripts efficiently. These files are under the directory `cypress/support/pageObjects`

In order to implement the POM design pattern, cypress custom commands are being used, it is a feature from it.  
_Reference: [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands.html#Syntax)_

<br>

# Getting Started

The instructions below will help Web Developers and QAs to get a copy of the automation repository and install Cypress locally. 
<br>

### Supported Operating Systems
- macOS 10.9 and above (64-bit only)
- Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
- Windows 7 and above
<br>

### Prerequisites

- `npm` Check https://www.npmjs.com/get-npm for installation
- `IDE` Check [Visual Studio Code](https://code.visualstudio.com) or any IDE of your choice
<br>

### Basic Installation

1. Clone repository
    ```sh
    cd path/folder # the directory you want your repository to be cloned into
    git clone https://github.com/lalgloria/QA_Assessment_Temper.git
    ```

2. Install Cypress
    ```sh
    cd path/repo # the directory of your repository
    npm init
    npm install --save-dev cypress
    ```

3. Verify that Cypress is installed properly
    ```sh
    npx cypress verify
    ```

### Running Tests

- Using `Cypress` test runner/GUI
    ```sh
    npm run cypress:open
    ```

- Using `Cypress` CLI
    ```sh
    npx cypress run --spec <path>
    ```

# Built With

- [Cypress](https://www.cypress.io) - Javascript testing Framework
