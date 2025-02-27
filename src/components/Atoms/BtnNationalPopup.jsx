import PopUpNationalDesign from "../popup/PopUpNationalDesign";
import { useModal } from "./PopupLogic";

const BtnNationalPopup = () => {
    const {isOpen, openModal, closeModal} = useModal();
    return(
        <div>
            <button onClick={openModal}
            className="bg-light-red text-white w-full p-2 rounded-md"
            >
                Discover More
            </button>
            <PopUpNationalDesign isOpen={isOpen} closeModal={closeModal}/>
        </div>
    )
}

export default BtnNationalPopup;