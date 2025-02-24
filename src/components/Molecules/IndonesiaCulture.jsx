import CardIndonesiaCulture from "../Card/CardIndonesiaCulture";
import AboutIndonesiaCulture from "../Atoms/AboutIndonesiaCulture";
const IndonesiaCulture = () => {
    return(
        <div className="flex justify-between flex-col lg:flex-row">
        <div className="w-full">
        <CardIndonesiaCulture/>
        </div>
        <div className="w-full mx-10">
        <AboutIndonesiaCulture/>
        </div>
       </div>
    )
}

export default IndonesiaCulture;