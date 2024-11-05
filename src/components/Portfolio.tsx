import PortofolioCard from "./elements/PortofolioCard";
import SubTitle from "./elements/SubTitle";
import Title from "./elements/Title";

const Portfolio = () => {
  return (
    <section className="w-full pt-20 lg:px-28 px-4">
      <div className="container m-auto mb-10 lg:p-0">
        <div className="mb-10">
          <Title>
            <span className="text-slate-900">My</span> Portfolio
          </Title>
          <SubTitle>My Recent Projects</SubTitle>
        </div>
        <div className="mb-8 grid grid-cols-3 gap-4">
          <PortofolioCard />
          <PortofolioCard />
          <PortofolioCard />
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
