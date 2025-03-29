const CardAboutInternational = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-7 mx-8">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1630929436231-91f4c6fe4884?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
          alt=""
          className="border-4 border-white rounded-tr-[80px] rounded-bl-4xl w-40 lg:w-60 lg:h-full h-56 object-cover scale-x-[-1] relative"
        />
        <div className="absolute bottom-0 right-24 lg:right-0 lg:-bottom-3 p-7 lg:p-8 rounded-full border-8 border-white bg-light-red z-10"></div>

        <div className="absolute -left-3 -top-2 w-40 lg:w-60 h-full -z-1 bottom-0 rounded-tr-[75px] rounded-bl-4xl bg-gradient-to-t from-dark-red to-light-red scale-x-[-1]"></div>

        <div className="border-4 border-light-red rounded-full p-1.5 w-32 rotate-90 absolute -left-24 bottom-1/2"></div>
      </div>

      <div className="relative lg:mt-10 ml-auto">
        <img
          src="https://images.unsplash.com/photo-1565970141926-c001afaf8577?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="border-4 border-white rounded-tl-[80px] rounded-br-4xl w-36 h-60 lg:w-48 lg:h-64 object-center object-cover scale-x-[-1] relative rotate-10 lg:rotate-0"
        />
        <div className="absolute -left-3 -top-2 w-36 h-60 rotate-10 lg:rotate-0 lg:w-48 lg:h-68 -z-1 bottom-0 rounded-tl-[80px] rounded-br-4xl bg-gradient-to-t from-dark-red to-light-red scale-x-[-1]"></div>
        <div className="border-4 border-dashed border-light-red rounded-full p-1.5 w-32 rotate-45 absolute -left-24 bottom-1/2 -z-10"></div>
        <div className="border-4 border-dashed border-light-red rounded-full p-1.5 w-32 -rotate-45 absolute -left-24 bottom-1/2 -z-10"></div>
      </div>
    </div>
  );
};

export default CardAboutInternational;
