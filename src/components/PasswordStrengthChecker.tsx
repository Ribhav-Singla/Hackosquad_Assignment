import React from 'react';
import { PasswordProvider } from '../context/PasswordContext';
import PasswordCard from './PasswordCard';

const PasswordStrengthChecker: React.FC = () => {
  return (
    <PasswordProvider>
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
          Password Strength Checker
        </h1>
        <PasswordCard />
      </div>
    </PasswordProvider>
  );
};

export default PasswordStrengthChecker;