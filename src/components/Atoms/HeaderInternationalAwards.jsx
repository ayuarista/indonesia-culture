const HeaderInternationalAwards = ({image, title, desc}) => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="flex items-center w-1/2">
        <div className="flex-1 border-t-2 border-red-700"></div>
        <img src={image} alt="" className="mx-5" />
        <div className="flex-1 border-t-2 border-red-700"></div>
      </div>
      <h2 className="mx-4 text-4xl font-bold bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="text-center text-[14px] whitespace-pre-wrap w-[80%] mt-3 font-medium text-black">
        {desc}
      </p>
    </div>
  );
};

export default HeaderInternationalAwards;
