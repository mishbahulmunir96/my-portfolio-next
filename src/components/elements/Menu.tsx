import { FC } from "react";

interface MenuProps {
  href: string;
  children: string;
  useHoverBg?: boolean;
}

const Menu: FC<MenuProps> = ({ href, children, useHoverBg = true }) => {
  return (
    <li>
      <a
        href={href}
        className={`rounded-lg px-6 py-3 font-normal text-gray-600 no-underline transition-all duration-300 ease-in-out hover:font-bold lg:hover:text-white ${
          useHoverBg ? "lg:hover:bg-red-600 " : ""
        }`}
      >
        {children}
      </a>
    </li>
  );
};

export default Menu;
