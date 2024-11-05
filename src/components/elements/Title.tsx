import { ReactNode, FC } from "react";

interface TitleProps {
  children: ReactNode;
}

const Title: FC<TitleProps> = ({ children }) => {
  return <h2 className="text-lg font-medium text-red-600">{children}</h2>;
};

export default Title;
