import { FC, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

const Button: FC<ButtonProps> = ({ className = "rounded-full", children }) => {
  return (
    <button
      className={`cursor-pointer bg-red-600 lg:px-6 py-3 text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-red-700 hover:font-bold ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
