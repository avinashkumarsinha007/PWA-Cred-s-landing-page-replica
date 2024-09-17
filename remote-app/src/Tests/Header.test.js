import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Components/Header';

// Mock the HeaderUpperDropdown component
jest.mock('../Components/HeaderUpperDropdown/HeaderUpperDropdown', () => () => <div>HeaderUpperDropdown</div>);

describe('Header Component', () => {
  beforeEach(() => {
    // Clear any modifications to document body style before each test
    document.body.style.overflow = '';
  });

  afterEach(() => {
    document.body.style.overflow = '';
  });

  test('renders Header component correctly', () => {
    render(<Header />);
    expect(screen.getByText('HeaderUpperDropdown')).toBeInTheDocument();
  });

  test('handles dropdown toggle', async () => {
    render(<Header />);
    
    // Check initial state of dropdown
    const expandText = await screen.findByText('click to expand');
    expect(expandText).toBeInTheDocument();

    // Click on the dropdown to toggle
    fireEvent.click(expandText);

    // Wait for the expected change in the document
    await waitFor(() => {
      expect(screen.queryByText('click to expand')).toBeNull(); // assuming it hides on click
    });
  });
});
