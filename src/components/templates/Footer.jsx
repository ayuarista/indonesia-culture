import footer from "/assets/footer/footer.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="relative h-[90vh] md:h-[45vh] lg:h-screen xl:h-screen">
      <img src={footer} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute top-44 md:top-38 xl:top-96 left-10 md:left-0 right-0">
        <div className="flex flex-col md:flex-row items-start justify-center gap-x-20">
          <div>
            <h1 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white">PAGES</h1>
            <div className="flex flex-col gap-2 mt-5 text-sm md:text-base lg:text-base xl:text-xl">
              <Link to="/" className="text-white hover:underline">
                Home
              </Link>
              <Link
                to="/award/national"
                className="text-white hover:underline"
              >
                National Awards
              </Link>
              <Link
                to="/award/international"
                className="text-white hover:underline"
              >
                International Awards
              </Link>
              <Link to="/province" className="text-white hover:underline">
                Province
              </Link>
              <Link
                to="/features/calender-events"
                className="text-white hover:underline"
              >
                Calender Events
              </Link>
              <Link to="/features/quiz" className="text-white hover:underline">
                Quiz
              </Link>
              <Link to="/article" className="text-white hover:underline">
                Article
              </Link>
            </div>
          </div>
          <div className="mt-2 md:mt-0">
            <h1 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white">FEATURES</h1>
            <div className="flex flex-col gap-2 mt-5 text-sm md:text-base lg:text-base xl:text-xl">
              <Link
                to="/features/calender-events"
                className="text-white hover:underline"
              >
                Calender Events
              </Link>
              <Link to="/features/quiz" className="text-white hover:underline">
                Quiz
              </Link>
            </div>
          </div>
          <div className="mt-2 md:mt-0">
            <h1 className="font-bold text-xl md:text-2xl lg:text-2xl xl:text-3xl text-white">OUR TEAMS</h1>
            <div className="flex flex-col gap-2 mt-5 text-sm md:text-base lg:text-base xl:text-xl">
              <Link
                to="https://www.instagram.com/aayuaristaa/"
                target="_blank"
                className="text-white hover:underline"
              >
                Ayu Arista
              </Link>
              <Link 
              to="https://www.instagram.com/yudhisattria/" 
              target="_blank"
              className="text-white hover:underline">
                Yudhi Satria
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
