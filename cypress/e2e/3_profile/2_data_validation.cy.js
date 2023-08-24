describe('Profile', () => {
    beforeEach(() => {
        // Clear cookies and local storage before each test
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('https://buggy.justtestit.org/')
        cy.viewport(1920, 1080)

        const login = 'maryjane82'
        const password = 'Password1!'

        cy.wait(7000)

        //Username and password
        cy.get('.input-sm').type(login)
        cy.get('.ng-pristine').type(password)

        //Login button
        cy.get('.btn-success').click()

        //Enter profile
        cy.get(':nth-child(2) > .nav-link').click({ force: true })

    })

    it('Enter with an empty first name', () => {


        //Changing names
        cy.get('#firstName').clear()
        cy.get('#firstName').type('{enter}')

        cy.get('#lastName').clear()
        cy.get('#lastName').type('Smith')

        //assertion
        cy.get('.btn-default').should('be.disabled')
        cy.get('.alert').should('include.text', 'First Name is required')
        cy.screenshot('Profile - Empty First Name')
    })

    it('Enter with an empty last name', () => {

        //Changing names
        cy.get('#firstName').clear()
        cy.get('#firstName').type('Mary{enter}')

        cy.get('#lastName').clear()
        cy.get('#lastName').type('{enter}')

        //assertion
        cy.get('.btn-default').should('be.disabled')
        cy.get('.alert').should('include.text', 'Last Name is required')
        cy.screenshot('Profile - Empty Last Name')
    })

    it('Enter with an invalid gender', () => {

        cy.get('#gender').clear()
        cy.get('#gender').type('Transgender')

        cy.get('.btn-default').click()

        cy.screenshot('Profile - Invalid gender - 1')

        cy.get('#gender').clear()
        cy.get('#gender').type('Other')

        cy.get('.btn-default').click()

        cy.screenshot('Profile - Invalid gender - 2')

        cy.get('#gender').clear()
        cy.get('#gender').type('Blablabla')

        cy.screenshot('Profile - Invalid gender - 3')

        cy.get('.btn-default').click()

        //assertion
        //cy.get('.btn-default').should('be.disabled')
        //cy.get('.alert').should('include.text', 'Last Name is required')

    })

    it('Enter with an invalid age', () => {

        cy.get('#gender').clear()
        cy.get('#age').clear()
        cy.get('#age').type('khasjhdasdas')

        cy.get('.btn-default').click()

        cy.wait(3000)

        cy.screenshot('Profile - Invalid age')

        //assertion
        //cy.get('.btn-default').should('be.disabled')
        //cy.get('.alert').should('include.text', 'Last Name is required')

    })

    it('Enter with an invalid address', () => {

        const address = 'But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounc'

        cy.get('#gender').clear()
        cy.get('#age').clear()

        cy.get('#address').clear()
        cy.get('#address').type(address)

        cy.get('.btn-default').click()

        cy.wait(3000)

        cy.get('.result').should('include.text', 'address is too long')
        cy.screenshot('Profile - Invalid address')

    })

    it('Enter with an address as a malicious code', () => {

        const address = '<<script>alert("XSS Attack!");</script>'

        cy.get('#gender').clear()
        cy.get('#age').clear()

        cy.get('#address').clear()
        cy.get('#address').type(address)

        cy.get('.btn-default').click()

        cy.wait(3000)

        //cy.get('.result').should('include.text', 'address is too long')
        cy.screenshot('Profile - Invalid address - Security test')

    })

    it('Enter with an invalid phone', () => {


        cy.get('#gender').clear()
        cy.get('#age').clear()
        cy.get('#address').clear()

        cy.get('#phone').clear()
        cy.get('#phone').type('  0123456789123456789').click()

        cy.get('.btn-default').click()

        cy.wait(3000)

        //cy.get('.result').should('include.text', 'address is too long')
        cy.screenshot('Profile - Invalid phone')

    })

    it('Enter with a new password that was breached', () => {

        const password = 'Password1!'
        const new_password = 'Iloveyou123!'

        //Changing password
        cy.get('#currentPassword').type(password)
        cy.get('#newPassword').type(new_password)
        cy.get('#newPasswordConfirmation').type(new_password)

        cy.get('.btn-default').click() //save

        cy.wait(3000)

        //cy.get('.result').should('include.text', 'address is too long')
        cy.screenshot('Profile - Breached Password')

        //rollback

        cy.get('#currentPassword').type(new_password)
        cy.get('#newPassword').type(password)
        cy.get('#newPasswordConfirmation').type(password)

        cy.get('.btn-default').click() // save

        cy.wait(3000)

    })

    it('Enter with a new password with an invalid format', () => {

        const password = 'Password1!'
        const new_password = 'none'

        //Changing password
        cy.get('#currentPassword').type(password)
        cy.get('#newPassword').type(new_password)
        cy.get('#newPasswordConfirmation').type(new_password)

        cy.get('.btn-default').click() //save

        cy.wait(3000)

        cy.get('.result').should('include.text', 'minimum field size of 6')
        cy.screenshot('Profile - Invalid Password')


    })

    it('Enter with a new password with no policy criteria', () => {

        const password = 'Password1!'
        const new_password = 'nocriteria'

        //Changing password
        cy.get('#currentPassword').type(password)
        cy.get('#newPassword').type(new_password)
        cy.get('#newPasswordConfirmation').type(new_password)

        cy.get('.btn-default').click() // save

        cy.wait(3000)

        cy.get('.result').should('include.text', 'Password did not conform with policy')
        cy.screenshot('Profile - Password no policy')


    })

    it('Check limit exceed validation', () => {

        const password = 'Password1!'
        const new_password = 'Password1!'

        //Changing password
        cy.get('#currentPassword').type(password)
        cy.get('#newPassword').type(new_password)
        cy.get('#newPasswordConfirmation').type(new_password)

        cy.get('.btn-default').click() // save

        cy.wait(3000)

        cy.get('.result').should('include.text', 'Attempt limit exceeded, please try after some time.')
        cy.screenshot('Profile - Limit exceeded')


    })


})

