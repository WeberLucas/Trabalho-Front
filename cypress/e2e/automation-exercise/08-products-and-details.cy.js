describe('Test Case 8: Verify All Products and product detail page', () => {
	it('opens Products and validates product detail', () => {
		// Step 1: Launch browser
		// Step 2: Navigate to url 'http://automationexercise.com'
		cy.visit('/');
		cy.acceptCookiesIfPresent();

		// Step 3: Verify that home page is visible successfully
		cy.contains('h2', 'Features Items').should('be.visible');

		// Step 4: Click on 'Products' button
		cy.contains('a', 'Products').click();

		// Step 5: Verify user is navigated to ALL PRODUCTS page successfully
		cy.url().should('include', '/products');
		cy.contains('h2', 'All Products').should('be.visible');

		// Step 6: The products list is visible
		cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);

		// Step 7: Click on 'View Product' of first product
		cy.get('.features_items .product-image-wrapper').first().within(() => {
			cy.contains('View Product').click();
		});

		// Step 8: User is landed to product detail page
		cy.url().should('include', '/product_details/');

		// Step 9: Verify that detail detail is visible: product name, category, price, availability, condition, brand
		cy.get('.product-information').within(() => {
			// Product name
			cy.get('h2').should('exist').and('not.be.empty');
			// Category
			cy.contains('Category').should('exist');
			// Price
			cy.contains('Rs.').should('exist');
			// Availability
			cy.contains('Availability').should('exist');
			// Condition
			cy.contains('Condition').should('exist');
			// Brand
			cy.contains('Brand').should('exist');
		});
	});
});




