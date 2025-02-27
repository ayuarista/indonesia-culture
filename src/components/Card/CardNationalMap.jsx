import DataCardNational from "../../data/card/DataCardNational"
import CardNational from "./CardNational"
const CardNationalMap = () => {
    return(
        <div className="grid grid-cols-3">
            {DataCardNational.map((item) => (
                <CardNational
                key={item.id}
                image={item.image}
                date={item.date}
                views={item.views}
                title={item.title}
                />
            ))}
        </div>
    )
}
export default CardNationalMap;