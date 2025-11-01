describe('Test Case 10: Verify Subscription in home page', () => {
	it('subscribes to newsletter from home page', () => {
		const ts = Date.now();
		const email = `sub_${ts}@example.com`;

		// Step 1: Launch browser
		// Step 2: Navigate to url 'http://automationexercise.com'
		cy.visit('/');
		cy.acceptCookiesIfPresent();

		// Step 3: Verify that home page is visible successfully
		cy.contains('h2', 'Features Items').should('be.visible');

		// Step 4: Scroll down to footer
		cy.contains('Subscription').scrollIntoView();

		// Step 5: Verify text 'SUBSCRIPTION'
		cy.contains('h2', 'Subscription').should('be.visible');

		// Step 6: Enter email address in input and click arrow button
		cy.get('#susbscribe_email').type(email);
		cy.get('#subscribe').click();

		// Step 7: Verify success message 'You have been successfully subscribed!' is visible
		cy.contains('You have been successfully subscribed!').should('be.visible');
	});
});




