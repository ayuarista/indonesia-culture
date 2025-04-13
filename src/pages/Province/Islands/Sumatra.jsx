import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import sumatra from "/assets/province/sumatra2.svg"
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
         />
    </div>
  )
}

export default Sumatra