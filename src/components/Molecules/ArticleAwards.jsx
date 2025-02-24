import GridCardAward from "../Card/GridCardAward";
import DataGridAwards from "../data/Card/DataGridAward";
const AricleAwards = () => {
    return(
        <div className="grid grid-cols-1 grid-rows-2 gap-5">
            {DataGridAwards.map((item) =>{
                <GridCardAward
                    key= {item.id}
                    image = {item.image}
                    title = {item.title}
                    date = {item.date}
                />
            })}
        </div>
    )
}
export default AricleAwards;