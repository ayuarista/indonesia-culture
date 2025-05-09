import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import bali from "/assets/province/bali_ntt2.svg";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";
import AboutAllProvince from "../../../components/Province/Section/AboutAllProvince";
import VideoAllProvince from "../../../components/Province/Section/VideoAllProvince";
const BaliNusa = () => {
  return (
    <div>
      <HeroIslands
        image={
          "https://images.unsplash.com/photo-1540421232613-2adc296bbf9f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        islands={"Bali & Nusa Tenggara"}
        text={
          "Bali and Nusa Tenggara mesmerize with spiritual landscapes, intricate arts, and living traditions that dance between mountains and ocean shores. "
        }
      />
      <IslandsMaps
        heading={
          "Discover the Harmony of Culture and Nature in Bali and Nusa Tenggara"
        }
        text={
          "Bask in sunlit shores and terraced hillsides, where sacred dances, timeless crafts, and island traditions shape everyday life."
        }
        image={bali}
        padding={"pt-10"}
      />
      <HeadingProvince title={"Sacred Traditions of Bali and Nusa Tenggara"} />
      <AboutAllProvince
        img1={
          "https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius={"rounded-tl-4xl "}
        img2={
          "https://images.unsplash.com/photo-1625328256399-62e448055742?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius2={"rounded-tr-4xl rounded-br-4xl"}
        img3={
          "https://images.unsplash.com/photo-1676127956513-e44031879b89?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius3={"rounded-bl-4xl"}
        img4={
          "https://images.unsplash.com/photo-1516752230528-a26560af7701?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius4={"rounded-br-4xl"}
        title={"Spiritual and Artistic Heritage of Bali and Nusa Tenggara"}
        text={
          "Religious and artistic values ​​are an inseparable part of the lives of people in this region."
        }
        text2={
          "For example, religious ceremonies in Balinese temples are filled with sacred dances and offerings, as well as the typical Nusa Tenggara ikat weaving art which is not only beautiful, but also full of symbolic meaning in every motif and color."
        }
      />
      <div className="pt-32 xl:pt-36">
        <h1 className="mx-8 text-2xl text-left md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold max-w-md lg:mx-20">
        Let's Get to Know Bali & Nusa Tenggara Culture Better
        </h1>
      <VideoAllProvince
        video={
          <iframe
            src="https://www.youtube.com/embed/-TYOYSu6Xjg?autoplay=1&mute=1&si=2nDisHg_bYr1EskR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
            className="relative w-[300px] h-[350px] md:w-[520px] md:h-[350px] lg:w-[720px] lg:h-[350px]"
          ></iframe>
        }
      />
      </div>
      <div className="mt-24">
        <HeadingProvince title={"Let's Find Out About Other Cultures"} />
        <ImageSliderProvince />
      </div>
    </div>
  );
};

export default BaliNusa;
