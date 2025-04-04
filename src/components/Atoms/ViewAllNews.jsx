import { Link } from "react-router-dom";
const ViewAllNews = () => {
  return (
    <Link to="/article">
      <button className="px-5 py-2 rounded-full border border-[#B20607] transition-all duration-300 hover:bg-light-red hover:text-white text-[#B20607] hover:cursor-pointer">
        <p className="font-semibold text-[14px]">View All News</p>
      </button>
    </Link>
  );
};

export default ViewAllNews;
