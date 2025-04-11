import BtnGWRPopup from "../Atoms/BtnGWRPopup";
import graphic from "/assets/awards/views.svg";
const CardInternationalGWR = ({ image, title, date, desc, views, id }) => {
  return (
    <div className="relative max-w-sm xl:max-w-xl rounded-lg shadow-xl">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-52 xl:h-60 object-cover rounded-t-[21px]"
        />
        <div className="absolute bottom-0 left-0 right-0 h-44 xl:h-52 bg-gradient-to-t from-red-900 via-black/10 to-transparent p-5 flex items-end">
          <h1 className="absolute bottom-2 font-bold text-lg lg:text-xl xl:text-2xl text-white">
            {title}
          </h1>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <p className="text-gray-400 text-[13px] xl:text-[15px]">
           {date}
          </p>
          <div className="flex items-center gap-2">
            <img src={graphic} alt="" />
            <p className="text-light-red font-medium text-sm xl:text-[15px]">{views}</p>
          </div>
        </div>
        <p className="text-justify font-medium text-[15px] xl:text-[17px] text-black mt-2">
          {desc}
        </p>
        <BtnGWRPopup itemId={id}/>
      </div>
    </div>
  );
};

export default CardInternationalGWR;
