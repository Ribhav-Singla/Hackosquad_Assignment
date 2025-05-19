import { CriterionType } from '../types/passwordTypes';

export const CRITERIA: CriterionType[] = [
  { 
    id: 'minLength', 
    description: 'At least 8 characters' 
  },
  { 
    id: 'hasUppercase', 
    description: 'Contains uppercase letters (A-Z)' 
  },
  { 
    id: 'hasLowercase', 
    description: 'Contains lowercase letters (a-z)' 
  },
  { 
    id: 'hasNumber', 
    description: 'Contains numbers (0-9)' 
  },
  { 
    id: 'hasSpecialChar', 
    description: 'Contains special characters (!@#$%^&*)' 
  }
];