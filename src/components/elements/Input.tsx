import { FC } from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  style?: string;
}

const Input: FC<InputProps> = ({ type, placeholder, name, style }) => {
  return (
    <input
      type={type}
      className={`placeholder: w-full border-b-2 border-slate-300 px-3 py-5 text-sm text-slate-700 opacity-50 ${style}`}
      placeholder={placeholder}
      name={name}
    />
  );
};

export default Input;
