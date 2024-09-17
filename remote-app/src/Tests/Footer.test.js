import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer/Footer';

describe('Footer Component', () => {
  it('renders the logos and text content correctly', () => {
    // Render the Footer component
    render(<Footer />);

    // Check if the cred logo is rendered
    const credLogo = screen.getByAltText('cred logo');
    expect(credLogo).toBeInTheDocument();
    expect(credLogo).toHaveAttribute('src', 'https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/footer-logo.png');

    // Check if the security logo is rendered
    const securityLogo = screen.getByAltText('security logo');
    expect(securityLogo).toBeInTheDocument();
    expect(securityLogo).toHaveAttribute('src', 'https://web-images.credcdn.in/v2/_next/assets/images/landing/security-final-2.png');

    // Verify some specific text content
    expect(screen.getByText('complete security. no asterisks.')).toBeInTheDocument();
    expect(screen.getByText(/CRED encrypts all data and transactions/i)).toBeInTheDocument();
  });

  it('renders the navigation links', () => {
    render(<Footer />);

    // Check for various navigation links
    const links = [
      { href: 'https://cred.club/money', text: 'CRED money' },
      { href: 'https://cred.club/mint', text: 'CRED mint' },
      { href: 'https://cred.club/garage', text: 'CRED garage' },
      { href: 'https://cred.club/escapes', text: 'CRED escapes' },
      { href: 'https://cred.club/cred-pay', text: 'Scan & Pay' },
      { href: 'https://cred.club/tap', text: 'Tap to Pay' },
    ];

    links.forEach((link) => {
      const anchorElement = screen.getByText(link.text);
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute('href', link.href);
    });
  });

  it('renders the copyright notice', () => {
    render(<Footer />);

    // Verify copyright text
    expect(screen.getByText(/copyright © 2020-24 Dreamplug Technologies Pvt Ltd./i)).toBeInTheDocument();
  });
});
