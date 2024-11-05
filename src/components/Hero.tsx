import Image from "next/image";
import Button from "./elements/Button";

const Hero = () => {
  return (
    <section className="h-screen w-full bg-blue-100 lg:px-28 px-4">
      <div className="container mx-auto h-full gap-4 pt-24 lg:grid lg:grid-cols-2 lg:p-0">
        <div className="m-auto">
          <h4 className="text-lg font-medium text-slate-800">
            <span className="text-red-600">Hello</span> There
          </h4>
          <h1 className="mb-3 text-[44px] font-bold leading-none text-slate-900 sm:leading-tight lg:leading-snug">
            I'm <span className="text-red-600">Misbahul Munir</span> <br />
            Fullstack Web Developer
          </h1>
          <p className="mb-8 text-xl font-normal text-gray-500">
            I am a fullstack web developer focused on building modern,
            responsive, and functional web applications. Explore my portfolio to
            see the innovative solutions I offer.
          </p>

          <Button>Hire Me</Button>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute h-[400px] w-[400px] rounded-full bg-[#f22225] opacity-10"></div>
          <div className="absolute h-[350px] w-[350px] rounded-full bg-[#f22225] opacity-30"></div>
          <div className="absolute h-[300px] w-[300px] rounded-full bg-[#f22225]"></div>

          <div className="right-15 relative z-40">
            <Image
              src="/img/profile-img.svg"
              alt="photo of the dev"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
