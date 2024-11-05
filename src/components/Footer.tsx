import MenuBar from "./elements/MenuBar";
import SocialMedia from "./elements/SocialMedia";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex h-72 w-full items-center justify-center bg-slate-950 lg:px-28 px-4">
      <div className="container m-auto flex flex-col items-center justify-center border-b border-slate-400 lg:p-0">
        <h1 className="my-5 text-2xl font-bold text-red-600">
          Port<span className="text-white">folio</span>
        </h1>

        <MenuBar showButton={false} useHoverBg={false} />

        <div className="my-5 flex justify-around gap-7">
          <SocialMedia href="https://github.com/mishbahulmunir96">
            <FaGithub size="30px" color="white" />
          </SocialMedia>
          <SocialMedia href="https://www.linkedin.com/in/mishbahul-munir/">
            <SlSocialLinkedin size="30px" color="white" />
          </SocialMedia>
          <SocialMedia href="https://www.instagram.com/misbachul.munirch/">
            <SlSocialInstagram size="30px" color="white" />
          </SocialMedia>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
