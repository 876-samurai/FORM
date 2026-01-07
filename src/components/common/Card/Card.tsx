import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = false,
}) => {
  const hoverStyles = hoverable ? 'hover:shadow-elegant cursor-pointer' : '';

  return (
    <div
      className={`bg-white rounded-lg shadow-soft p-6 transition-shadow duration-200 ${hoverStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
