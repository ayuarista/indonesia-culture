import { Link, useLocation } from "react-router-dom";

const NavLink = ({ path, nav }) => {
  const location = useLocation();


  function setNav() {
    if (location.pathname === path) {
      return "text-white rounded-full bg-gradient-to-r from-[#430304] to-[#A90809]";
    } else {
      return "border-transparent rounded-full text-black hover:bg-[#E7E7E7]";
    }
  }

  return (
    <div>
      <Link
        to={path}
        className={`text-[0.90rem] md:text-[0.95rem] xl:text-[1rem] font-medium rounded-box transition ease-in-out duration-300 px-4 py-1 ${setNav()}`}
      >
        {nav}
      </Link>
    </div>
  );
};

export default NavLink;
