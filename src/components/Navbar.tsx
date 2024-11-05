import Logo from "./elements/Logo";
import MenuBar from "./elements/MenuBar";

const Navbar = () => {
  return (
    <header className="fixed z-50 flex h-16 w-full px-4 items-center bg-white lg:px-28">
      <nav className="container m-auto flex h-full w-full items-center justify-between lg:p-0">
        <Logo />
        <MenuBar />
      </nav>
    </header>
  );
};

export default Navbar;
