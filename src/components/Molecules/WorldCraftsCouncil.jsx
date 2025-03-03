import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import wcc from "/assets/awards/wcc.svg"
import AboutASEAN from "../Atoms/AboutASEAN";
import CardWCC from "../Card/CardWCC";
const WorldCraftsCouncil = () => {
    return(
        <>
        <HeaderInternationalAwards
        image={wcc}
        title={"World Crafts Council (WCC)"}
        desc={"The World Crafts Council (WCC) is an international organization focused on the development and preservation of traditional crafts worldwide. Indonesia has received several recognitions from the WCC for its contribution to preserving the art and culture of handicrafts."}
        />
              <div className="flex items-center justify-center">
        <div className="w-full">
          <AboutASEAN
            title={'Pekalongan as "World City of Batik" (2014)'}
            desc={
              'Pekalongan is recognized as the "World City of Batik" for its role in preserving, developing, and promoting batik. The city is a center for batik craftsmen, learning, and innovation at the national and international levels.'
            }
          />
        </div>
        <div className="w-1/2">
        <CardWCC />
        </div>
      </div>
        </>
    )
}

export default WorldCraftsCouncil;