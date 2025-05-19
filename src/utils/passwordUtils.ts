import { PasswordCriteria, PasswordStrength } from '../types/passwordTypes';
import { CRITERIA } from '../constants/passwordConstants';

export const checkPasswordCriteria = (password: string): PasswordCriteria => {
  const criteria: PasswordCriteria = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /[0-9]/.test(password),
    hasSpecialChar: /[^A-Za-z0-9]/.test(password),
  };

  // Calculate additional criteria
  criteria.hasGoodLength = password.length >= 12;
  criteria.hasExcellentLength = password.length >= 16;
  criteria.isNotCommon = !isCommonPassword(password);

  return criteria;
};

// This is a simplified check - in a real app you would check against a database of common passwords
const isCommonPassword = (password: string): boolean => {
  const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'welcome', 'password123'];
  return commonPasswords.includes(password.toLowerCase());
};

export const calculatePasswordStrength = (
  password: string,
  criteria: PasswordCriteria
): { strength: PasswordStrength; score: number } => {
  if (!password) {
    return { strength: 'empty', score: 0 };
  }

  let score = 0;
  
  // Base criteria
  if (criteria.minLength) score += 15;
  if (criteria.hasUppercase) score += 15;
  if (criteria.hasLowercase) score += 10;
  if (criteria.hasNumber) score += 15;
  if (criteria.hasSpecialChar) score += 20;
  
  // Bonus criteria
  if (criteria.hasGoodLength) score += 10;
  if (criteria.hasExcellentLength) score += 15;
  if (criteria.isNotCommon) score += 10;
  
  // Penalize short passwords
  if (password.length < 6) score = Math.max(score - 15, 0);
  
  // Cap score at 100
  score = Math.min(score, 100);
  
  // Determine strength based on score
  let strength: PasswordStrength;
  if (score < 40) {
    strength = 'weak';
  } else if (score < 70) {
    strength = 'medium';
  } else {
    strength = 'strong';
  }
  
  return { strength, score };
};

export const getStrengthColor = (strength: PasswordStrength): string => {
  switch (strength) {
    case 'strong':
      return '#10B981'; // emerald-500
    case 'medium':
      return '#F59E0B'; // amber-500
    case 'weak':
      return '#EF4444'; // red-500
    default:
      return '#9CA3AF'; // gray-400
  }
};

export const getPasswordTips = (criteria: PasswordCriteria): string[] => {
  const tips: string[] = [];
  
  if (!criteria.minLength) {
    tips.push('Use at least 8 characters');
  } else if (!criteria.hasGoodLength) {
    tips.push('Consider using at least 12 characters for a stronger password');
  }
  
  if (!criteria.hasUppercase) {
    tips.push('Add uppercase letters (A-Z)');
  }
  
  if (!criteria.hasLowercase) {
    tips.push('Add lowercase letters (a-z)');
  }
  
  if (!criteria.hasNumber) {
    tips.push('Include numbers (0-9)');
  }
  
  if (!criteria.hasSpecialChar) {
    tips.push('Add special characters (!, @, #, $, etc.)');
  }
  
  if (!criteria.isNotCommon) {
    tips.push('Avoid common passwords or patterns');
  }
  
  if (Object.values(criteria).every(Boolean) && Object.keys(criteria).length > 0) {
    tips.push('Try creating a passphrase from multiple random words for even better security');
  }
  
  return tips;
};