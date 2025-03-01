import { useEffect, useState } from "react";

const PopupDesign = ({
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
      setTimeout(() => setAnimationClass("scale-100 opacity-100"), 10);
    } else {
      setAnimationClass("scale-0 opacity-0");
      setTimeout(() => setVisible(false), 500);
    }
  }, [isOpen]);

  return (
    visible && (
      <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50 transition-all duration-300 ease-in-out">
        <div
          className={`bg-white rounded-lg p-6 relative w-[80%] transform transition-all duration-500 ease-in-out ${animationClass}`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <img
                src={image}
                alt=""
                className="max-w-sm object-cover rounded-lg"
              />
            </div>
            <div>
              <div>
                <h1 className="bg-gradient-to-r from-0% to-40% from-dark-red to-light-red text-transparent bg-clip-text font-bold text-2xl md:text-xl text-justify">
                  {title}
                </h1>
                <p className="text-gray-400 text-xs border-l border-gray-400 px-2 mt-1">
                  {date}
                </p>
              </div>
              <p className="font-medium text-black mt-5 text-justify">{desc}</p>
            </div>
            <div className="absolute bottom-4 right-3 text-sm">
              <button
                onClick={closeModal}
                className="px-5 cursor-pointer py-2 hover:bg-light-red/80 bg-light-red rounded-full"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default PopupDesign;
