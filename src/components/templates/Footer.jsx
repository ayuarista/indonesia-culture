import Gelombang from "/assets/footer/gelombang.png";
import Awan from "/assets/footer/awan.png";
import Wayang from "/assets/footer/wayang.png";
import footer from "/assets/footer/footer.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative">
      <img src={footer} alt="" className="absolute inset-0"/>
      <div className="absolute top-80 left-1/2 right-0">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="font-bold text-2xl text-white">PAGES</h1>
            <div className="flex flex-col gap-2 mt-5">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
              <Link to="/awards/national" className="text-white hover:underline">
                National Awards
              </Link>
              <Link to="/awards/international" className="text-white hover:underline">
                International Awards
              </Link>
              <Link to="/province" className="text-white hover:underline">
                Province
              </Link>
              <Link to="/features/calender-events" className="text-white hover:underline">
                Calender Events
              </Link>
              <Link to="/features/quiz" className="text-white hover:underline">
                Quiz
              </Link>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
