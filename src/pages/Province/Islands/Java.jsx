import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import java from "/assets/province/java2.svg"
const Java = () => {
  return (
    <div>
        <HeroIslands
        image={"https://images.unsplash.com/photo-1531549798519-fe97e2be864a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        islands={"Java"}
        text={"Java captivates with its sacred temples, fertile plains, and timeless traditions that pulse through vibrant cities and quiet villages alike."}
        />
        <IslandsMaps heading={"Explore the Depths of Javanese Culture Full of Philosophy and Elegance"}
         text={"Wander through sacred temples and fertile plains, where timeless traditions and spiritual rituals breathe life into the heart of the island."}
         image={java}
            padding={"pt-8"}
         />
    </div>
  )
}

export default Java

