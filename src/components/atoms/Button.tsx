import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ text, className, onClick, ...props }) => {
  return (
    <button
      className={`p-18 gap-12 rounded-12 heading4-semibold ${className}`}
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;
