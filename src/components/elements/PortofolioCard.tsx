const PortofolioCard = () => {
  return (
    <div>
      <div>
        <img src="/img/porto1.png" alt="" />
      </div>
      <div className="m-4">
        <h3 className="mb-1 text-sm font-semibold text-red-600">
          Lorem, ipsum dolor.
        </h3>
        <h3 className="mb-2 text-lg font-semibold text-slate-800">
          Lorem ipsum dolor sit amet, consectetur adipisicing.
        </h3>
        <p className="mb-3 text-sm font-normal text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam minus
          sit eveniet amet.
        </p>
        <a href="" className="text-xs font-semibold text-red-600">
          View Site{" "}
        </a>
      </div>
    </div>
  );
};

export default PortofolioCard;
