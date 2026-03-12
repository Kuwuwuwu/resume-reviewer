import React from 'react';

const Badge = ({ children, variant = 'blue', className = '' }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium';
  
  const variants = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    gray: 'bg-gray-100 text-gray-700'
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
