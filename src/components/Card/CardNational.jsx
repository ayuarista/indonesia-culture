import views from "/assets/awards/views.svg";
const CardNational = ({image, date, views, title}) => {
  return (
    <div className="flex flex-col">
      <div className="max-w-sm p-3 rounded-t-3xl border border-gray-300 shadow-sm">
        <img src={image} alt="" className="w-full object-cover rounded-2xl" />
        <div className="border-l-2 border-light-red ml-2 px-3 mt-3">
          <div className="flex items-center gap-3">
            <p className="text-gray-400 text-[13px]">{date}</p>
            <div className="flex items-center gap-2">
              <img src={views} alt="" />
              <p className="text-light-red font-medium text-sm">{views}</p>
            </div>
          </div>
          <div className="mt-2 font-medium text-black text-[15px] text-pretty">
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNational;
