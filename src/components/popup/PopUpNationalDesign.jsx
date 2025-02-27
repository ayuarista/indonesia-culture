import { useEffect, useState } from "react";
const PopUpNationalDesign = ({
  isOpen,
  closeModal,
  image,
  title,
  date,
  desc,
}) => {
  const [visible, setVisible] = useState(false);
  const [animationClass, setAnimationClass] = useState("scale-0 opacity-0");

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
      setAnimationClass("scale-100 opacity-100");
    } else {
      setVisible(false);
      setAnimationClass("scale-0 opacity-0");
    }
  }, [isOpen]);

  return (
    visible && (
      <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-30 transition-all duration-300 ease-in-out">
        <div className={`bg-white rounded-lg p-6 relative w-[90%] md:w-[800px] transform transition-all duration-500 ease-in-out ${animationClass}`}>
          <div>
            <img src={image} alt="" className="max-w-sm rounded-lg" />
          </div>
          <div className="">
            <div className="">
              <h1 className="bg-gradient-to-r from-dark-red to-light-red text-transparent bg-clip-text font-bold text-2xl">{title}
              </h1>
              <p className="text-gray-400 text-xs border-l border-gray-400 px-2">
                {date}
              </p>
            </div>
            <p className="font-medium text-black">
              {desc}
            </p>
          </div>
          <div className="absolute bottom-3 right-3">
            <button 
            onClick={closeModal}
            className="px-5 py-2 bg-light-red rounded-full">
              Close
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default PopUpNationalDesign;
