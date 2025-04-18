import ViewAllNews from "./ViewAllNews";
const AboutIndonesiaCulture = () => {
  return (
    <div className="text-black mt-32 md:mt-20 lg:mt-0">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-lg md:text-xl lg:text-xl xl:text-2xl bg-gradient-to-r from-0% from-[#490303] to-40% to-[#AF0808] text-transparent bg-clip-text">
          What do you know about
        </h1>
        <h1 className="font-bold text-2xl md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-[#490303] from-0% to-[#AF0808] to-40% text-transparent bg-clip-text">
          Indonesian Culture?
        </h1>
      </div>
      <p className="font-medium mt-3 text-pretty text-justify max-w-[22rem] md:max-w-[35rem] lg:max-w-[35rem] xl:max-w-[50rem] text-sm/relaxed md:text-[15px] lg:text-[15px]  xl:text-lg/relaxed">
        Indonesian culture is a rich and diverse collection of traditions, arts,
        customs, and values shaped by the country’s long history and the
        influence of indigenous, Hindu-Buddhist, Islamic, and colonial cultures.
      </p>
      <div className="mt-5">
        <ViewAllNews 
        links={"/award/national"}
        />
      </div>
    </div>
  );
};

export default AboutIndonesiaCulture;
