import { Link } from "react-router-dom";
import NavLink from "../Atoms/Navlink";
import MobileHeader from "./MobileHeader";
import NavDropdown from "../Atoms/NavDropdown";
import NavProvince from "../Organisms/NavProvince";
const Header = () => {
  return (
    <header className="w-full bg-white fixed p-5 text-black z-50">
      <div className="flex justify-between lg:justify-center w-full items-center">
        <div className="absolute left-20 lg:mb-0 lg:left-12">
          <h1 className="text-xl font-semibold">Culture</h1>
        </div>
        <div className="block lg:hidden">
          <MobileHeader/>
        </div>
        <nav className="hidden md:hidden lg:block xl:block">
          <ul className="flex items-center gap-6">
            <NavLink path="/" nav="Home" />
            <NavDropdown
              navLink="Awards"
              links={[
                { path: "/award/national", label: "National" },
                { path: "/award/international", label: "International" },
              ]}
            />
            <NavProvince nav="Province" path={"/province"}
            links={[
              {path: "/province/kalimantan"},
              {path: "/province/sumatra"},
              {path: "/province/java"},
              {path: "/province/sulawesi"},
              {path: "/province/bali-nusa-tenggara"},
              {path: "/province/maluku-papua"},
            ]}
            />
            <NavDropdown
              navLink="Features"
              links={[
                { path: "/features/calender-events", label: "Calender Events" },
                { path: "/features/quiz", label: "Quiz" },
              ]}
            />
            <NavLink path="/article" nav="Article" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
