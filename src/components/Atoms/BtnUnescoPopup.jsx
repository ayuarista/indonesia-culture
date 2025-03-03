import { useModal } from "./PopupLogic";
import MapUnescoPopup from "../Popup/MapUnescoPopup";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

const BtnUnescoPopup = ({ itemId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isOpen, openModal, closeModal } = useModal();
  const [selectedId, setSelectedId] = useState(null);

  const handleOpen = () => {
    setSelectedId(itemId);
    openModal();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="mt-3">
      <button
        onClick={handleOpen}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`relative w-full rounded-full flex items-center justify-between px-4 py-2 cursor-pointer overflow-hidden transition-all duration-500 ${
          isHovered
            ? "bg-light-red"
            : "bg-gradient-to-r from-light-red to to-red-400"
        }`}
      >
        <span
          className={`p-1.5 rounded-full transition-all duration-1000 ${
            isHovered ? "translate-x-80" : "-translate-x-0 bg-white"
          }`}
        >
          <IoIosArrowForward
            className={`transition-all duration-500 ${
              isHovered ? "text-light-red" : "text-light-red"
            }`}
          />
        </span>
      </button>
      <MapUnescoPopup
        isOpen={isOpen}
        closeModal={closeModal}
        selectedId={selectedId}
      />
    </div>
  );
};

export default BtnUnescoPopup;
