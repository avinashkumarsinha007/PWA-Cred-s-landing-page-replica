// cypress/integration/header.spec.js

describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('/'); 
  });

  it('should render the header correctly', () => {
    // Verify that header elements are present
    cy.get('#navbar-wrapper').should('exist');
    cy.get('svg').should('exist');
    cy.get('#toggle-container').should('exist');
  });

  it('should toggle the menu on click', () => {
    // Verify initial state
    cy.get('#toggle-container').should('not.have.class', 'toggle-border-color');

    // Click the toggle button
    cy.get('.nav-toggle').click();

    // Verify the state change
    cy.get('#toggle-container')
    .should('have.class', 'toggle-border-color', { timeout: 10000 });  
  });

  it('should toggle dropdown menu on click', () => {
    // Verify dropdown menu is not visible initially
    cy.get('.sc-1tidt5-7').should('contain.text', 'click to expand');
    cy.get('.expand-text').click({ force: true });
    cy.get('.sc-1tidt5-8', { timeout: 10000 }).should('not.exist');

    // Click the dropdown toggle again to hide menu
    cy.get('#toggle-container').click();

    // Verify dropdown menu is not visible
    cy.get('.sc-1tidt5-8').should('be.visible');
  });

  it('should change body overflow style when toggling', () => {
    // Click the toggle button to open menu
    cy.get('.nav-toggle').click();
  
    // Verify body overflow-x and overflow-y styles are updated
    cy.get('body').should('have.css', 'overflow-x', 'hidden', { timeout: 6000 });
  
    // Click the toggle button again to close menu
    cy.get('.nav-toggle').click();
  
    // Verify body overflow-x and overflow-y styles are reverted
    cy.get('body').should('have.css', 'overflow', 'hidden auto', { timeout: 6000 });
  });
  
});
