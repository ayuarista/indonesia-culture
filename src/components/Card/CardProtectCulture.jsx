const CardProtectCulture = (props) => {
  return (
      <div className="flex flex-col items-center">
        <div className="relative overflow-hidden rounded-t-full border-white border-[8px]">
          <img
            src={props.image}
            alt=""
            className="w-80 h-80 object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black/80 to-transparent p-5 flex items-end">
            <div className="flex flex-col">
              <h1 className="text-xl font-bold">{props.title}</h1>
              <p className="text-xs font-medium">
                {props.desc}
              </p>
            </div>
          </div>
        </div>
        <button className="px-5 py-1 font-medium cursor-pointer bg-white text-light-red rounded-full mt-4 border border-light-red shadow-md">
          {props.place}
        </button>
      </div>
  );
};

export default CardProtectCulture;
