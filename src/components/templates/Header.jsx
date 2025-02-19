import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="w-full bg-amber-100 fixed p-4 text-black">
      <div className="flex justify-center items-center relative">
        <div className="absolute left-12">
          <h1 className="text-xl font-semibold">Culture</h1>
        </div>
        <nav>
          <ul className="flex items-center gap-3">
            <Link to="">
              <a href="" className="hover:bg-gray-400 p-3 py-2 text-black">
                Home
              </a>
            </Link>
            <Link to="">
              <a href="" className="hover:bg-gray-400 p-3 py-2 text-black">
                Home
              </a>
            </Link>
            <Link to="">
              <a href="" className="hover:bg-gray-400 p-3 py-2 text-black">
                Home
              </a>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
