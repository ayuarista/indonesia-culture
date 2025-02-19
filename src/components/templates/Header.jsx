import { Link } from "react-router-dom";
const Header = () => {
    <div className="w-full fixed bg-amber-50">
        <div className="flex justify-center items-center">
            <div>
            <h1 className="font-bold text-2xl">Culture</h1>
            </div>
            <nav>
                <ul className="flex items-center gap-3">
                   <Link to="">
                   <a href="" className="hover:bg-gray-400 p-3 py-2 text-black">Home</a>
                   </Link>
                   <Link to="">
                   <a href="" className="hover:bg-gray-400 p-3 py-2 text-black">Home</a>
                   </Link>
                   <Link to="">
                   <a href="" className="hover:bg-gray-400 p-3 py-2 text-black">Home</a>
                   </Link>
                </ul>
            </nav>
        </div>
    </div>
}

export default Header;