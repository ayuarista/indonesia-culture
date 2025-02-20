import Gelombang from "/assets/footer/gelombang.png";
import Awan from "/assets/footer/awan.png";
import Wayang from "/assets/footer/wayang.png";
import footer from "/assets/footer/footer.svg";
import { Link } from "react-router-dom";
const Footer = () => {
  // bg-gradient-to-t from-[#430304] to-[#B20607]
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center items-center"
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <div className="flex-col">
      <div className="flex justify-between gap-24">
        <ul className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">PAGES</h1>
          <li>
            <Link to="/" className="font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link to="/award/national" className="font-medium">
              National
            </Link>
          </li>
          <li>
            <Link to="/award/international" className="font-medium">
              International
            </Link>
          </li>
          <li>
            <Link to="/province" className="font-medium">
              Province
            </Link>
          </li>
          <li>
            <Link to="/quiz" className="font-medium">
              Quiz
            </Link>
          </li>
          <li>
            <Link to="/article" className="font-medium">
              Article
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">FEATURES</h1>
          <li>
            <Link to="/quiz" className="font-medium">
              Quiz
            </Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Our Team</h1>
          <li>
            <a href="">Ayu Arista</a>
          </li>
          <li>
            <a href="">Yudhi Satria</a>
          </li>
        </ul>
      </div>
      <hr className="w-full" />
      <p className="text-center">© 2025 gatau we . All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
