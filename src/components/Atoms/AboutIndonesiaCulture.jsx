import ViewAllNews from "./ViewAllNews";
const AboutIndonesiaCulture = () => {
  return (
    <div className="text-black mt-32 lg:mt-0">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-0% from-[#490303] to-40% to-[#AF0808] text-transparent bg-clip-text">
          What do you know about
        </h1>
        <h1 className="font-bold text-4xl bg-gradient-to-r from-[#490303] from-0% to-[#AF0808] to-40% text-transparent bg-clip-text">
          Indonesian Culture?
        </h1>
      </div>
      <p className="font-medium mt-3 text-pretty text-justify max-w-[22rem] lg:max-w-[35rem]">
        Indonesian culture is a rich and diverse collection of traditions, arts,
        customs, and values shaped by the country’s long history and the
        influence of indigenous, Hindu-Buddhist, Islamic, and colonial cultures.
      </p>
      <div className="mt-5">
        <ViewAllNews />
      </div>
    </div>
  );
};

export default AboutIndonesiaCulture;
