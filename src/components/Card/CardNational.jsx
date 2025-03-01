import BtnNationalPopup from "../Atoms/BtnNationalPopup";
import graphic from "/assets/awards/views.svg";

const CardNational = ({ image, date, views, title, sortOption, id }) => {
  return (
    <div className="flex flex-col relative mt-5">
      <div className="max-w-md lg:max-w-sm h-full p-4 rounded-t-3xl border border-gray-300 shadow-sm overflow-hidden">
      <div className="relative group bg-cover overflow-hidden">
        <img src={image} alt="" className="w-full object-cover rounded-2xl transition duration-300 ease-in-out group-hover:scale-110"/>
        </div>
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
          <BtnNationalPopup itemId={id}/>
    </div>
  );
};

export default CardNational;
