describe('Test Case 9: Search Product', () => {
	it('searches for a product and validates results', () => {
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

		// Step 6: Enter product name in search input and click search button
		cy.get('#search_product').type('Top');
		cy.get('#submit_search').click();

		// Step 7: Verify 'SEARCHED PRODUCTS' is visible
		cy.contains('h2', 'Searched Products').should('be.visible');

		// Step 8: Verify all the products related to search are visible
		cy.get('.features_items .product-image-wrapper').should('have.length.greaterThan', 0);
		cy.get('.features_items .product-image-wrapper').each(($el) => {
			cy.wrap($el).should('be.visible');
		});
	});
});




