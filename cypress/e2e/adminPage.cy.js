describe('Add new product through admin page', () => {
    it('should navigate to the admin page', () => {
        // Start from the admin page
        cy.visit('https://localhost:3000/admin');

        // Click Add button in order to open a form
        cy.contains('Agregar nuevo producto').click();

        //---------------- Fill the form-----------------
        // Type product name
        cy.get('[name="name"]').type('Pan de plátano con trozos de chocolate y nueces');

        //  Verify that the value has been updated
        cy.get('[name="name"]').should('have.value', 'Pan de plátano con trozos de chocolate y nueces');

        // Type description
        cy.get('[name="description"]').type('Pan a base de harina de trigo, chocolate 60% cacao, aceite de coco, nueces pecanas y endulzado con azúcar mascabado.');

        //  Verify that the value has been updated
        cy.get('[name="description"]').should('have.value', 'Pan a base de harina de trigo, chocolate 60% cacao, aceite de coco, nueces pecanas y endulzado con azúcar mascabado.');

        // Type link to image
        cy.get('[name="imageUrl"]').type('https://bluebowlrecipes.com/wp-content/uploads/2023/02/chocolate-chip-banana-bread-0781-683x1024.jpg');

        //  Verify that the value has been updated
        cy.get('[name="imageUrl"]').should('have.value', 'https://bluebowlrecipes.com/wp-content/uploads/2023/02/chocolate-chip-banana-bread-0781-683x1024.jpg');

        // Type price
        cy.get('[name="price"]').type('185');

        //  Verify that the value has been updated
        cy.get('[name="price"]').should('have.value', '185');

        // Submit form
        cy.get('button[type="submit"]').click(); d



    });
});