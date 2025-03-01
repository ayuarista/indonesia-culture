import AboutUNESCO from "../Atoms/AboutUNESCO";
import CardUNESCO from "../Card/CardUNESCO";

const HomeUnesco = () => {
    return(
        <div className="flex items-center justify-center mt-20 flex-col lg:flex-row">
            <div className="w-full">
            <CardUNESCO/>
            </div>
            <div className="w-full">
                <AboutUNESCO/>
            </div>
        </div>
    )
}
export default HomeUnesco;