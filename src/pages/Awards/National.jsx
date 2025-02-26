import AboutMuriAwards from "../../components/Atoms/AboutMuriAwards";
import CardCulturalAwards from "../../components/Card/CardCulturalAwards";
import CardNational from "../../components/Card/CardNational";
import NationalAwards from "../../components/Molecules/NationalAwards";
import SortFilter from "../../components/Molecules/SortFilter";

const National = () => {
    return(
        <div className="pt-32">
            <NationalAwards/>
            <AboutMuriAwards/>
            <SortFilter/>
            <CardNational/>
        </div>
    )
}

export default National;