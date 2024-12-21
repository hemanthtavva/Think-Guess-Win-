import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GameButtonProps {
  onClick: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
  icon: LucideIcon;
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const GameButton: React.FC<GameButtonProps> = ({
  onClick,
  disabled = false,
  variant = 'primary',
  icon: Icon,
  children,
  fullWidth = false,
}) => {
  const baseStyles = "relative px-4 py-2 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 overflow-hidden";
  const variantStyles = {
    primary: `${disabled ? 'bg-blue-400' : 'bg-blue-600'} text-white hover:bg-blue-700 active:scale-95`,
    secondary: `${disabled ? 'bg-gray-400' : 'bg-gray-600'} text-white hover:bg-gray-700 active:scale-95`
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseStyles}
        ${variantStyles[variant]}
        ${fullWidth ? 'flex-1' : ''}
        disabled:opacity-50 disabled:cursor-not-allowed
        transform hover:-translate-y-0.5
        before:absolute before:inset-0 before:bg-white before:opacity-0 before:transition-opacity hover:before:opacity-10
      `}
    >
      <Icon className="w-5 h-5" />
      <span>{children}</span>
    </button>
  );
};