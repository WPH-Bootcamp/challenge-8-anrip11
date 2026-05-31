import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className = '',
  ...props
}) => {
  const baseClasses =
    'font-body font-semibold text-sm transition-all duration-300 shadow-sm cursor-pointer outline-none select-none inline-flex items-center justify-center active:scale-95 text-center';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-primary-200 to-primary-300 text-white hover:opacity-90 rounded-full',
    secondary: 'bg-white text-primary-200 hover:bg-neutral-50 rounded-2xl',
    outline:
      'bg-transparent text-[#A4A7AE] border border-[#181D27] hover:text-white hover:bg-[#181D27] rounded-2xl',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
