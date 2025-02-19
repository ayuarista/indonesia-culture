import { Link } from "react-router-dom";
import NavLink from "../Atoms/Navlink";
const Header = () => {
  return (
    <header className="w-full bg-white fixed p-4 text-black">
      <div className="flex justify-center items-center relative">
        <div className="absolute left-12">
          <h1 className="text-xl font-semibold">Culture</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-3">
            <NavLink path="/" nav="Home" />
            <NavLink path="/destination" nav="Destination" />
            <NavLink path="/staycations" nav="Staycations" />
            <NavLink path="/food-drinks" nav="Foods & Drinks" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
