import React, { useState } from 'react';
import { usePassword } from '../context/PasswordContext';
import { Eye, EyeOff } from 'lucide-react';

const PasswordInput: React.FC = () => {
  const { password, setPassword } = usePassword();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const toggleShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="mb-5">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Password
      </label>
      <div className="relative">
        <input
          id="password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={handleChange}
          className="w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ease-in-out"
          placeholder="Enter your password"
          autoComplete="new-password"
        />
        <button
          type="button"
          onClick={toggleShowPassword}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordInput;