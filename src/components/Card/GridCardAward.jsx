const GridCardAward = ({image, title, date}) => {
  return (
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-42 object-cover shadow-xl rounded-lg rounded-tl-4xl"
        />
        <div className="absolute top-0 left-0 bg-white text-red-700 font-semibold text-[13px] text-sm px-3 py-1 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-xl border-gray-300 border">
          {date}
        </div>
        <div className="relative">
          <p className="border-[#B20607] border-l-2 px-4 mt-3 text-sm font-semibold text-black">
          {title}
          </p>
        </div>
      </div>
  );
};
export default GridCardAward;
