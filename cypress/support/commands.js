// Utility to generate a unique user each run
function generateUser() {
	const ts = Date.now();
	return {
		name: `User ${ts}`,
		email: `user_${ts}@example.com`,
		password: 'Password123!'
	};
}

// Close cookie banner if present
Cypress.Commands.add('acceptCookiesIfPresent', () => {
	cy.get('body').then(($b) => {
		if ($b.find('a:contains("Accept All")').length) {
			cy.contains('a', 'Accept All').click({ force: true });
		}
	});
});

// Sign up a random user and stay logged in; exposes the user as @user
Cypress.Commands.add('signupRandomUser', () => {
	const user = generateUser();
	cy.visit('/');
	cy.acceptCookiesIfPresent();
	cy.contains('a', 'Signup / Login').click();
	cy.get('input[data-qa="signup-name"]').type(user.name);
	cy.get('input[data-qa="signup-email"]').type(user.email);
	cy.get('button[data-qa="signup-button"]').click();
	cy.get('#id_gender1').check({ force: true });
	cy.get('#password').type(user.password);
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
	cy.wrap(user).as('user');
});

// Log in with given credentials
Cypress.Commands.add('login', (email, password) => {
	cy.visit('/');
	cy.acceptCookiesIfPresent();
	cy.contains('a', 'Signup / Login').click();
	cy.get('input[data-qa="login-email"]').type(email);
	cy.get('input[data-qa="login-password"]').type(password);
	cy.get('button[data-qa="login-button"]').click();
});

// Logout if logged in
Cypress.Commands.add('logout', () => {
	cy.contains('a', 'Logout').click();
});

// Cart helpers
Cypress.Commands.add('addFirstProductToCart', () => {
	cy.contains('a', 'Products').click();
	cy.get('.features_items .product-image-wrapper').first().trigger('mouseover');
	cy.contains('Add to cart').first().click({ force: true });
});

Cypress.Commands.add('goToCart', () => {
	cy.contains('View Cart').click();
});

Cypress.Commands.add('proceedToCheckout', () => {
	cy.contains('Proceed To Checkout').click();
});




