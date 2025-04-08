import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";
function CardCalenderEvents() {
  return (
    <div className="relative rounded-2xl shadow-lg bg-white">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1609826704020-26abbd0879c3?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-48 object-cover rounded-2xl"
        />
        <div className="absolute rounded-full px-2 py-2 bg-gradient-to-l from-dark-red to-light-red text-white font-semibold top-3 mx-2">
          <p className="text-[13px]">Starts in 40 days</p>
        </div>
      </div>
      <div className="absolute rounded-2xl bg-white h-full top-28 bottom-0 shadow-lg">
        <div className="p-3">
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-red-100 px-3 rounded-full py-1">
              <FaLocationDot className="text-light-red" />
              <p className="text-light-red text-sm">Bali</p>
            </div>
            <div className="flex items-center gap-2">
              <MdOutlineDateRange className="text-light-red" />
              <p className="text-gray-400 text-sm">Maret 2024</p>
            </div>
          </div>
          <div className="mx-2 mt-1">
          <h1 className="font-semibold text-black text-xl">Hari Raya Nyepi</h1>
          <p className="text-[13px] text-justify text-gray-400 mt-1">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi ut
            et assumenda corrupti quibusdam nam natus.
          </p>
          <div className="flex items-center gap-2">
            <p className="text-light-red">View More</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CardCalenderEvents;
