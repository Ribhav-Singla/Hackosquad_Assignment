import React from 'react';
import { usePassword } from '../context/PasswordContext';
import { Lightbulb } from 'lucide-react';
import { getPasswordTips } from '../utils/passwordUtils';

const PasswordTips: React.FC = () => {
  const { password, criteria } = usePassword();

  if (!password) {
    return null;
  }

  const tips = getPasswordTips(criteria);

  if (!tips.length) {
    return null;
  }

  return (
    <div className="mt-5 p-4 bg-indigo-50 rounded-lg border border-indigo-100">
      <div className="flex gap-2 mb-2">
        <Lightbulb className="h-5 w-5 text-indigo-600 flex-shrink-0" />
        <p className="font-medium text-indigo-700">Tips to improve your password</p>
      </div>
      <ul className="space-y-2 text-sm text-indigo-800 ml-7">
        {tips.map((tip, index) => (
          <li key={index} className="list-disc">
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PasswordTips;