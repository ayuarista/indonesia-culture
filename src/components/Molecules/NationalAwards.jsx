import AboutNationalAward from "../Atoms/AboutNationalAward"
import CardCulturalAwards from "../Card/CardCulturalAwards"

const NationalAwards = () => {
    return(
        <div className="flex justify-between flex-col lg:flex-row">
        <div className="w-full mx-10">
        <AboutNationalAward/>
        </div>
        <div className="w-full">
        <CardCulturalAwards/>
        </div>
       </div>
    )
}

export default NationalAwards;