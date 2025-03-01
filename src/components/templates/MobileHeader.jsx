import { CgMenuLeftAlt } from "react-icons/cg";
import { IoCloseOutline } from "react-icons/io5";
import { useState, useRef, useEffect } from "react";
import NavLink from "../Atoms/Navlink";

const MobileHeader = () => {
  const [activeNav, setNavActive] = useState(false);
  const menuRef = useRef(null);

  const toggleNav = () => setNavActive(!activeNav);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNavActive(false);
    }
  };

  useEffect(() => {
    if (activeNav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeNav]);

  return (
    <>
      <button
        className="text-[27px] cursor-pointer text-black bg-gray-200 p-1.5 rounded-full"
        onClick={toggleNav}
      >
        <CgMenuLeftAlt />
      </button>

      <div
        ref={menuRef}
        className={`fixed top-20 left-5 w-52 border rounded-tr-xl rounded-b-xl border-gray-300 bg-white shadow-lg transform transition-all duration-500 ease-in-out z-50
          ${activeNav ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}
        `}
      >
        <div className="p-4">
          <button
            className="text-[27px] text-black mb-4 cursor-pointer"
            onClick={toggleNav}
          >
            <IoCloseOutline />
          </button>

          <nav className="flex flex-col gap-3 text-black">
            <NavLink path="/" nav="Home" />
            <div>
              <h1 className="text-[0.90rem] font-medium mx-3 mb-3">Award</h1>
              <div className="ml-2 flex flex-col gap-3 border-l-2 px-2 border-gray-200">
                <NavLink path="/award/national" nav="National" />
                <NavLink path="/award/international" nav="International" />
              </div>
            </div>
            <NavLink path="/province" nav="Province" />
            <NavLink path="/quiz" nav="Quiz" />
            <NavLink path="/article" nav="Article" />
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
