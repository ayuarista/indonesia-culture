import AboutGWR from "../Atoms/AboutGWR";
import CardGWR from "../Card/CardGWR";
import DataCardGWR from "../../data/card/DataCardGWR";
const HomeGWR = () => {
  return (
    <div className="flex flex-col items-center justify-between mt-24">
        <AboutGWR/>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-8 lg:mx-16 mx-8 place-items-center">
        {DataCardGWR.map((item) => (
          <CardGWR
            key={item.id}
            image={item.image}
            title={item.title}
            year={item.year}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};

export default HomeGWR;
