import Gelombang from "/assets/footer/gelombang.png";
import Awan from "/assets/footer/awan.png";
import Wayang from "/assets/footer/wayang.png";
const Footer = () => {
  // bg-gradient-to-t from-[#430304] to-[#B20607]
  return (
    <footer className="relative h-screen overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-t from-[#430304] to-[#B20607] z-0"></div>

  <div className="relative z-10">
    <div className="absolute -top-64 w-full">
      <img src={Gelombang} alt="" className="w-full" />
    </div>
    <div className="absolute top-0 w-full overflow-hidden">
      <img src={Awan} alt="" className="w-full object-cover" />
    </div>

    <img src={Wayang} alt="" className="absolute top-0 left-0" />
  </div>
</footer>

  );
};

export default Footer;
