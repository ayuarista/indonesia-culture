import DataCardNational from "../../data/card/DataCardNational";
import PopupDesign from "./PopupDesign";
const MapNationalPopup = ({ isOpen, closeModal, selectedId }) => {
  const selectedItem = DataCardNational.find((item) => item.id === selectedId);

  return (
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
  );
};

export default MapNationalPopup;
