describe('Login', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)
    })

    it('Successful Login', () => {

        const login = 'maryjane82'
        const password = 'Password1!'

        //Username and password
        cy.get('.input-sm').type(login)
        cy.get('.ng-pristine').type(password)

        //Login button
        cy.get('.btn-success').click()

        //Assertions
        cy.get(':nth-child(1) > .nav-link').should('have.text', 'Hi, Mary')
        cy.get(':nth-child(2) > .nav-link').should('have.text', 'Profile')

        cy.screenshot('Login - Sucessfully')

    })
})