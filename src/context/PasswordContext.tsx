import React, { createContext, useState, useContext, useEffect, useMemo } from 'react';
import {
  PasswordContextType,
  PasswordCriteria,
  PasswordStrength
} from '../types/passwordTypes';
import { 
  calculatePasswordStrength,
  checkPasswordCriteria 
} from '../utils/passwordUtils';

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export const PasswordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState<PasswordStrength>('empty');
  const [strengthScore, setStrengthScore] = useState(0);
  const [criteria, setCriteria] = useState<PasswordCriteria>({});

  useEffect(() => {
    if (!password) {
      setStrength('empty');
      setStrengthScore(0);
      setCriteria({});
      return;
    }

    const updatedCriteria = checkPasswordCriteria(password);
    setCriteria(updatedCriteria);

    const { strength: newStrength, score } = calculatePasswordStrength(password, updatedCriteria);
    setStrength(newStrength);
    setStrengthScore(score);
  }, [password]);

  const value = useMemo(() => ({
    password,
    setPassword,
    strength,
    strengthScore,
    criteria
  }), [password, strength, strengthScore, criteria]);

  return (
    <PasswordContext.Provider value={value}>
      {children}
    </PasswordContext.Provider>
  );
};

export const usePassword = (): PasswordContextType => {
  const context = useContext(PasswordContext);
  if (context === undefined) {
    throw new Error('usePassword must be used within a PasswordProvider');
  }
  return context;
};