import muri from "/assets/home/muri.svg";
const AboutMuriAwards = () => {
  return (
    <div className="mt-24 lg:mt-0 flex flex-col items-center justify-center my-6">
      <div className="flex items-center w-[80%] lg:w-1/2">
        <div className="flex-1 border-t-2 border-red-700"></div>
        <img src={muri} alt=""  className="mx-5"/>
        <div className="flex-1 border-t-2 border-red-700"></div>
      </div>
      <h2 className="mx-4 text-3xl lg:text-4xl font-bold text-center bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent">
        Museum of Cultural Records - World Indonesia
      </h2>
      <p className="text-center text-sm/5 text-pretty w-[80%] mt-3 font-medium text-black">
        "The MURI Record shows the vibrant diversity of culture and various
        natural potentials of Indonesia, as well as the passion of the nation's
        children in carving out the best ideas and works of achievement in their
        respective fields of expertise. Ability is part of the fortress of our
        nationalism in competing in the current era of globalization"
      </p>
    </div>
  );
};

export default AboutMuriAwards;
