import gelombang from "/assets/home/gelombang-home.svg";
import HeroVideo from "/assets/home/hero.mp4";
const HeroHome = () => {
  return (
    <div className="w-full relative mx-auto">
      <video src={HeroVideo} className="w-full" autoPlay loop type="video/mp4"></video>
    </div>
  );
};
export default HeroHome;
