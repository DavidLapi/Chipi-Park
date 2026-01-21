// Card genérico

import React from 'react';

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = false,
  onClick = null 
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      onClick={onClick}
      className={`
        bg-white rounded-xl shadow-md
        ${paddings[padding]}
        ${hover ? 'hover:shadow-xl transition-shadow duration-300 cursor-pointer' : ''}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;