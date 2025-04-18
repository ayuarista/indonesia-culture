import { DataUNESCOHeritage } from "../../data/card/DataUNESCOHeritage";
import { DataUNESCOIntangible } from "../../data/card/DataUNESCOIntangible";
import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import CardUnescoHeritage from "../Card/CardUnescoHeritage";
import UNESCOIntangibleCard from "../Card/UNESCOIntangibleCard";
import unesco from "/assets/awards/unesco.svg";

const UNESCORecognition = () => {
  return (
    <>
      <HeaderInternationalAwards
        image={unesco}
        title={"UNESCO Recognition"}
        desc={
          "UNESCO (United Nations Educational, Scientific and Cultural Organization). This recognition shows that Indonesian culture has historical, artistic, and traditional values ​​that are important to the world."
        }
        
      />
      <div className="mt-10">
      <h1 className="ml-16 font-bold text-base md:text-xl lg:text-[23px] xl:text-[28px]  text-light-red">
      Intangible Cultural Heritage
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-5 place-items-center mx-8 lg:mx-16">
        {DataUNESCOIntangible.map((item) => (
          <UNESCOIntangibleCard
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            info={item.info}
            year={item.year}
          />
        ))}
      </div>
      <div className="mt-10">
      <h1 className="font-bold text-base md:text-xl lg:text-[23px] xl:text-[28px] text-light-red ml-16">
      World Heritage Sites
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-6 justify-center mx-8 lg:mx-16">
        {DataUNESCOHeritage.map((item) => (
          <CardUnescoHeritage
            key={item.id}
            id={item.id}
            image={item.image}
            title={item.title}
            info={item.info}
            year={item.year}
          />
        ))}
      </div>
    </>
  );
};

export default UNESCORecognition;
