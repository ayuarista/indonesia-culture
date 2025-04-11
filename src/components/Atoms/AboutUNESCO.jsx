import ViewAllNews from "./ViewAllNews";
const AboutUNESCO = () => {
  return (
    <div className="text-black mt-28 lg:mt-0 mx-8 lg:mx-12">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-lg md:text-xl lg:text-xl xl:text-2xl bg-gradient-to-r from-0% from-[#490303] to-40% to-[#AF0808] text-transparent bg-clip-text">
         Indonesian culture recognized
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[#490303] from-0% to-[#AF0808] to-25% text-transparent bg-clip-text">
            by UNESCO?
        </h1>
      </div>
      <p className="font-medium mt-3 text-pretty text-justify max-w-[30rem] xl:max-w-[40rem] text-sm/relaxed md:text-[15px] lg:text-[15px]  xl:text-lg/relaxed">
      This recognition was given because the culture has historical, aesthetic and social value that is important for world civilization and needs to be preserved for future generations.
      </p>
      <div className="mt-5">
        <ViewAllNews 
        links={"/award/international"}
        />
      </div>
    </div>
  );
};

export default AboutUNESCO;
