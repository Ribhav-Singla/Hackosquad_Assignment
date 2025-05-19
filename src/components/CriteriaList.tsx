import React from 'react';
import { usePassword } from '../context/PasswordContext';
import { CheckCircle, XCircle } from 'lucide-react';
import { CRITERIA } from '../constants/passwordConstants';

const CriteriaList: React.FC = () => {
  const { criteria } = usePassword();

  if (Object.keys(criteria).length === 0) {
    return null;
  }

  return (
    <div className="mb-5">
      <p className="text-sm font-medium text-gray-700 mb-2">Password requirements:</p>
      <ul className="space-y-2">
        {CRITERIA.map((criterion) => {
          const isMet = criteria[criterion.id];
          return (
            <li 
              key={criterion.id} 
              className={`flex items-center gap-2 text-sm transition-all duration-200 ease-in-out ${isMet ? 'text-gray-700' : 'text-gray-500'}`}
            >
              {isMet ? (
                <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              ) : (
                <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
              )}
              <span>{criterion.description}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CriteriaList;