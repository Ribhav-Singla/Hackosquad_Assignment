import React from 'react';
import PasswordStrengthChecker from './components/PasswordStrengthChecker';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center justify-center p-4">
      <PasswordStrengthChecker />
    </div>
  );
}

export default App;