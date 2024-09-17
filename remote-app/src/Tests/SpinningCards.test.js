import { render, screen } from '@testing-library/react';
import SpinningCards from '../Components/SpinningCards/SpinningCards';

describe('SpinningCards Component', () => {
test('renders video element with correct attributes', () => {
    render(<SpinningCards />);
    
    const videoElement = screen.getByTestId('video-element');
    expect(videoElement).toBeInTheDocument();
    expect(videoElement.hasAttribute('loop')).toBe(true);
    expect(videoElement.hasAttribute('muted')).toBe(false);
    expect(videoElement.hasAttribute('playsInline')).toBe(true);
    expect(videoElement.hasAttribute('autoPlay')).toBe(true);
    expect(videoElement).toHaveAttribute('preload', 'metadata');
    expect(videoElement).toHaveAttribute('poster', 'https://web-images.credcdn.in/v2/_next/assets/images/landing/desktop/ccbp-fold-poster.jpg?tr=q-95');
    expect(videoElement).toHaveAttribute('src', 'https://web-images.credcdn.in/v2/_next/assets/videos/landing/desktop/ccbp-fold-d.mp4?tr=q-95');
});
    
test('renders text elements correctly', async () => {
    render(<SpinningCards />);
  
    // Assuming you added data-testid attributes to your elements
    const headingElement = screen.getByTestId('heading-text');
    expect(headingElement).toBeInTheDocument();
  
    const descriptionElement = screen.getByTestId('description-text');
    expect(descriptionElement).toBeInTheDocument();
  });

test('renders elements with specific CSS classes', () => {
    render(<SpinningCards />);
  
    // Check the video element's class
    const videoElement = screen.getByTestId('video-element');
    expect(videoElement).toHaveClass('sc-1ck9s4i-0');
  
    // Check if text elements have the correct classes
    const headingText = screen.getByTestId('heading-text');
    expect(headingText).toHaveClass('sc-1ib0uz9-2');
  
    const descriptionText = screen.getByTestId('description-text');
    expect(descriptionText).toHaveClass('sc-1ib0uz9-4');
  });
  
  test('matches snapshot', () => {
    const { asFragment } = render(<SpinningCards />);
    expect(asFragment()).toMatchSnapshot();
  });
    
});