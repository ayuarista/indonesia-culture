import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import kalimantan from "/assets/province/kalimantan2.svg"

const Kalimantan = () => {
  return (
    <div>
        <HeroIslands
        image={"https://images.unsplash.com/photo-1727078724137-077f6531a33f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        islands={"Kalimantan"}
        text={"A timeless land of ancestral rituals and vibrant traditions, where the soul of Borneo's heritage lives on through dance, song, and sacred crafts."}
        />
        <IslandsMaps heading={"Discover Kalimantan's Enduring Indigenous Heritage"}
         text={"Sail through storied rivers and wander into lush forests, where ancient traditions thrive beside rare wildlife like the orangutan"}
         image={kalimantan}
         />
    </div>
  )
}

export default Kalimantan