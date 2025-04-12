const HeaderInternationalAwards = ({image, title, desc}) => {
  return (
    <div className="flex flex-col items-center justify-center my-6">
      <div className="flex items-center w-full lg:w-[80%]">
        <div className="flex-1 border-t-2 border-red-700"></div>
        <img src={image} alt="" className="mx-5 w-[60%] lg:w-1/3" />
        <div className="flex-1 border-t-2 border-red-700"></div>
      </div>
      <h2 className="mx-4 mt-3 text-2xl md:text-3xl lg:text-[34px] xl:text-[40px] font-bold bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent text-center">
        {title}
      </h2>
      <p className="text-center text-[13px] md:text-sm lg:text-[15px] xl:text-lg whitespace-pre-wrap text-pretty w-[70%] xl:w-[50%] mt-3 font-medium text-black">
        {desc}
      </p>
    </div>
  );
};

export default HeaderInternationalAwards;
