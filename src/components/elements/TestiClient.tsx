const TestiClient = () => {
  return (
    <div>
      <div className="flex h-40 items-center justify-center rounded-lg border-t-8 border-red-600 bg-white p-6 text-left font-medium text-gray-500">
        <p>
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit eum nobis debitis, molestias autem sint animi
          exercitationem illo adipisci facere."
        </p>
      </div>
      <div className="mt-6 flex items-center justify-center gap-6">
        <div className="relative">
          <div className="flex h-16 w-16 items-center justify-center rounded-full border border-red-600">
            <img
              src="/img/testi_photo/jkw.png"
              alt="pak jokowi"
              width="56px"
              className="h-[56px] rounded-full object-cover"
            />
          </div>
          <div className="absolute -bottom-3 left-5 flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
            <img src="/img/icons_service/quote.svg" alt="quote_icon" />
          </div>
        </div>

        <div className="text-left">
          <h3 className="font-semibold text-slate-900">Joko Widodo</h3>
          <p className="text-xs text-slate-500">Predident RI ke-7</p>
        </div>
      </div>
    </div>
  );
};

export default TestiClient;
