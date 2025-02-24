import AboutRekorMuri from "../Atoms/AboutRekorMuri";
import CardRekorMuri from "../Card/CardRekorMuri";

const RekorMuri = () => {
    return(
        <div className="flex items-center justify-between mt-32 flex-col lg:flex-row">
            <div className="w-[55%]">
            <AboutRekorMuri/>
            </div>
            <div className="w-[45%]">
            <CardRekorMuri/>
            </div>
        </div>
    )
}

export default RekorMuri;