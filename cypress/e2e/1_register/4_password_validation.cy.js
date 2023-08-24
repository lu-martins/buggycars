describe('User Registration', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)
    })

    it('Created password with no policy criteria - No uppercase', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'buggycars!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click();

            // Assert the success message
            cy.get('.result').should('include.text', 'Password did not conform with policy: Password must have uppercase characters')

            cy.screenshot('Register - Password no policy - No Uppercase')
        })
    })

    it('Created password with no policy criteria - No lowercase', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'BUGGYCARS!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click();

            // Assert the success message
            cy.get('.result').should('include.text', 'Password did not conform with policy: Password must have lowercase characters')

            cy.screenshot('Register - Password no policy - No Lowercase')
        })
    })

    it('Created password with no policy criteria - No Special Character', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'BuggyCars1'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click();

            // Assert the success message
            cy.get('.result').should('include.text', 'Password did not conform with policy: Password must have symbol characters')

            cy.screenshot('Register - Password no policy - No Special Character')
        })
    })

    it('Create a password with invalid format - Minimum field size', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'Non!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click()

            // Assert the success message
            cy.get('.result').should('include.text', 'minimum field size of 6')

            cy.screenshot('Register - Password Invalid Format - Minumum size')
        })
    })

    it('Create a password with invalid format - Not long enough', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'BgyCar!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click()

            // Assert the success message
            cy.get('.result').should('include.text', 'Password did not conform with policy: Password not long enough')

            cy.screenshot('Register - Password Invalid Format - Not long enough')
        })
    })

    it('Create a password with invalid format - Maximum character', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'BuggyCars!BuggyCars!BuggyCars!BuggyCars!BuggyCars!BuggyCars!BuggyCars!BuggyCars!BuggyCars!BuggyCars!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click()

            // Assert the success message
            cy.get('.result').should('include.text', 'password is too long')

            cy.screenshot('Register - Password Invalid Format - Maximum characters')
        })
    })

    it('Create a password that was breached', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = response.body.results[0].login.username
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'Iloveyou123!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click();
            cy.get('.result').should('include.text', 'Registration is successful')
            cy.log('Test Fail')

            cy.screenshot('Register - Breached password - Fail')
        })
    })

})