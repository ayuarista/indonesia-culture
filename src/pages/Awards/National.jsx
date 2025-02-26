import AboutMuriAwards from "../../components/Atoms/AboutMuriAwards";
import CardCulturalAwards from "../../components/Card/CardCulturalAwards";
import NationalAwards from "../../components/Molecules/NationalAwards";
import SortFilter from "../../components/Molecules/SortFilter";

const National = () => {
    return(
        <div className="pt-32">
            <NationalAwards/>
            <AboutMuriAwards/>
            <SortFilter/>
        </div>
    )
}

export default National;