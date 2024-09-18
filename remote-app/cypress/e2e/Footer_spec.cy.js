describe('Footer Component', () => {

    beforeEach(() => {
      // Visit the page where the Footer is rendered
      cy.visit('/'); 
    });
  
    it('should display CRED logo and security logo correctly', () => {
      // Check if the CRED logo is displayed
      cy.get('img[alt="cred logo"]')
        .should('be.visible')
        .and('have.attr', 'src', 'https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/footer-logo.png');
  
      // Check if the security logo is displayed
      cy.get('img[alt="security logo"]')
        .should('be.visible')
        .and('have.attr', 'src', 'https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png');
    });
  
    it('should display the correct text content', () => {
      // Verify text in footer
      cy.contains('complete security. no asterisks.').should('be.visible');
      cy.contains(/CRED encrypts all data and transactions/i).should('be.visible');
    });
  
    it('should have correct navigation links', () => {
      const links = [
        { href: 'https://cred.club/money', text: 'CRED money' },
        { href: 'https://cred.club/mint', text: 'CRED mint' },
        { href: 'https://cred.club/garage', text: 'CRED garage' },
        { href: 'https://cred.club/escapes', text: 'CRED escapes' },
        { href: 'https://cred.club/cred-pay', text: 'Scan & Pay' },
        { href: 'https://cred.club/tap', text: 'Tap to Pay' }
      ];
  
      // Verify each link's href and text
      links.forEach(link => {
        cy.contains(link.text)
          .should('have.attr', 'href', link.href)
          .and('be.visible');
      });
    });
  
    it('should display the copyright notice', () => {
      cy.contains(/copyright © 2020-24 Dreamplug Technologies Pvt Ltd/i).should('be.visible');
    });
  
    it('should open links in new tabs', () => {
      // Verify links open in a new tab
      cy.get('a[href="https://cred.club/money"]').should('have.attr', 'target', '_blank');
      cy.get('a[href="https://cred.club/mint"]').should('have.attr', 'target', '_blank');
    });
  });
  