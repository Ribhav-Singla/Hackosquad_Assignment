import React, { useEffect, useRef } from 'react';
import { usePassword } from '../context/PasswordContext';
import { getStrengthColor } from '../utils/passwordUtils';

const PasswordStrengthMeter: React.FC = () => {
  const { password, strength, strengthScore } = usePassword();
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.width = `${strengthScore}%`;
      progressRef.current.style.backgroundColor = getStrengthColor(strength);
    }
  }, [strengthScore, strength]);

  if (!password) {
    return null;
  }

  return (
    <div className="mb-5">
      <div className="flex justify-between items-center mb-2">
        <p className="text-sm font-medium text-gray-700">Password Strength</p>
        <span 
          className="text-sm font-medium capitalize" 
          style={{ color: getStrengthColor(strength) }}
        >
          {strength || 'Empty'}
        </span>
      </div>
      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{ 
            width: `${strengthScore}%`,
            backgroundColor: getStrengthColor(strength)
          }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthMeter;