import AboutMuriAwards from "../../components/Atoms/AboutMuriAwards";
import CardCulturalAwards from "../../components/Card/CardCulturalAwards";
import NationalAwards from "../../components/Molecules/NationalAwards";

const National = () => {
    return(
        <div className="pt-32">
            <NationalAwards/>
            <AboutMuriAwards/>
        </div>
    )
}

export default National;