const CardProtectCulture = ({image, title, desc, place}) => {
  return (
      <div className="flex flex-col justify-center items-center">
        <div className="relative overflow-hidden rounded-t-full border-white border-[8px]">
          <img
            src={image}
            alt=""
            className="w-68 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-80 hover:h-96 transition-all duration-300 bg-gradient-to-t from-black to-transparent p-5 flex items-end">
            <div className="flex flex-col">
              <h1 className="text-md lg:text-xl font-bold">{title}</h1>
              <p className="text-xs/4 font-medium text-justify">
                {desc}
              </p>
            </div>
          </div>
        </div>
        <button className="px-5 py-1 font-medium cursor-pointer bg-white text-light-red rounded-full mt-4 border border-light-red shadow-md">
          {place}
        </button>
      </div>
  );
};

export default CardProtectCulture;
