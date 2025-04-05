import HeaderInternationalAwards from "../Atoms/HeaderInternationalAwards";
import CardRRI from "../Card/CardRRI";
import CardTVRI from "../Card/CardTVRI";
import ABU from "/assets/awards/ABU.svg";

const AsiaAwards = () => {
    return(
        <div>
            <HeaderInternationalAwards
            image={ABU}
            title={"Asia-Pacific Broadcasting Union (ABU)"}
            desc={"The Asia-Pacific Broadcasting Union (ABU) is a regional broadcasting organization whose members are television and radio stations in the Asia-Pacific region. ABU holds annual awards to recognize the best works in the field of broadcasting, including the arts and culture category."}
            />
            <CardRRI/>
            <CardTVRI/>
        </div>
    )
}

export default AsiaAwards;