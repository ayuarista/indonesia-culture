import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import maluku from "/assets/province/maluku_papua2.svg";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";
import AboutAllProvince from "../../../components/Province/Section/AboutAllProvince";
import VideoAllProvince from "../../../components/Province/Section/VideoAllProvince";

const MalukuPapua = () => {
  return (
    <div>
      <HeroIslands
        image={
          "https://images.unsplash.com/photo-1735541822060-c6dc99e4eff1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
        width={"md:w-[62%] md:mt-3 xl:w-[27%]"}
      />
      <HeadingProvince
        title={"Echoes of Ancestral Culture from Papua to Maluku"}
      />
      <AboutAllProvince
        img1={
          "https://images.unsplash.com/photo-1522139350032-f32db164adfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius={"rounded-tr-4xl "}
        img2={
          "https://images.unsplash.com/photo-1652355069631-2bc25d4138cc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius2={"rounded-tl-4xl rounded-br-4xl"}
        img3={
          "https://images.unsplash.com/photo-1623467896375-0a2da43e37d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius3={"rounded-bl-4xl"}
        img4={
          "https://images.unsplash.com/photo-1703769605297-93464fbf186f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius4={"rounded-br-4xl"}
        title={"Sacred Traditions of Papua and Maluku’s Indigenous Peoples"}
        text={
          "Refers to the traditional traditions that are considered sacred and passed down from generation to generation by the indigenous people in the Papua and Maluku regions. "
        }
        text2={
          "Examples include the Bakar Batu ritual as a symbol of togetherness in Papuan society, as well as the Cakalele dance and the Pela Gandong traditional ceremony in Maluku which reflect spiritual ties and respect for ancestors."
        }
      />
      <div className="pt-32 xl:pt-36">
        <h1 className="mx-8 text-2xl text-left md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold max-w-md xl:max-w-lg lg:mx-20">
          Let's Get to Know Maluku & Papua Culture Better
        </h1>
        <VideoAllProvince
          video={
            <iframe
              src="https://www.youtube.com/embed/X6Oaruks5Lk?autoplay=1&mute=1&si=yxwraVfQUj9BPsSJ"
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

export default MalukuPapua;
