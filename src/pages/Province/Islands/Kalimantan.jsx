import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import kalimantan from "/assets/province/kalimantan2.svg";
import AboutAllProvince from "../../../components/Province/Section/AboutAllProvince";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import VideoAllProvince from "../../../components/Province/Section/VideoAllProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";

const Kalimantan = () => {
  return (
    <div>
      <HeroIslands
        image={
          "https://images.unsplash.com/photo-1727078724137-077f6531a33f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        islands={"Kalimantan"}
        text={
          "A timeless land of ancestral rituals and vibrant traditions, where the soul of Borneo's heritage lives on through dance, song, and sacred crafts."
        }
      />
      <IslandsMaps
        heading={"Discover Kalimantan's Enduring Indigenous Heritage"}
        text={
          "Sail through storied rivers and wander into lush forests, where ancient traditions thrive beside rare wildlife like the orangutan"
        }
        image={kalimantan}
      />
      <HeadingProvince title={"The Diverse Cultures of Kalimantan"} />
      <AboutAllProvince
        img1={
          "https://images.unsplash.com/photo-1624605707211-7109c1899164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3Dz"
        }
        radius={"rounded-tr-4xl "}
        img2={
          "https://images.unsplash.com/photo-1636363360621-18ef01dce195?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius2={"rounded-tl-4xl rounded-br-4xl"}
        img3={
          "https://images.unsplash.com/photo-1717412791373-3e038e525759?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius3={"rounded-bl-4xl"}
        img4={
          "https://images.unsplash.com/photo-1717412286845-e6994bcfd3ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius4={"rounded-br-4xl"}
        title={"Heritage of Indigenous Peoples of Kalimantan"}
        text={
          "The cultural heritage of Kalimantan is very rich and diverse, reflecting the life of indigenous peoples that has lasted for centuries."
        }
        text2={
          "Delve deeper into Kalimantan's cultural heritage by visiting the Dayak Tribe, who call the jungle’s heart their home. Be invited into their traditional longhouses, where you can experience spiritual dances that reveal the profound cultural meanings passed down through generations."
        }
      />
      <div className="pt-38">
        <h1 className="mx-8 text-2xl text-left md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold max-w-md lg:mx-20">
          Let's Get to Know Kalimantan Culture Better
        </h1>
        <VideoAllProvince
          video={
              <iframe
                src="https://www.youtube.com/embed/_mo7k_-oR_A?autoplay=1&si=g0PXT8-8pHMC5dwX"
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
      <div className="mt-16">
        <HeadingProvince title={"Let's Find Out About Other Cultures"} />
        <ImageSliderProvince />
      </div>
    </div>
  );
};

export default Kalimantan;
