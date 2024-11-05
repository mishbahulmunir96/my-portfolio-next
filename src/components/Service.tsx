import ServiceCard from "./elements/ServiceCard";
import Title from "./elements/Title";
import SubTitle from "./elements/SubTitle";

const Service = () => {
  return (
    <section className="pt-20 lg:px-28 p-4">
      <div className="container m-auto lg:p-0">
        <div className="text-center">
          <Title>
            <span className="text-slate-900">My</span> Services
          </Title>
          <SubTitle>
            Providing trusted <br />
            web development services
          </SubTitle>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-5">
          <ServiceCard />
          <ServiceCard />
          <ServiceCard />
        </div>
      </div>
    </section>
  );
};

export default Service;
