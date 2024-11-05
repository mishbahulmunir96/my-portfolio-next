const ServiceCard = () => {
  return (
    <div className="container m-auto rounded-md px-3 pb-8 pt-12 shadow-md">
      <div className="mb-4">
        <img src="/img/icons_service/icon1.png" alt="icon" className="w-12" />
      </div>
      <h2 className="mb-4 text-xl font-medium text-slate-900">
        Web Development
      </h2>
      <p className="mb-7 text-sm text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
        praesentium vel maiores impedit sit consequatur cum, adipisci quod
        consectetur. Culpa?
      </p>
      <a href="" className="text-red-600">
        Read More
      </a>
    </div>
  );
};

export default ServiceCard;
