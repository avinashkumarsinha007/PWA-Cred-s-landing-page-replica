import { render, screen, fireEvent } from '@testing-library/react';
import HeaderMenu from '../Components/HeaderMenu/HeaderMenu';
import '@testing-library/jest-dom/extend-expect';

// Test case: HeaderMenu component renders correctly
test('renders HeaderMenu component and checks initial state', () => {
  render(<HeaderMenu toggle={jest.fn()} />);
  
  // Check if menu items are rendered
  const menuItems = [
    "what's new", "payments", "upgrades", "company", "insider perks"
  ];
  
  menuItems.forEach((item) => {
    expect(screen.getByText(item)).toBeInTheDocument();
  });
  
  // Ensure the initial state is -1
  expect(screen.queryByText(/now live/i)).toBeNull();
  expect(screen.queryByText(/Tap to Pay/i)).toBeNull();
  expect(screen.queryByText(/Travel/i)).toBeNull();
  expect(screen.queryByText(/about CRED/i)).toBeNull();
  expect(screen.queryByText(/upgrade to UPI/i)).toBeNull();
});

// Test case: Check if state updates correctly on mouse enter
test('updates state on mouse enter and displays corresponding content', async () => {
  render(<HeaderMenu toggle={jest.fn()} />);
  
  // Hover over the first menu item
  fireEvent.mouseEnter(screen.getByText("what's new"));
  expect(await screen.findByText(/now live/i)).toBeInTheDocument();
  
  // Hover over the second menu item
  fireEvent.mouseEnter(screen.getByText("payments"));
  expect(await screen.findByText(/Tap to Pay/i)).toBeInTheDocument();
  
  // Hover over the third menu item
  fireEvent.mouseEnter(screen.getByText("upgrades"));
  expect(await screen.findByText(/Travel/i)).toBeInTheDocument();
  
  // Hover over the fourth menu item
  fireEvent.mouseEnter(screen.getByText("company"));
  expect(await screen.findByText(/about CRED/i)).toBeInTheDocument();
  
  // Hover over the fifth menu item
  fireEvent.mouseEnter(screen.getByText("insider perks"));
  expect(await screen.findByText(/upgrade to UPI/i)).toBeInTheDocument();
});

// Test case: Check if menu items are linked correctly
test('checks links and images within the HeaderMenu', async () => {
  render(<HeaderMenu toggle={jest.fn()} />);
  
  // Hover to show content
  fireEvent.mouseEnter(screen.getByText("what's new"));
  
  // Check if the links and images within the "payments" section are present
  fireEvent.mouseEnter(screen.getByText("payments"));
  expect(await screen.findByRole('link', { name: /Tap to Pay/i })).toHaveAttribute('href', 'https://cred.club/tap');
  expect(await screen.findByRole('link', { name: /Pay Anyone/i })).toHaveAttribute('href', 'https://cred.club/pay-via-upi');
  expect(await screen.findByRole('link', { name: /RuPay Cards on UPI/i })).toHaveAttribute('href', 'https://cred.club/upi-on-credit');
  expect(await screen.findByRole('link', { name: /Scan & Pay/i })).toHaveAttribute('href', 'https://cred.club/cred-pay');
  
  // Check if the links and images within the "upgrades" section are present
  fireEvent.mouseEnter(screen.getByText("upgrades"));
  expect(await screen.findByRole('link', { name: /Travel/i })).toHaveAttribute('href', 'https://cred.club/escapes');
  expect(await screen.findByRole('link', { name: /Garage/i })).toHaveAttribute('href', 'https://cred.club/garage');
  expect(await screen.findByRole('link', { name: /Mint/i })).toHaveAttribute('href', 'https://cred.club/mint');
  expect(await screen.findByRole('link', { name: /Money/i })).toHaveAttribute('href', 'https://cred.club/money');
  
  // Check if the links and images within the "company" section are present
  fireEvent.mouseEnter(screen.getByText("company"));
  expect(await screen.findByRole('link', { name: /about CRED/i })).toHaveAttribute('href', 'https://cred.club/about');
  expect(await screen.findByRole('link', { name: /careers/i })).toHaveAttribute('href', 'https://careers.cred.club/openings');
  
  // Check if the links and images within the "insider perks" section are present
  fireEvent.mouseEnter(screen.getByText("insider perks"));
  expect(await screen.findByRole('link', { name: /upgrade to UPI/i })).toHaveAttribute('href', 'https://cred.club/ipl');
});
