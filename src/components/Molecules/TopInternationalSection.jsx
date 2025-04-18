import AboutInternational from "../Atoms/AboutInternational"
import CardAboutInternational from "../Card/CardAboutInternational"

const TopInternationalSection = () => {
    return(
        <div className="flex flex-col lg:flex-row items-center xl:justify-center mx-8 lg:mx-16">
            <div className="w-full">
            <CardAboutInternational/>
            </div>
            <div className="w-full">
            <AboutInternational/>
            </div>
        </div>
    )
}

export default TopInternationalSection