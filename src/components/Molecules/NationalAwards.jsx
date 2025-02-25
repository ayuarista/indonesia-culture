import AboutNationalAward from "../Atoms/AboutNationalAward"
import CardCulturalAwards from "../Card/CardCulturalAwards"

const NationalAwards = () => {
    return(
        <div className="flex items-center w-full">
            <AboutNationalAward/>
            <CardCulturalAwards/>
        </div>
    )
}

export default NationalAwards;