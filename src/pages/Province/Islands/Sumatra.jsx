import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import sumatra from "/assets/province/sumatra2.svg"
import HeadingProvince from '../../../components/Province/HeadingProvince'
import AboutAllProvince from '../../../components/Province/Section/AboutAllProvince'
const Sumatra = () => {
  return (
    <div>
        <HeroIslands
        image={"https://images.unsplash.com/photo-1601058497548-f247dfe349d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        islands={"Sumatra"}
        text={"Sumatra enchants with its lush highlands, majestic volcanoes, and rich tapestry of cultures woven through centuries of tradition"}
        />
        <IslandsMaps heading={"Feel the Majesty of Sumatra Culture in Every Footstep"}
         text={"Trek through misty highlands and vibrant villages, where ancient kingdoms once stood and cultures still flourish in harmony with nature."}
         image={sumatra}
            padding={"pt-6"}
         />
         <HeadingProvince title={"Cultural Mosaic of Sumatra"} />
        <AboutAllProvince
        img1={"https://images.unsplash.com/photo-1627931047001-7d46f96661a4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"}
        radius={"rounded-tl-4xl "}
        img2={"https://images.unsplash.com/photo-1573722496475-e045ca04ed57?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"}
        radius2={"rounded-tr-4xl rounded-br-4xl"}
        img3={"https://images.unsplash.com/photo-1507390012655-7854c88c1d97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"}
        radius3={"rounded-bl-4xl"}
        img4={"https://images.unsplash.com/photo-1693341195831-742a7b6f11ee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"}
        radius4={"rounded-br-4xl"}
        title={"Legacy of Sumatra’s Ancestral Cultures "}
        text={"Legacy of Sumatra’s Ancestral Cultures is reflected in its traditional houses like Rumah Gadang, sacred Batak rituals such as Tari Tortor, symbolic textiles like Ulos, and world-renowned cuisine like Rendang."}
        text2={"Sumatra’s ancestral culture lives on today through its architecture, arts, textiles, and cuisine shaping an identity rich in values and life philosophies."}
        />
    </div>
  )
}

export default Sumatra