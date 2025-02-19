import { Link, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

// NavLink.propTypes = {
//   path: PropTypes.isRequired,
//   nav: PropTypes.isRequired,
// };

const NavLink = ({ props }) => {
  const location = useLocation();

  function setNav() {
    if (location.pathname === path) {
      return "text-white bg-black dark:bg-white";
    } else {
      return "border-transparent text-slate-500 dark:text-slate-200 hover:bg-gray-200 dark:hover:bg-gray-200/20";
    }
  }

  return (
    <div>
      <Link
        to={props.path}
        className={`text-[0.90rem] font-medium rounded-box transition ease-in-out duration-300 px-3 py-1 ${setNav()}`}
      >
        {props.nav}
      </Link>
    </div>
  );
};

export default NavLink;
