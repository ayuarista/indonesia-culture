import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import sulawesi from "/assets/province/sulawesi2.svg";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";
import AboutAllProvince from "../../../components/Province/Section/AboutAllProvince";
import VideoAllProvince from "../../../components/Province/Section/VideoAllProvince";
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
      <HeadingProvince
        title={"Unveiling Sulawesi’s Unique Cultural Heritage"}
      />
      <AboutAllProvince
        img1={
          "https://images.unsplash.com/photo-1675206362603-b3c3c3ca47c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius={"rounded-tl-4xl "}
        img2={
          "https://images.unsplash.com/photo-1702945262371-50629a54a27e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius2={"rounded-tr-4xl rounded-br-4xl"}
        img3={
          "https://images.unsplash.com/photo-1619248187267-67700357c0eb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius3={"rounded-bl-4xl"}
        img4={
          "https://images.unsplash.com/photo-1723153247780-02e191e1dd0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius4={"rounded-br-4xl"}
        title={"Heritage of the Highland and Coastal Peoples of Sulawesi"}
        text={
          "The cultural richness of the Sulawesi people who live in the mountains and coastal areas, each with unique traditions that have been passed down for centuries. "
        }
        text2={
          "Examples can be seen from the tongkonan houses of the Toraja tribe in the highlands, to the sailing traditions, marriage systems, and stilt house architecture of the Bugis and Mandar tribes in the coastal areas."
        }
      />
      <div className="pt-40 xl:pt-60">
        <h1 className="mx-8 text-2xl text-left md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold max-w-md lg:mx-20">
          Let's Get to Know Sulawesi Culture Better
        </h1>
        <VideoAllProvince
          video={
            <iframe
              src="https://www.youtube.com/embed/s_Rvxq_v-Ao?autoplay=1&si=lUOeF76Y1CSINr5R"
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
      <div className="mt-20">
        <HeadingProvince title={"Let's Find Out About Other Cultures"} />
        <ImageSliderProvince />
      </div>
    </div>
  );
};

export default Sulawesi;
