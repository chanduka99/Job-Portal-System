import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

test('landing page renders after the browser starts', () => {
  // Render the App component wrapped in BrowserRouter
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  // Check if the landing page content is rendered
  const landingPageHeading = screen.getByClassName('text-7xl');
  expect(landingPageHeading).toBeInTheDocument();
});
