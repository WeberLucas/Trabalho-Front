describe('Test Case 6: Contact Us Form', () => {
	it('submits a message via Contact Us', () => {
		// Step 1: Launch browser
		// Step 2: Navigate to url 'http://automationexercise.com'
		cy.visit('/');
		cy.acceptCookiesIfPresent();

		// Step 3: Verify that home page is visible successfully
		cy.contains('h2', 'Features Items').should('be.visible');

		// Step 4: Click on 'Contact Us' button
		cy.contains('a', 'Contact us').click();

		// Step 5: Verify 'GET IN TOUCH' is visible
		cy.contains('h2', 'Get In Touch').should('be.visible');

		// Step 6: Enter name, email, subject and message
		cy.get('input[data-qa="name"]').type('John Tester');
		cy.get('input[data-qa="email"]').type('john@example.com');
		cy.get('input[data-qa="subject"]').type('Feedback');
		cy.get('textarea[data-qa="message"]').type('Great site!');

		// Step 7: Upload file
		cy.get('input[type="file"]').selectFile('cypress/fixtures/sample.txt', { force: true });

		// Step 8: Click 'Submit' button
		// Step 9: Click OK button (setup before clicking)
		cy.window().then((win) => {
			cy.stub(win, 'confirm').returns(true);
		});
		cy.get('input[data-qa="submit-button"]').click();

		// Step 10: Verify success message 'Success! Your details have been submitted successfully.' is visible
		cy.contains('Success! Your details have been submitted successfully.').should('be.visible');

		// Step 11: Click 'Home' button and verify that landed to home page successfully
		cy.contains('a', 'Home').click();
		cy.url().should('eq', Cypress.config('baseUrl') + '/');
		cy.contains('h2', 'Features Items').should('be.visible');
	});
});




