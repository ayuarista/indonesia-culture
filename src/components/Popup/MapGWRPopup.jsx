import PopupDesign from "./PopupDesign";
import { DataInternationalGWR } from "../../data/card/DataInternationalGWR";
const MapGWRPopup = ({ isOpen, closeModal, selectedId }) => {
  const selectedItem = DataInternationalGWR.find((item) => item.id === selectedId);

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
          desc={selectedItem.info}
        />
      )}
      
    </>
  );
};

export default MapGWRPopup;
