import { useModal } from "./PopupLogic";
import MapNationalPopup from "../Molecules/MapNationalPopup";
import { useState } from "react";

const BtnNationalPopup = ({ itemId }) => {
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = () => {
    setSelectedId(itemId);  // Simpan ID sebelum membuka popup
    openModal();
  };

  return (
    <div className="mt-2">
      <button
        onClick={handleOpen}
        className="bg-light-red cursor-pointer text-white w-full p-2 rounded-md"
      >
        Discover More
      </button>
      
      {/* Pastikan MapNationalPopup menerima ID yang benar */}
      <MapNationalPopup isOpen={isOpen} closeModal={closeModal} selectedId={selectedId} />
    </div>
  );
};

export default BtnNationalPopup;
