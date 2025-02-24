const GridCardAward = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-4">
      <div className="relative max-w-sm overflow-hidden">
        <img
          src="https://indonesia.go.id/resources/album/keragaman-indonesia/1544520815_Kesenian_Tari_Barong.jpg"
          alt=""
          className="w-full h-44 object-cover rounded-lg rounded-tl-4xl"
        />
        <div className="absolute top-0 left-0 bg-white text-red-700 font-bold text-sm px-3 py-1 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-lg">
          January 8, 2025
        </div>
        <div className="relative">
          <p className="border-[#B20607] border-l-2 p-2 mx-3 mt-3 text-[13px] font-medium text-black">
            Talempong Pacik Performance by Most Women Indonesia
          </p>
        </div>
      </div>
    </div>
  );
};

export default GridCardAward;
