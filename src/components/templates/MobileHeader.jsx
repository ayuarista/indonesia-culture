import { CgMenuLeftAlt } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
import NavDropdown from "../Atoms/NavDropdown";
import NavLink from "../Atoms/Navlink";
const MobileHeader = () => {
    const [activeNav, setNavActive] = useState(false);
    const menuRef = useRef(null);

    const toggleNav = () => setNavActive(!activeNav);

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setNavActive(false);
        }
    }

    useEffect(() => {
        if (activeNav) {
            document.addEventListener("mousedown", handleClickOutside);
        }else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [activeNav])

    return(
        <>
        <button className="text-[27px] text-black" onClick={toggleNav}>
            <CgMenuLeftAlt />
        </button>
        <div className="pt-24 p-4 flex flex-col gap-5">
        <NavLink path="/" nav="Home" />
            <NavDropdown
              navLink="Award"
              links={[
                { path: "/award/national", label: "National" },
                { path: "/award/international", label: "International" },
              ]}
            />
            <NavLink path="/province" nav="Province" />
            <NavLink path="/quiz" nav="Quiz" />
            <NavLink path="/article" nav="Article" />
        </div>
        </>
    )
}

export default MobileHeader;