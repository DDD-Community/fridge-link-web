import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, className, onClick }) => {
  return (
    <button
      className={`w-full text-white p-18 gap-12 rounded-12 heading4-semibold ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
