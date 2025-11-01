describe('Test Case 3: Login User with incorrect email and password', () => {
	it('shows error on invalid credentials', () => {
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

		// Step 6: Enter incorrect email address and password
		cy.get('input[data-qa="login-email"]').type('not_exists@example.com');
		cy.get('input[data-qa="login-password"]').type('wrongpass');

		// Step 7: Click 'login' button
		cy.get('button[data-qa="login-button"]').click();

		// Step 8: Verify error 'Your email or password is incorrect!' is visible
		cy.contains('Your email or password is incorrect!').should('be.visible');
	});
});




