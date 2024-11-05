import Button from "./elements/Button";
import SubTitle from "./elements/SubTitle";
import Title from "./elements/Title";

const AboutMe = () => {
  return (
    <section className="flex w-full items-center py-16 lg:px-28 px-4">
      <div className="container m-auto grid grid-cols-2 gap-4 lg:p-0">
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="row-span-2">
            <img
              src="/img/about_me1.jpg"
              alt="potoku"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <img
              src="/img/about_me2.png"
              alt="image"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <img
              src="/img/about_me3.png"
              alt="image"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="my-auto h-full rounded-md">
          <Title>
            <span className="text-slate-900">About</span> Me
          </Title>
          <SubTitle>
            I Enjoy Solving Problems <br /> With Scalable Solutions
          </SubTitle>
          <div className="mb-5 text-sm font-normal text-gray-500">
            <p className="mb-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              hic quos numquam vero aperiam voluptatum non rem ad? Consequuntur
              reprehenderit deleniti veritatis a beatae officia!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              facilis dignissimos eos cumque aliquam explicabo!
            </p>
          </div>
          <Button>Download CV</Button>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
