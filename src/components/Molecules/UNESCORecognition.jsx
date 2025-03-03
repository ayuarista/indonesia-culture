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
      <h1 className="ml-16 font-semibold text-2xl text-light-red">
        Unesco Intangible
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-4 mx-16">
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
      <h1 className="font-semibold text-2xl text-light-red">
        Unesco Heritage
      </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-6 justify-center place-items-center">
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
