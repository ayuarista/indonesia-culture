import { Link } from "react-router-dom";
const ViewAllNews = () => {
    return(
        <Link className="px-7 py-2 rounded-full" to="/article">
            <p className="text-[#B20607] font-semibold">View All News</p>
        </Link>
    )
}

export default ViewAllNews;