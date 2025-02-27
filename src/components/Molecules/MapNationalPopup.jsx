import DataCardNational from "../../data/card/DataCardNational";
import PopUpNationalDesign from "../popup/PopUpNationalDesign";
const MapNationalPopup = ({ isOpen, closeModal, selectedId }) => {
  
    const selectedItem = DataCardNational.find((item) => item.id === selectedId);
  
    return (
      <>
        {selectedItem && (
          <PopUpNationalDesign
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
    );
  };

export default MapNationalPopup;
