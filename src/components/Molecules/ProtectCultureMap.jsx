import CardProtectCulture from "../Card/CardProtectCulture";
import DataProtectCulture from "../../data/card/DataProtectCulture";
const ProtectCultureMap = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 lg:gap-3">
      {DataProtectCulture.map((item) => (
        <CardProtectCulture
          key={item.id}
          image={item.image}
          title={item.title}
          desc={item.desc}
          place={item.place}
          path={item.path}
        />
      ))}
    </div>
  );
};
export default ProtectCultureMap;
