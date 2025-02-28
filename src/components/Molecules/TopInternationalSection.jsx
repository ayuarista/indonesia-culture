import AboutInternational from "../Atoms/AboutInternational"
import CardAboutInternational from "../Card/CardAboutInternational"

const TopInternationalSection = () => {
    return(
        <div className="flex items-center">
            <CardAboutInternational/>
            <AboutInternational/>
        </div>
    )
}

export default TopInternationalSection