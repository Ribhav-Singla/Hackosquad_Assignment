export type PasswordStrength = 'empty' | 'weak' | 'medium' | 'strong';

export interface PasswordCriteria {
  minLength?: boolean;
  hasUppercase?: boolean;
  hasLowercase?: boolean;
  hasNumber?: boolean;
  hasSpecialChar?: boolean;
  hasGoodLength?: boolean;
  hasExcellentLength?: boolean;
  isNotCommon?: boolean;
}

export interface PasswordContextType {
  password: string;
  setPassword: (password: string) => void;
  strength: PasswordStrength;
  strengthScore: number;
  criteria: PasswordCriteria;
}

export interface CriterionType {
  id: keyof PasswordCriteria;
  description: string;
}