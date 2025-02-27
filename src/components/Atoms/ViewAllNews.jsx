import { Link } from "react-router-dom";
const ViewAllNews = () => {
    return(
        <button className="px-5 py-2 rounded-full border  border-[#B20607] hover:bg-light-red hover:text-white text-[#B20607] ">
        <Link to="/article">
            <p className="font-semibold text-[14px]">View All News</p>
        </Link>
        </button>
    )
}

export default ViewAllNews;