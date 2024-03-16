import React from 'react';
import LoginForm from '../components/LoginForm';

interface LoginProps {
  onLogin: (email: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-center">Login</h2>
        <LoginForm onLogin={onLogin} />
      </div>
    </div>
  );
};

export default Login;
