import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import CardInternationalGWR from "../Card/CardInternationalGWR";
import { DataInternationalGWR } from "../../data/card/DataInternationalGWR";
const GuinnessWorldRecords = () => {
  return (
    <>
      <HeaderInternationalAwards
        image={
          "https://images.ctfassets.net/6fdt5dl491o1/2Isb53cMTsAPAO6TQA7Ain/b95baf6284a1bdc3dcba4f8c57436e34/GWR_RecordHolder-Strap-FullColour-TM-RGB_SMALL.png"
        }
        title={"Guinness World Records (GWR)"}
        desc={
          "Guinness World Records (GWR) is a globally recognized organization that documents and verifies world records in various fields, including human achievements, natural phenomena, and unique events."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-6 mx-16">
        {DataInternationalGWR.map((item) => (
          <CardInternationalGWR
            key={item.id}
            id={item.id}
            image={item.image}
            desc={item.desc}
            date={item.date}
            views={item.views}
            title={item.title}
          />
        ))}
      </div>
    </>
  );
};

export default GuinnessWorldRecords;
