import gelombang from "/assets/home/gelombang-home.svg"

const HeroHome = () => {
    return(
        <div className="relative h-screen">
            <div className="bg-gradient-to-b from-[#430304] to-[#A90809]  min-h-[40vh]">
                <h1 className="font-bold text-6xl text-center absolute top-32">Preserve Culture, 
                Protect National Identity</h1>
            </div>
            <img src={gelombang} alt="" className="absolute -mt-1"/>
           </div>
    )
}
export default HeroHome;