import graphic from "/assets/awards/views.svg";

const CardNational = ({ image, date, views, title, sortOption }) => {
  return (
    <div className="flex flex-col relative">
      <div className="max-w-sm p-3 rounded-t-3xl border border-gray-300 shadow-sm">
        <img src={image} alt="" className="w-full object-cover rounded-2xl" />
        <div className="border-l-2 border-light-red ml-2 px-3 mt-3">
          <div className="flex items-center gap-3">
            <p className="text-gray-400 text-[13px]">{date}</p>
            <div className="flex items-center gap-2">
              <img src={graphic} alt="" />
              <p className="text-light-red font-medium text-sm">{views}</p>
            </div>
          </div>
          <div className="mt-2 font-medium text-black text-[15px] text-pretty">
            {title}
          </div>
        </div>
      </div>
          {sortOption === "Popular" && (
            <div className="absolute text-sm -left-2 rounded-br-full rounded-tr-full top-4 shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] px-4 bg-white text-[#B20607] font-semibold p-1.5">
              Most Viewed
            </div>
          )}
    </div>
  );
};

export default CardNational;
