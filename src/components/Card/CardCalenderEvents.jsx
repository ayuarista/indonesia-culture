import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function CardCalenderEvents({
  id,
  img,
  title,
  place,
  date,
  cardDesc,
  daysLeft,
}) {
  const navigate = useNavigate();

  return (
    <div className="mb-32">
      <div className="relative rounded-2xl shadow-lg bg-white">
        <div className="relative">
          <img
            src={img}
            alt={title}
            className="w-full h-48 object-cover rounded-2xl object-bottom xl:object-center"
          />
          <div className="absolute rounded-full px-3 py-2 bg-red-100 text-light-red font-semibold top-3 mx-2">
            <div className="flex items-center gap-1">
              <MdOutlineWatchLater className="text-red-light text-lg xl:text-xl" />
              <p className="lg:text-[13px] xl:text-sm">{daysLeft}</p>
            </div>
          </div>
        </div>
        <div className="absolute rounded-2xl bg-white h-full top-32 bottom-0 shadow-lg">
          <div className="p-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-yellow-100 px-3 rounded-full py-1">
                <FaLocationDot className="text-yellow-500 lg:text-sm xl:text-base" />
                <p className="text-yellow-600 lg:text-[13px] xl:text-sm">{place}</p>
              </div>
              <div className="flex items-center gap-2 bg-blue-100 px-3 rounded-full py-1">
                <MdOutlineDateRange className="text-blue-400 lg:text-sm xl:text-base" />
                <p className="text-blue-400 lg:text-[13px] xl:text-sm">{date}</p>
              </div>
            </div>
            <div className="mx-2 mt-2">
              <h1 className="font-semibold text-black lg:text-[19px] xl:text-[22px]">{title}</h1>
              <p className="text-[13.5px]/relaxed xl:text-[15px]/relaxed text-justify text-gray-400 mt-1">
                {cardDesc}
              </p>
              <Link to={`/features/calender-events/${id}`}
                className="flex items-center gap-2 mt-1 absolute bottom-4 xl:bottom-5 hover:cursor-pointer hover:underline text-light-red font-semibold text-sm xl:text-[15.5px]"
              >
                View More
                <FaArrowRightLong className="text-light-red" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCalenderEvents;
