import { FC, ReactNode } from "react";

interface SubTitleProps {
  children: ReactNode;
}
const SubTitle: FC<SubTitleProps> = ({ children }) => {
  return (
    <>
      <h1 className="text-4xl font-medium text-slate-900">{children}</h1>
    </>
  );
};

export default SubTitle;
