import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeaderUpperDropdown from '../Components/HeaderUpperDropdown/HeaderUpperDropdown';

describe('HeaderUpperDropdown Component', () => {
  test('renders HeaderUpperDropdown component correctly', () => {
    render(<HeaderUpperDropdown toggleDropDown={false} />);

    // Check if the component renders
    expect(screen.getByTestId('dropdown-link')).toBeInTheDocument();
    expect(screen.getByTestId('dropdown-icon')).toBeInTheDocument();
  });

  test('applies active class when toggleDropDown is true', () => {
    render(<HeaderUpperDropdown toggleDropDown={true} />);

    // Check if the component has 'active' class when toggleDropDown is true
    expect(screen.getByTestId('dropdown-content')).toHaveClass('active');
    expect(screen.getByTestId('dropdown-inner')).toHaveClass('active');
  });

  test('does not apply active class when toggleDropDown is false', () => {
    render(<HeaderUpperDropdown toggleDropDown={false} />);

    // Check if the component does not have 'active' class when toggleDropDown is false
    expect(screen.getByTestId('dropdown-content')).not.toHaveClass('active');
    expect(screen.getByTestId('dropdown-inner')).not.toHaveClass('active');
  });

  test('renders the link with the correct href attribute', () => {
    render(<HeaderUpperDropdown toggleDropDown={false} />);

    // Check if the link element has the correct href attribute
    const linkElement = screen.getByTestId('dropdown-link');
    expect(linkElement).toHaveAttribute('href', 'https://cred.club/money');
    expect(linkElement).toHaveAttribute('target', '_blank');
  });
});
