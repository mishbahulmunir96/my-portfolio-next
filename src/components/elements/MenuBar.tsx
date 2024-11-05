"use client";

import { FC, useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";
import Menu from "./Menu";
import Button from "./Button";

interface MenuBarProps {
  showButton?: boolean;
  useHoverBg?: boolean;
}
const MenuBar: FC<MenuBarProps> = ({
  showButton = true,
  useHoverBg = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative my-5 lg:static lg:flex lg:items-center lg:justify-center">
      <div className="lg:hidden" onClick={toggleMenu}>
        {isOpen ? <HiX size={24} /> : <HiOutlineMenu size={24} />}
      </div>

      <ul
        className={`list-none flex-col ${
          isOpen ? "flex" : "hidden"
        } absolute right-0 top-11 gap-1 rounded-md  bg-opacity-50 p-3 lg:static lg:flex lg:flex-row lg:items-center lg:gap-0 lg:bg-opacity-100 lg:p-0`}
      >
        <Menu href={"/"} useHoverBg={useHoverBg}>
          Home
        </Menu>
        <Menu href={"/about-me"} useHoverBg={useHoverBg}>
          About
        </Menu>
        <Menu href={"/portfolio"} useHoverBg={useHoverBg}>
          Portfolio
        </Menu>
        <Menu href={"/servise"} useHoverBg={useHoverBg}>
          Service
        </Menu>
        <Menu href={"/blog"} useHoverBg={useHoverBg}>
          Blog
        </Menu>
        {showButton && (
          <li>
            <Button className="w-full rounded-md px-0">Contact Us</Button>
          </li>
        )}
      </ul>
    </div>
  );
};

export default MenuBar;
