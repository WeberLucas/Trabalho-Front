describe('Test Case 4: Logout User', () => {
	it('logs out the current user', () => {
		const ts = Date.now();
		const email = `logout_${ts}@example.com`;
		const password = 'Password123!';
		const name = 'Logout User';

		// Setup: Create user first (needed to have a valid account)
		cy.visit('/');
		cy.acceptCookiesIfPresent();
		cy.contains('a', 'Signup / Login').click();
		cy.get('input[data-qa="signup-name"]').type(name);
		cy.get('input[data-qa="signup-email"]').type(email);
		cy.get('button[data-qa="signup-button"]').click();
		cy.get('#id_gender1').check({ force: true });
		cy.get('#password').type(password);
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

		// Step 5: Verify 'Login to your account' is visible
		cy.contains('h2', 'Login to your account').should('be.visible');

		// Step 6: Enter correct email address and password
		cy.get('input[data-qa="login-email"]').type(email);
		cy.get('input[data-qa="login-password"]').type(password);

		// Step 7: Click 'login' button
		cy.get('button[data-qa="login-button"]').click();

		// Step 8: Verify that 'Logged in as username' is visible
		cy.contains('a', 'Logged in as').should('contain', name);

		// Step 9: Click 'Logout' button
		cy.contains('a', 'Logout').click();

		// Step 10: Verify that user is navigated to login page
		cy.contains('h2', 'Login to your account').should('be.visible');
	});
});




