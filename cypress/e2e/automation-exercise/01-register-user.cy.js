describe('Test Case 1: Register User', () => {
	it('registers a new user successfully', () => {
		const ts = Date.now();
		const name = `User ${ts}`;
		const email = `user_${ts}@example.com`;

		// Step 1: Launch browser
		// Step 2: Navigate to url 'http://automationexercise.com'
		cy.visit('/');
		cy.acceptCookiesIfPresent();

		// Step 3: Verify that home page is visible successfully
		cy.contains('h2', 'Features Items').should('be.visible');

		// Step 4: Click on 'Signup / Login' button
		cy.contains('a', 'Signup / Login').click();

		// Step 5: Verify 'New User Signup!' is visible
		cy.contains('h2', 'New User Signup!').should('be.visible');

		// Step 6: Enter name and email address
		cy.get('input[data-qa="signup-name"]').type(name);
		cy.get('input[data-qa="signup-email"]').type(email);

		// Step 7: Click 'Signup' button
		cy.get('button[data-qa="signup-button"]').click();

		// Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
		cy.contains('b', 'Enter Account Information').should('be.visible');

		// Step 9: Fill details: Title, Name, Email, Password, Date of birth
		cy.get('#id_gender1').check({ force: true });
		cy.get('#password').type('Password123!');
		cy.get('#days').select('10');
		cy.get('#months').select('May');
		cy.get('#years').select('1995');

		// Step 10: Select checkbox 'Sign up for our newsletter!'
		cy.get('#newsletter').check({ force: true });

		// Step 11: Select checkbox 'Receive special offers from our partners!'
		cy.get('#optin').check({ force: true });

		// Step 12: Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
		cy.get('#first_name').type('John');
		cy.get('#last_name').type('Doe');
		cy.get('#company').type('ACME');
		cy.get('#address1').type('123 Main St');
		cy.get('#address2').type('Suite 100');
		cy.get('#country').select('Canada');
		cy.get('#state').type('Ontario');
		cy.get('#city').type('Toronto');
		cy.get('#zipcode').type('A1B2C3');
		cy.get('#mobile_number').type('+1 555 000 1111');

		// Step 13: Click 'Create Account button'
		cy.get('button[data-qa="create-account"]').click();

		// Step 14: Verify that 'ACCOUNT CREATED!' is visible
		cy.contains('b', 'Account Created!').should('be.visible');

		// Step 15: Click 'Continue' button
		cy.contains('a', 'Continue').click();

		// Step 16: Verify that 'Logged in as username' is visible
		cy.contains('a', 'Logged in as').should('contain', name);

		// Step 17: Click 'Delete Account' button
		cy.contains('a', 'Delete Account').click();

		// Step 18: Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
		cy.contains('b', 'Account Deleted!').should('be.visible');
		cy.contains('a', 'Continue').click();
	});
});




