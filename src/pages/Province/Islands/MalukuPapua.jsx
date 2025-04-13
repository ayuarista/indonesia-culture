import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import maluku from "/assets/province/maluku_papua2.svg"

const MalukuPapua = () => {
  return (
    <div>
        <HeroIslands
        image={"https://images.unsplash.com/photo-1542163846-abf6a9fe52e2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
        islands={"Maluku & Papua"}
        text={"Maluku & Papua inspire with their untouched islands, rhythmic tribal rituals, and a deep cultural soul rooted in the harmony of land and sea."}
        />
        <IslandsMaps heading={"Feel the Authenticity of Papua and Maluku Traditions Rich in Color and Rhythm"}
         text={"Sail across crystal-clear waters and untouched isles, where tribal rhythms, ancient chants, and vibrant customs echo through forest and sea."}
         image={maluku}
         padding={"pt-10"}
         />
    </div>
  )
}

export default MalukuPapua