import React from "react";
import HeroIslands from "../../../components/Province/Hero/HeroIslands";
import IslandsMaps from "../../../components/Province/Section/IslandsMaps";
import java from "/assets/province/java2.svg";
import HeadingProvince from "../../../components/Province/HeadingProvince";
import ImageSliderProvince from "../../../components/Province/Section/ImageSliderProvince";
import AboutAllProvince from "../../../components/Province/Section/AboutAllProvince";
import VideoAllProvince from "../../../components/Province/Section/VideoAllProvince";
const Java = () => {
  return (
    <div>
      <HeroIslands
        image={
          "https://images.unsplash.com/photo-1531549798519-fe97e2be864a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        islands={"Java"}
        text={
          "Java captivates with its sacred temples, fertile plains, and timeless traditions that pulse through vibrant cities and quiet villages alike."
        }
      />
      <IslandsMaps
        heading={
          "Explore the Depths of Javanese Culture Full of Philosophy and Elegance"
        }
        text={
          "Wander through sacred temples and fertile plains, where timeless traditions and spiritual rituals breathe life into the heart of the island."
        }
        image={java}
        padding={"pt-8"}
      />
      <HeadingProvince title={"Cultural Heartbeat of Java"} />
      <AboutAllProvince
        img1={
          "https://images.unsplash.com/photo-1599551633523-7b267ede5f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius={"rounded-tr-4xl "}
        img2={
          "https://images.unsplash.com/photo-1616388560850-89b6a8df572d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius2={"rounded-tl-4xl rounded-br-4xl"}
        img3={
          "https://images.unsplash.com/photo-1704288216993-be25d81fa9b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius3={"rounded-bl-4xl"}
        img4={
          "https://images.unsplash.com/photo-1597553716923-45474a48fbe4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"
        }
        radius4={"rounded-br-4xl"}
        title={"The Living Legacy of Java’s Cultural Roots"}
        text={
          'The Living Legacy of Java’s Cultural Roots" refers to the Javanese cultural heritage that is not only stored as history, but continues to be lived in the daily lives of its people.'
        }
        text2={
          "Examples can be seen in the preservation of performing arts such as wayang kulit and gamelan, the tradition of batik which is passed down across generations as part of the cultural and spiritual identity of the Javanese people."
        }
      />
      <div className="pt-40 xl:pt-60">
        <h1 className="text-2xl text-left md:text-3xl lg:text-3xl xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold max-w-md lg:mx-20">
          Let's Get to Know Javanese Culture Better
        </h1>
        <VideoAllProvince
          video={
            <iframe
              width="720"
              height="350"
              src="https://www.youtube.com/embed/uwhvQPK_Kfo?autoplay=1&mute=1&si=vnQjnhK5lmw4oqLa"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origPin-when-cross-origin"
              allowfullscreen
              className="relative"
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

export default Java;
