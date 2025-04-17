import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import sulawesi from "/assets/province/sulawesi2.svg";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";
import AboutAllProvince from "../../../components/Province/Section/AboutAllProvince";
const Sulawesi = () => {
  return (
    <div>
      <HeroIslands
        image={
          "https://images.unsplash.com/photo-1727672100642-c8e8dfa7dca3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        islands={"Sulawesi"}
        text={
          "Sulawesi stirs the spirit with its dramatic highlands, mystical ceremonies, and diverse cultures that flourish from coastlines to cloud forests."
        }
      />
      <IslandsMaps
        heading={
          "Explore Sulawesi, a Land of Traditions at One with Nature and Soul"
        }
        text={
          "Venture into rugged mountains and hidden valleys, where age-old ceremonies and architectural wonders reveal the soul of Sulawesi's people."
        }
        image={sulawesi}
        padding={"pt-6"}
        width={"xl:w-[27%]"}
      />
      <HeadingProvince title={"Cultural Heartbeat of Java"} />
      <AboutAllProvince
        img1={
          ""
        }
        radius={"rounded-tl-4xl "}
        img2={
          ""
        }
        radius2={"rounded-tr-4xl rounded-br-4xl"}
        img3={
          ""
        }
        radius3={"rounded-bl-4xl"}
        img4={
          ""
        }
        radius4={"rounded-br-4xl"}
        title={""}
        text={
          ""
        }
        text2={
          ""
        }
      />
      <div className="mt-16">
        <HeadingProvince title={"Let's Find Out About Other Cultures"} />
        <ImageSliderProvince />
      </div>
    </div>
  );
};

export default Sulawesi;
