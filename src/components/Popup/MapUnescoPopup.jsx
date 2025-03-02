import PopupDesign from "./PopupDesign";
import { DataUNESCOIntangible } from "../../data/card/DataUNESCOIntangible";
const MapUnescoPopup = ({isOpen, closeModal, selectedId}) => {
    const selectedItem = DataUNESCOIntangible.find((item) => item.id === selectedId);
    console.log("Selected ID:", selectedId);
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

export default MapUnescoPopup;