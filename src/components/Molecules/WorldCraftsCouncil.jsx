import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import wcc from "/assets/awards/wcc.svg";
import AboutASEAN from "../Atoms/AboutASEAN";
import CardWCC from "../Card/CardWCC";
import GridCardWcc from "../Card/GridCardWcc";
import AboutWcc from "../Atoms/AboutWcc";
import ImageSliderWcc from "./ImageSliderWcc";
const WorldCraftsCouncil = () => {
  return (
    <>
      <HeaderInternationalAwards
        image={wcc}
        title={"World Crafts Council (WCC)"}
        desc={
          "The World Crafts Council (WCC) is an international organization focused on the development and preservation of traditional crafts worldwide. Indonesia has received several recognitions from the WCC for its contribution to preserving the art and culture of handicrafts."
        }
      />
      <div className=" flex-col-reverse lg:flex-row items-center justify-center mt-16 lg:mt-0">
        <div className="w-full mt-4 lg:mt-0">
          <AboutASEAN
            title={'Pekalongan as "World City of Batik" (2014)'}
            desc={
              'Pekalongan is recognized as the "World City of Batik" for its role in preserving, developing, and promoting batik. The city is a center for batik craftsmen, learning, and innovation at the national and international levels.'
            }
          />
        </div>
        <div className="lg:w-1/2 w-full">
          <CardWCC />
        </div>
      </div>
      <GridCardWcc/>
      <AboutWcc/>
      <ImageSliderWcc/>
    </>
  );
};

export default WorldCraftsCouncil;
