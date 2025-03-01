import AboutRekorMuri from "../Atoms/AboutRekorMuri";
import CardRekorMuri from "../Card/CardRekorMuri";

const RekorMuri = () => {
    return(
        <div className="flex items-center justify-between mt-32 flex-col-reverse lg:flex-row">
            <div className="w-full">
            <AboutRekorMuri/>
            </div>
            <div className="w-full">
            <CardRekorMuri/>
            </div>
        </div>
    )
}

export default RekorMuri;