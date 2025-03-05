const CardAward = () => {
    return (
      <div className="relative w-full h-80 lg:w-[39rem] lg:h-[29.5rem] rounded-lg overflow-hidden shadow-lg">
        <img
          src="https://muri.org/assets/website/images/record/12084-1736936007.png"
          alt="Award"
          className="w-full h-full object-cover rounded-tl-4xl"
        />
        
        <div className="absolute top-0 left-0 border border-gray-300 bg-white text-red-700 font-bold text-sm px-3 py-1 rounded-tl-4xl rounded-tr-4xl rounded-br-4xl shadow-lg">
          January 8, 2025
        </div>
  
        <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-red-700 via-black/10 to-transparent p-5 flex items-end">
          <p className="text-white font-semibold text-[15px]/6 text-justify border-l-2 p-3 border-white">
            The First Person to Translate the Deuterocanonical Books and Part of
            the New Testament into Macapat
          </p>
        </div>
      </div>
    );
  };
  
  export default CardAward;
  