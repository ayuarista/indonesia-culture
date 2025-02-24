import ViewAllNews from "./ViewAllNews";
const AboutUNESCO = () => {
  return (
    <div className="text-black">
      <div className="flex flex-col gap-1">
        <h1 className="font-bold text-2xl bg-gradient-to-r from-0% from-[#490303] to-40% to-[#AF0808] text-transparent bg-clip-text">
         Indonesian culture recognized
        </h1>
        <h1 className="font-bold text-4xl bg-gradient-to-r from-[#490303] from-0% to-[#AF0808] to-40% text-transparent bg-clip-text">
            by UNESCO?
        </h1>
      </div>
      <p className="font-medium mt-3 text-pretty text-justify">
      This recognition was given because the culture has historical, aesthetic and social value that is important for world civilization and needs to be preserved for future generations.
      </p>
      <div className="mt-5">
        <ViewAllNews />
      </div>
    </div>
  );
};

export default AboutUNESCO;
