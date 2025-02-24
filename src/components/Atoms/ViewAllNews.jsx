import { Link } from "react-router-dom";
const ViewAllNews = () => {
    return(
        <button className="px-5 py-2 rounded-full border  border-[#B20607]">
        <Link to="/article">
            <p className="text-[#B20607] font-semibold text-[14px]">View All News</p>
        </Link>
        </button>
    )
}

export default ViewAllNews;