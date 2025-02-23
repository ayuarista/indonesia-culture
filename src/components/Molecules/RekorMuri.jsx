import AboutRekorMuri from "../Atoms/AboutRekorMuri";
import CardRekorMuri from "../Card/CardRekorMuri";

const RekorMuri = () => {
    return(
        <div className="flex items-center justify-between mt-28">
            <div className="w-1/2">
            <AboutRekorMuri/>
            </div>
            <div className="w-1/2">
            <CardRekorMuri/>
            </div>
        </div>
    )
}

export default RekorMuri;