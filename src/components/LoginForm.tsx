import React, { useState } from "react";

interface LoginFormProps {
  onLogin: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-black block w-full px-4 py-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="text-black block w-full px-4 py-2 my-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        required
      />
      <button
        type="submit"
        className="w-full px-4 py-2 my-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
