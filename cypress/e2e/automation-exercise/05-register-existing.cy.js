describe('Test Case 5: Register User with existing email', () => {
	it('shows error when email already exists', () => {
		const ts = Date.now();
		const email = `existing_${ts}@example.com`;

		// Setup: Create user once
		cy.visit('/');
		cy.acceptCookiesIfPresent();
		cy.contains('a', 'Signup / Login').click();
		cy.get('input[data-qa="signup-name"]').type('Existing');
		cy.get('input[data-qa="signup-email"]').type(email);
		cy.get('button[data-qa="signup-button"]').click();
		cy.get('#id_gender1').check({ force: true });
		cy.get('#password').type('Password123!');
		cy.get('#first_name').type('John');
		cy.get('#last_name').type('Doe');
		cy.get('#address1').type('123 Main St');
		cy.get('#country').select('Canada');
		cy.get('#state').type('ON');
		cy.get('#city').type('Toronto');
		cy.get('#zipcode').type('A1B2C3');
		cy.get('#mobile_number').type('5550001111');
		cy.get('button[data-qa="create-account"]').click();
		cy.contains('a', 'Continue').click();
		cy.contains('a', 'Logout').click();

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

		// Step 6: Enter name and already registered email address
		cy.get('input[data-qa="signup-name"]').type('Existing Again');
		cy.get('input[data-qa="signup-email"]').type(email);

		// Step 7: Click 'Signup' button
		cy.get('button[data-qa="signup-button"]').click();

		// Step 8: Verify error 'Email Address already exist!' is visible
		cy.contains('Email Address already exist!').should('be.visible');
	});
});




