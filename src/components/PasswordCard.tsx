import React from 'react';
import PasswordInput from './PasswordInput';
import PasswordStrengthMeter from './PasswordStrengthMeter';
import CriteriaList from './CriteriaList';
import PasswordTips from './PasswordTips';
import { usePassword } from '../context/PasswordContext';
import { Shield, ShieldCheck, ShieldAlert, ShieldX } from 'lucide-react';

const PasswordCard: React.FC = () => {
  const { strength } = usePassword();

  const getIcon = () => {
    switch (strength) {
      case 'strong':
        return <ShieldCheck className="h-6 w-6 text-emerald-500" />;
      case 'medium':
        return <ShieldAlert className="h-6 w-6 text-amber-500" />;
      case 'weak':
        return <ShieldX className="h-6 w-6 text-red-500" />;
      default:
        return <Shield className="h-6 w-6 text-gray-400" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 ease-in-out">
      <div className="flex items-center gap-3 mb-5">
        {getIcon()}
        <h2 className="text-xl font-semibold text-gray-700">Create a secure password</h2>
      </div>
      
      <PasswordInput />
      <PasswordStrengthMeter />
      <CriteriaList />
      <PasswordTips />
      
      <div className="mt-6 text-center text-sm text-gray-500">
        Your password is checked locally and never sent to any server.
      </div>
    </div>
  );
};

export default PasswordCard;