import AboutNationalAward from "../Atoms/AboutNationalAward"
import CardCulturalAwards from "../Card/CardCulturalAwards"

const NationalAwards = () => {
    return(
        <div className="flex justify-between flex-col lg:flex-row overflow-hidden lg:overflow-visible">
        <div className="w-full mx-8 lg:mx-16">
        <AboutNationalAward/>
        </div>
        <div className="w-full">
        <CardCulturalAwards/>
        </div>
       </div>
    )
}

export default NationalAwards;