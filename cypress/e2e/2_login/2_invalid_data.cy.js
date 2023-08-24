describe('Login', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)
    })
    it('Invalid password', () => {

        const login = 'maryjane82'
        const password = 'Password2!'

        //Username and password
        cy.get('.input-sm').type(login)
        cy.get('.ng-pristine').type(password)

        //Login button
        cy.get('.btn-success').click()

        //Assertions
        cy.get('.label').should('have.text', 'Invalid username/password')

        cy.screenshot('Login - Invalid password')

    })

    it('Invalid username', () => {

        const login = 'maryjane82_'
        const password = 'Password1!'

        //Username and password
        cy.get('.input-sm').type(login)
        cy.get('.ng-pristine').type(password)

        //Login button
        cy.get('.btn-success').click()

        //Assertions
        cy.get('.label').should('have.text', 'Invalid username/password')

        cy.screenshot('Login - Invalid username')

    })
})