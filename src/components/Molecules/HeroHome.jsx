import gelombang from "/assets/home/gelombang-home.svg";
import HeroVideo from "/assets/home/hero.mp4";
import batikKanan from "/assets/home/batik-kanan.svg";
import batikKiri from "/assets/home/batik-kiri.svg";
import batikBawah from "/assets/home/batik-bawah.svg";

const HeroHome = () => {
  return (
    <div className="w-full relative mx-auto">
      <video
        src={HeroVideo}
        className="w-full h-[500px] object-cover"
        autoPlay
        loop
        muted
        type="video/mp4"
      ></video>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/25 text-white px-4">
        <h1 className="text-4xl md:text-6xl font-third font-bold text-center mb-4">
          Welcome to Nusantara Culture
        </h1>
        <p className="text-base md:text-lg text-center max-w-2xl">
          Discover the rich heritage, timeless traditions, and vibrant diversity
          of Indonesia's archipelagic culture.
        </p>
        <div className="absolute left-0">
            <img src={batikKiri} alt="" />
        </div>
      </div>
    </div>
  );
};
export default HeroHome;
