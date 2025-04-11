import GridCardAward from "../Card/GridCardAward";
import CardAward from "../Card/CardAward";
import DataGridAwards from "../../data/card/DataGridAward";
const AricleAwards = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-20 xl:mt-24 mx-8 lg:mx-16 gap-6">
        <CardAward/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7 place-items-center">
        {DataGridAwards.map((item) => (
          <GridCardAward
            key={item.id}
            image={item.image}
            title={item.title}
            date={item.date}
          />
        ))}
      </div>
    </div>
  );
};
export default AricleAwards;
