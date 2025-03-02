import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards"
import unesco from "/assets/awards/unesco.svg"

const UNESCORecognition = () => {
    return(
        <>
        <HeaderInternationalAwards
        image={unesco}
        title={"UNESCO Recognition"}
        desc={"UNESCO (United Nations Educational, Scientific and Cultural Organization). This recognition shows that Indonesian culture has historical, artistic, and traditional values ​​that are important to the world."}
        />
        </>
    )
}

export default UNESCORecognition