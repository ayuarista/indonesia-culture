import ViewAllNews from "./ViewAllNews";
import muri from "/assets/home/muri.svg";
const AboutRekorMuri = () => {
  return (
    <div className="mx-8 lg:mx-16 mt-40 lg:mt-0">
      <div className="flex items-center gap-3">
        <div>
          <h1 className="bg-gradient-to-r font-bold text-3xl from-0% from-[#490303] to-60% to-[#AF0808] text-transparent bg-clip-text">
            Indonesian Muri Record
          </h1>
        </div>
        <img src={muri} alt="" className="w-36 lg:w-28" />
      </div>
      <div className="mt-3 text-pretty">
        <p className="font-medium text-justify md:max-w-[70%] lg:max-w-full text-black">
          The Indonesia World Records Museum is a museum located in Semarang,
          Central Java, Indonesia. A collection of Indonesian records is
          presented in this museum.
        </p>
      </div>
      <div className="mt-5">
        <ViewAllNews 
        links={"/award/national"}
        />
      </div>
    </div>
  );
};
export default AboutRekorMuri;
