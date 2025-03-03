import PopupDesign from "./PopupDesign";
import { DataUNESCOHeritage } from "../../data/card/DataUNESCOHeritage";
const MapUnescoHeritagePopup = ({isOpen, closeModal, selectedId}) => {
    const selectedItem = DataUNESCOHeritage.find((item) => item.id === selectedId)
    console.log(selectedId)
    return(
        <>
        {selectedItem && (
            <PopupDesign
                isOpen={isOpen}
                closeModal={closeModal}
                key={selectedItem.id}
                image={selectedItem.image}
                date={selectedItem.date}
                title={selectedItem.title}
                desc={selectedItem.desc}
            />
        )}
        </>
    )
}

export default MapUnescoHeritagePopup;