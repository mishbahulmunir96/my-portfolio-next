import { FC } from "react";
import { ReactNode } from "react";
interface SocialProps {
  href: string;
  children: ReactNode;
}
const SocialMedia: FC<SocialProps> = ({ href, children }) => {
  return (
    <div className="h-14 w-14 rounded-full bg-red-600">
      <a href={href} className="flex h-full w-full items-center justify-center">
        {children}
      </a>
    </div>
  );
};

export default SocialMedia;
