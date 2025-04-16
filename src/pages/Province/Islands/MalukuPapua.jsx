import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import maluku from "/assets/province/maluku_papua2.svg";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";

const MalukuPapua = () => {
  return (
    <div>
      <HeroIslands
        image={
          "https://images.unsplash.com/photo-1735541822060-c6dc99e4eff1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        islands={"Maluku & Papua"}
        text={
          "Maluku & Papua inspire with their untouched islands, rhythmic tribal rituals, and a deep cultural soul rooted in the harmony of land and sea."
        }
      />
      <IslandsMaps
        heading={
          "Feel the Authenticity of Papua and Maluku Traditions Rich in Color and Rhythm"
        }
        text={
          "Sail across crystal-clear waters and untouched isles, where tribal rhythms, ancient chants, and vibrant customs echo through forest and sea."
        }
        image={maluku}
        padding={"pt-10"}
        width={"xl:w-[27%]"}
      />
      <div className="mt-16">
        <HeadingProvince title={"Let's Find Out About Other Cultures"} />
        <ImageSliderProvince />
      </div>
    </div>
  );
};

export default MalukuPapua;
