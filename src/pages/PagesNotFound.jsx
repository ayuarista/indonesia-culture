import { Link } from "react-router-dom";
import NotFoundImage from "/assets/404/notfound.png";
function PagesNotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-5">
      <img src={NotFoundImage} alt="" className="max-w-sm"/>
      <h2 className="text-3xl font-semibold mb-2 text-light-red">
        Oops! Page Not Found
      </h2>
      <p className="mb-4 text-gray-600">
      Sorry, the page you were looking for is not available.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-light-red text-white rounded-full hover:bg-red-900 transition-all duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PagesNotFound;
