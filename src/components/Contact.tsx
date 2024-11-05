import Button from "./elements/Button";
import Input from "./elements/Input";
import SubTitle from "./elements/SubTitle";
import Title from "./elements/Title";

const Contact = () => {
  return (
    <div className="py-16 lg:px-28 px-4">
      <div className="container m-auto grid grid-cols-2 gap-5 lg:p-0">
        <div className="w-[450px]">
          <img src="/img/contact-img.png" alt="gambar biasa mah" />
        </div>
        <div className="pt-8">
          <Title>
            <span className="text-slate-900">Get In</span> Touch
          </Title>
          <SubTitle>Feel Free to Contact</SubTitle>

          <form action="" className="span mt-8 grid grid-cols-2 gap-4">
            <Input name="name" type="text" placeholder="Enter Your Name" />
            <Input name="email" type="email" placeholder="Enter Your Email" />
            <Input
              name="phone"
              type="tel"
              placeholder="Enter Your Phone Number"
            />
            <Input name="subject" type="text" placeholder="Enter Subject" />
            <Input
              name="message"
              type="text"
              placeholder="Enter Your Message"
              style="col-span-2"
            />

            <Button className="w-3/4 rounded-full">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
