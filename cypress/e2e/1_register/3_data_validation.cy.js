describe('User Registration', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)
    })

    it('Enter with a Empty login', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'BuggyCars!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details

            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').should('be.disabled')
            cy.log('Register button should be shown as disabled')

            cy.screenshot('Register - Empty login data')
        })
    })

    it.only('Enter with an Invalid login', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = '_14'
            const firstName = response.body.results[0].name.first
            const lastName = response.body.results[0].name.last
            const password = 'BuggyCars!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName)
            cy.get('#lastName').type(lastName)
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click()


            cy.screenshot('Register - Invalid login')
        })
    })


})