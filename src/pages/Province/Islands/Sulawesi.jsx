import React from 'react'
import HeroIslands from '../../../components/Province/Hero/HeroIslands'
import IslandsMaps from '../../../components/Province/Section/IslandsMaps'
import sulawesi from "/assets/province/sulawesi2.svg"
const Sulawesi = () => {
    return(
    <div>
    <HeroIslands
    image={"https://images.unsplash.com/photo-1727672100642-c8e8dfa7dca3?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
    islands={"Sulawesi"}
    text={"Sulawesi stirs the spirit with its dramatic highlands, mystical ceremonies, and diverse cultures that flourish from coastlines to cloud forests."}
    />
    <IslandsMaps heading={"Explore Sulawesi, a Land of Traditions at One with Nature and Soul"}
     text={"Venture into rugged mountains and hidden valleys, where age-old ceremonies and architectural wonders reveal the soul of Sulawesi's people."}
     image={sulawesi}
        padding={"pt-6"}
     />
</div>
    )
};

export default Sulawesi;
