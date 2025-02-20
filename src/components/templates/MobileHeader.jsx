import { CgMenuLeftAlt } from "react-icons/cg";
import { useState, useRef, useEffect } from "react";
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
        <header>

        </header>
    )
}

export default MobileHeader;