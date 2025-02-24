import GridCardAward from "../Card/GridCardAward";
import DataGridAwards from "../data/Card/DataGridAward";
import CardAward from "../Card/CardAward";
const AricleAwards = () => {
  return (
    <div className="flex justify-center mt-20 mx-16 gap-5">
        <CardAward/>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
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
