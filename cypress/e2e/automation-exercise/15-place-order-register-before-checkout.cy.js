describe('Test Case 15: Place Order - Register before Checkout', () => {
	it('adds product, registers, checks out and attempts payment', () => {
		const ts = Date.now();
		const name = `Buyer ${ts}`;
		const email = `buyer_${ts}@example.com`;

		// Step 1: Launch browser and Step 2: Navigate to url
		cy.visit('/');
		cy.acceptCookiesIfPresent();

		// Step 3: Verify that home page is visible successfully
		cy.contains('h2', 'Features Items').should('be.visible');

		// Step 4: Click 'Signup / Login' button
		cy.contains('a', 'Signup / Login').click();

		// Step 5: Fill all details in Signup and create account
		cy.contains('h2', 'New User Signup!').should('be.visible');
		cy.get('input[data-qa="signup-name"]').type(name);
		cy.get('input[data-qa="signup-email"]').type(email);
		cy.get('button[data-qa="signup-button"]').click();

		// Account information
		cy.contains('b', 'Enter Account Information').should('be.visible');
		cy.get('#id_gender1').check({ force: true });
		cy.get('#password').type('Password123!');
		cy.get('#days').select('10');
		cy.get('#months').select('May');
		cy.get('#years').select('1995');
		cy.get('#newsletter').check({ force: true });
		cy.get('#optin').check({ force: true });
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
		cy.get('button[data-qa="create-account"]').click();

		// Step 6: Verify 'ACCOUNT CREATED!' and click 'Continue' button
		cy.contains('b', 'Account Created!').should('be.visible');
		cy.contains('a', 'Continue').click();

		// Step 7: Verify ' Logged in as username' at top
		cy.contains('a', 'Logged in as').should('contain', name);

		// Step 8: Add products to cart
		cy.contains('a', 'Products').click();
		cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
		cy.contains('Add to cart').first().click({ force: true });
		cy.contains('button', 'Continue Shopping').click();

		// Add second product
		cy.get('.features_items .product-image-wrapper').eq(1).trigger('mouseover');
		cy.contains('Add to cart').first().click({ force: true });
		cy.contains('View Cart').click();

		// Step 9: Click 'Cart' button
		// Step 10: Verify that cart page is displayed
		cy.url().should('include', '/view_cart');

		// Step 11: Click Proceed To Checkout
		cy.contains('a', 'Proceed To Checkout').click();

		// Step 12: Verify Address Details and Review Your Order
		cy.contains('Address Details').should('be.visible');
		cy.contains('Review Your Order').should('be.visible');

		// Step 13: Enter description in comment text area and click 'Place Order'
		cy.get('textarea[name="message"]').type('Please deliver ASAP.');
		cy.contains('Place Order').click();

		// Step 14: Enter payment details: Name on Card, Card Number, CVC, Expiration date
		cy.get('input[data-qa="name-on-card"]').type('JOHN DOE');
		cy.get('input[data-qa="card-number"]').type('4242424242424242');
		cy.get('input[data-qa="cvc"]').type('123');
		cy.get('input[data-qa="expiry-month"]').type('12');
		cy.get('input[data-qa="expiry-year"]').type('2028');

		// Step 15: Click 'Pay and Confirm Order' button
		cy.get('button[data-qa="pay-button"]').click();

		// Step 16: Verify success message 'Your order has been placed successfully!'
		cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');

		// Step 17: Click 'Delete Account' button
		cy.contains('a', 'Delete Account').click();

		// Step 18: Verify 'ACCOUNT DELETED!' and click 'Continue' button
		cy.contains('b', 'Account Deleted!').should('be.visible');
		cy.contains('a', 'Continue').click();
	});
});



