import { Link } from "react-router-dom";
import NavLink from "../Atoms/Navlink";
import NavDropdown from "../Atoms/NavDropdown";
const Header = () => {
  return (
    <header className="w-full bg-white fixed p-5 text-black">
      <div className="flex justify-center items-center relative">
        <div className="absolute left-12">
          <h1 className="text-xl font-semibold">Culture</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-6">
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
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
