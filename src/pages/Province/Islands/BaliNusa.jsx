import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import bali from "/assets/province/bali_ntt2.svg"
const BaliNusa = () => {
  return (
    <div>
        <HeroIslands
        image={"https://images.unsplash.com/photo-1540421232613-2adc296bbf9f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDF8fHxlbnwwfHx8fHw%3D"}
        islands={"Bali & Nusa Tenggara"}
        text={"Bali and Nusa Tenggara mesmerize with spiritual landscapes, intricate arts, and living traditions that dance between mountains and ocean shores. "}
        />
        <IslandsMaps heading={"Discover the Harmony of Culture and Nature in Bali and Nusa Tenggara"}
         text={"Bask in sunlit shores and terraced hillsides, where sacred dances, timeless crafts, and island traditions shape everyday life."}
         image={bali}
         padding={"pt-10"}
         />
    </div>
  )
}

export default BaliNusa