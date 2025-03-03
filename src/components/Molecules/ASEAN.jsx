import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import asean from "/assets/awards/asean.svg"
const ASEAN = () => {
    return(
        <>
        <HeaderInternationalAwards
        image={asean}
        title={"ASEAN Cultural Awards"}
        desc={"Awards from ASEAN (Association of Southeast Asian Nations) are a form of appreciation given by ASEAN to individuals, organizations or member countries that have made extraordinary contributions in various fields, one of which is Culture."}
        />
        </>
    )
}

export default ASEAN;