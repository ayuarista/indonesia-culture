import AboutMuriAwards from "../../components/Atoms/AboutMuriAwards";
import NationalDropdownFilter from "../../components/filter/NationalDropdownFilter";
import NationalAwards from "../../components/Molecules/NationalAwards";

const National = () => {
    return(
        <div className="pt-32">
            <NationalAwards/>
            <AboutMuriAwards/>
            <NationalDropdownFilter/>
        </div>
    )
}

export default National;