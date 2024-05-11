import { render, fireEvent, waitFor } from '@testing-library/react';
import EmployerSignInForm from './EmployerSignInForm';
import React ,{useState,useRef}from 'react';
import {TextInput} from 'flowbite-react';
import {Link,useNavigate} from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import {toast} from 'sonner';
import { useUser } from "../contexts/UserContext";

// Mock the useAuth and useUser hooks
jest.mock('../contexts/AuthContext', () => ({
  useAuth: jest.fn(),
}));

jest.mock('../contexts/UserContext', () => ({
  useUser: jest.fn(),
}));

describe('EmployerSignInForm component', () => {
  test('should successfully sign in with correct credentials', async () => {
    // Mock the SignIn function to resolve successfully
    const mockSignIn = jest.fn().mockResolvedValue({ type: 'employer' });
    const mockUseAuth = jest.fn(() => ({
      SignIn: mockSignIn,
      LogOut: jest.fn().mockResolvedValue(),
    }));

    // Mock the SetUser function to resolve successfully
    const mockSetUser = jest.fn().mockResolvedValue();
    const mockUseUser = jest.fn(() => ({
      SetUser: mockSetUser,
      currentUserDetail: undefined,
    }));

    const AuthProvider = ({ children }) => <div>{children}</div>;
    // Arrange
    const { getByPlaceholderText, getByText } = render(
      <AuthProvider value={{ useAuth: mockUseAuth }}>
        <UserProvider value={{ useUser: mockUseUser }}>
          <EmployerSignInForm />
        </UserProvider>
      </AuthProvider>
    );
    
    // Act
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password' } });
    fireEvent.click(getByText('Sign in'));

    // Assert
    await waitFor(() => {
      expect(mockSignIn).toHaveBeenCalledWith('test@example.com', 'password');
      expect(mockSetUser).toHaveBeenCalled();
      // Add more assertions as needed
    });
  });

  test('emailRef updates as user types into the email input field', () => {
    
    const emailRef = useRef('test@example.com');
    render(<TextInput id="email" placeholder="Email" type="email" required shadow className=" mx-8 mt-12 " ref={emailRef} />);
    
    // Find the email input field by its placeholder text
    const emailInput = screen.getByPlaceholderText('Email');
    
    // Simulate user typing into the email input field
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    
    // Get the current value of emailRef
    const emailRefValue = emailRef.current.value;
    
    // Ensure that emailRef's current value matches the typed email
    expect(emailRefValue).toBe('test@example.com');
  });
  
});
