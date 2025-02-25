import DataProtectCulture from "../data/card/DataProtectCulture";
import CardProtectCulture from "../Card/CardProtectCulture";
const ProtectCultureMap = () => {
  return (
    <div className="grid grid-cols-4 gap-3">
      {DataProtectCulture.map((item) => (
        <CardProtectCulture
          key={item.id}
          image={item.image}
          title={item.title}
          desc={item.desc}
          place={item.place}
        />
      ))}
    </div>
  );
};
export default ProtectCultureMap;
