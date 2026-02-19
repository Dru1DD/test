import { type ButtonHTMLAttributes, type ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
  labelStyle?: string;
}

const Button = ({ className, label, onClick, children, labelStyle, disabled, ...props }: ButtonProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (onClick) {
      onClick(e);
    } else {
      window.open('https://t.me/urchin_chat', '_blank');
    }
  };

  return (
    <button
      disabled={disabled}
      onClick={disabled ? undefined : handleOnClick}
      className={`
        btn-3d py-12 px-6 relative transition-opacity duration-150
        ${
          disabled
            ? 'cursor-default opacity-100 pointer-events-none btn-3d-none'
            : 'cursor-pointer hover:opacity-75 hover:translate-y-1 active:translate-y-0'
        }
        ${className}
      `}
      {...props}
    >
      {children || (
        <span className={`text-2xl md:text-5xl text-center font-funnel-display font-semibold ${labelStyle}`}>
          {label}
        </span>
      )}
    </button>
  );
};

export default Button;
