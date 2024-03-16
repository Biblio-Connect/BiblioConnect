import React from 'react';
import SignupForm from '../components/SignupForm';

interface SignupProps {
  onSignup: (email: string, password: string) => void;
}

const Signup: React.FC<SignupProps> = ({ onSignup }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <SignupForm onSignup={onSignup} />
      </div>
    </div>
  );
};

export default Signup;
