const GridCardAward = (props) => {
  return (
      <div className="relative max-w-sm overflow-hidden">
        <img
          src={props.image}
          alt={props.title}
          className="w-full h-44 object-cover rounded-lg rounded-tl-4xl"
        />
        <div className="absolute top-0 left-0 bg-white text-red-700 font-bold text-sm px-3 py-1 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-lg">
          {props.date}
        </div>
        <div className="relative">
          <p className="border-[#B20607] border-l-2 p-2 mx-3 mt-3 text-[13px] font-medium text-black">
          {props.title}
          </p>
        </div>
      </div>
  );
};
export default GridCardAward;
