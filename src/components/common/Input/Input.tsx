import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  fullWidth = false,
  className = '',
  ...props
}) => {
  const widthStyles = fullWidth ? 'w-full' : '';

  return (
    <div className={`flex flex-col gap-1 ${widthStyles}`}>
      {label && (
        <label className="text-sm font-medium text-charcoal">{label}</label>
      )}
      <input
        className={`px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-true-black focus:border-transparent transition-all ${widthStyles} ${className}`}
        {...props}
      />
      {error && <span className="text-sm text-red-500">{error}</span>}
    </div>
  );
};
