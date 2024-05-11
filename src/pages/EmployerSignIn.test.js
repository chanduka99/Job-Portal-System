import React from 'react';
import { render } from '@testing-library/react';
import EmployerSignIn from './EmployerSignIn';
import ESignin from '../components/EmployerSignInForm';
import { BrowserRouter } from 'react-router-dom';

describe('EmployerSignIn component', () => {
  test('renders ESignin component', () => {
    // Render the EmployerSignIn component which contains the ESignin component
    const { getByTestId } = render(
      <BrowserRouter>
          <EmployerSignIn />
      </BrowserRouter>
    );
    
    // Check if ESignin component renders within EmployerSignIn component
    const ESigninComponent = getByTestId('ESignin');
    expect(ESigninComponent).toBeInTheDocument();
  });
});
