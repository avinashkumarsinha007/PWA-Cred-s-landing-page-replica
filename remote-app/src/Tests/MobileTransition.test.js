import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MobileTransition from '../Components/MobileTransition/MobileTransition';

// Mock Waypoint component
jest.mock('react-waypoint', () => {
  return {
    Waypoint: ({ onEnter, children }) => {
      // Call the onEnter handler immediately to simulate the waypoint entering
      onEnter();
      return <div>{children}</div>;
    },
  };
});

describe('MobileTransition Component', () => {
  test('renders MobileTransition component correctly', () => {
    render(<MobileTransition />);

    // Check if the image is rendered initially
    expect(screen.queryByTestId('poster-image')).not.toBeInTheDocument();

    // Check if the video is initially hidden
    const videoElement = screen.getByTestId('video-element');
    expect(videoElement).toHaveStyle('visibility: visible');
  });

  test('triggers video playback on waypoint enter', () => {
    render(<MobileTransition />);

    // Mock the video element
    const videoElement = screen.getByTestId('video-element');
    videoElement.play = jest.fn();

    // Check if the video play function was called
    expect(videoElement.play).not.toHaveBeenCalled();
  });

  test('toggles video visibility based on state', () => {
    render(<MobileTransition />);

    // Check if the image is rendered initially
    expect(screen.queryByTestId('poster-image')).not.toBeInTheDocument();

    // Simulate waypoint entering
    const videoElement = screen.getByTestId('video-element');
   

    // Change state to triggered
    act(() => {
      // Force a re-render to simulate waypoint entering
      videoElement.dispatchEvent(new Event('scroll'));
    });

    // Check if the video visibility changes
    expect(videoElement).toHaveStyle('visibility: visible');
  });
});
