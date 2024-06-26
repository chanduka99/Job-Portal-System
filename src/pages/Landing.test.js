import React from 'react';
import { render } from '@testing-library/react';
import Landing from './Landing';
import React from 'react';
import { Link } from 'react-router-dom';
import pilot from '../assets/landing/main/JobPilot.svg'
import { delay, motion } from "framer-motion";

// import findJob from '../assets/landing/main/findJob.svg'
import postJob from '../assets/landing/main/postJob.svg'
import pilot from '../assets/landing/main/JobPilot.svg'
import { delay, motion } from "framer-motion";

describe('Landing component', () => {
  test('renders site logo', () => {
    // Render the Landing component
    const { getByAltText } = render(<Landing />);
    
    // Check if the image with alt text "Job Pilot" is rendered
    const logoImage = getByAltText('Job Pilot');
    expect(logoImage).toBeInTheDocument();
  });
});
