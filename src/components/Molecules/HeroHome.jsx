import gelombang from "/assets/home/gelombang-home.svg";
import HeroVideo from "/assets/home/hero.mp4";
import batikKanan from "/assets/home/batik-kanan.svg";
import batikKiri from "/assets/home/batik-kiri.svg";
import batikBawah from "/assets/home/batik-bawah.svg";

const HeroHome = () => {
  return (
    <div className="w-full relative mx-auto overflow-hidden">
      <video
        src={HeroVideo}
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        type="video/mp4"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/35 text-white px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-third font-bold text-center mb-4">
          Welcome to Nusantara Culture
        </h1>
        <p className="text-[15px] md:text-[17px] lg:text-lg xl:text-xl text-center max-w-2xl mt-2">
          Discover the rich heritage, timeless traditions, and vibrant diversity
          of Indonesia's archipelagic culture.
        </p>
        <div className="absolute left-0 bottom-0 lg:top-1/6 xl:top-1/2">
            <img src={batikKiri} alt=""/>
        </div>
        <div className="absolute right-0 bottom-0 lg:top-1/6 xl:top-1/2">
            <img src={batikKanan} alt="" />
        </div>
        <div className="absolute -bottom-40">
            <img src={batikBawah} alt=""  className="w-72 object-cover
            "/>
        </div>
      </div>
    </div>
  );
};
export default HeroHome;
