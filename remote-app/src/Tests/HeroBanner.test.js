import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import HeroBanner from '../Components/HeroBanner/HeroBanner';

describe('HeroBanner Component', () => {
  test('renders HeroBanner component correctly', () => {
    render(<HeroBanner />);

    // Check if the video element is rendered
    expect(screen.getByTestId('hero-video')).toBeInTheDocument();
    
    // Check if the QR image is rendered
    expect(screen.getByTestId('qr-image')).toBeInTheDocument();
    
    // Check if the download link is rendered
    expect(screen.getByTestId('download-link')).toBeInTheDocument();
    
    // Check if the download icon is rendered
    expect(screen.getByTestId('download-icon')).toBeInTheDocument();
    
    // Check if the text content is rendered
    expect(screen.getByTestId('text-container')).toHaveTextContent('crafted for the');
    expect(screen.getByTestId('text-container')).toHaveTextContent('creditworthy');
    expect(screen.getByTestId('text-container')).toHaveTextContent('CRED is a members-only club');
  });

  test('video element has the correct attributes', () => {
    render(<HeroBanner />);

    const videoElement = screen.getByTestId('hero-video');

    // Check if the video element has expected attributes
    expect(videoElement.hasAttribute('loop')).toBeTruthy();
      expect(videoElement.hasAttribute('muted')).toBeFalsy();
    expect(videoElement.hasAttribute('playsInline')).toBeTruthy();
    expect(videoElement.hasAttribute('preload')).toBeTruthy();
    expect(videoElement.getAttribute('preload')).toBe('metadata');
    expect(videoElement.hasAttribute('autoPlay')).toBeTruthy();
  });

  test('download link has the correct href attribute', () => {
    render(<HeroBanner />);

    // Check if the download link has the correct href attribute
    const downloadLink = screen.getByTestId('download-link');
    expect(downloadLink).toHaveAttribute('href', 'https://app.cred.club/k63y/ciofyb98');
    expect(downloadLink).toHaveAttribute('rel', 'noreferrer');
  });
});
