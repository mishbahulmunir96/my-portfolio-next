import SubTitle from "./elements/SubTitle";
import TestiClient from "./elements/TestiClient";
import Title from "./elements/Title";

const Testimoni = () => {
  return (
    <section className="bg-gray-100 py-16 lg:px-28 px-4">
      <div className="container m-auto text-center lg:p-0">
        <Title>
          <span className="text-slate-900">Client</span> Testimonial
        </Title>
        <SubTitle>Feedback From Client</SubTitle>

        <div className="mt-8 grid grid-cols-2 gap-5">
          <TestiClient />
          <TestiClient />
        </div>
      </div>
    </section>
  );
};

export default Testimoni;
