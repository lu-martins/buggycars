describe('User Registration', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)
    })

    it('Visitor Already Registered', () => {

        cy.request('https://randomuser.me/api/?nat=nz').then((response) => { // Extract the random name from the response 

            cy.wait(5000)

            const login = 'maryjane82'
            const firstName = 'Mary'
            const lastName = 'Jane'
            const password = 'Password1!'

            cy.get('.btn-success-outline').click()

            // Fill in the registration form with valid details
            cy.get('#username').type(login)
            cy.get('#firstName').type(firstName);
            cy.get('#lastName').type(lastName);
            cy.get('#password').type(password) // Ensure the password meets the criteria
            cy.get('#confirmPassword').type(password)

            // Submit the form
            cy.get('.btn-default').click();

            // Assert the success message
            cy.get('.result').should('include.text', 'UsernameExistsException: User already exists')
            cy.contains('UsernameExistsException: User already exists').should('be.visible')

            cy.screenshot('Register - User already exists')
        });
    })

})