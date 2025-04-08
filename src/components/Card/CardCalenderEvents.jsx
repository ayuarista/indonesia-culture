import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineWatchLater } from "react-icons/md";
function CardCalenderEvents({img, title, place, date, cardDesc, daysLeft}) {
  return (
    <div className="relative rounded-2xl shadow-lg bg-white">
      <div className="relative">
        <img
          src={img}
          alt={title}
          className="w-full h-48 object-cover rounded-2xl"
        />
        <div className="absolute rounded-full px-3 py-2 bg-red-100 text-light-red font-semibold top-3 mx-2">
          <div className="flex items-center gap-1">
            <MdOutlineWatchLater className="text-red-light text-lg" />
            <p className="text-[13px]">{daysLeft}</p>
          </div>
        </div>
      </div>
      <div className="absolute rounded-2xl bg-white h-full top-28 bottom-0 shadow-lg">
        <div className="p-3">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-yellow-100 px-3 rounded-full py-1">
              <FaLocationDot className="text-yellow-500" />
              <p className="text-yellow-500 text-sm">{place}</p>
            </div>
            <div className="flex items-center gap-2 bg-blue-100 px-3 rounded-full py-1">
              <MdOutlineDateRange className="text-blue-400" />
              <p className="text-blue-400 text-sm">{date}</p>
            </div>
          </div>
          <div className="mx-2 mt-2">
            <h1 className="font-semibold text-black text-xl">
              {title}
            </h1>
            <p className="text-[13px] text-justify text-gray-400 mt-1">
              {cardDesc}
            </p>
            <div className="flex items-center gap-2 mt-1">
              <p className="text-light-red font-semibold text-sm">View More</p>
              <FaArrowRightLong className="text-light-red" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardCalenderEvents;
