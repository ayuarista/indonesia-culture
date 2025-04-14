import ProtectCultureMap from "./ProtectCultureMap";
import gelombang from "/assets/home/gelombang-home.svg"

const ProtectCulture = () => {
    return(
        <div className="relative h-screen md:h-[60rem] lg:h-screen w-full bg-cover bg-center flex justify-center items-start text-white bg-blend-multiply bg-black/40 mt-24 lg:mt-24 xl:mt-32" style={{ backgroundImage: `url(${"https://images.unsplash.com/photo-1674305906369-b57f101b5ee4?q=80&w=1453&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})` }}
        >
            <div className="absolute text-center mt-20 md:mt-16">
                <h1 className="font-third font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl">Preserve Culture, <br /> 
                Protect National Identity</h1>
                <p className="font-medium text-sm xl:text-base text-slate-200 max-w-[24rem] md:max-w-[26rem] lg:max-w-[28rem] xl:max-w-[30rem] mx-auto mt-2">Culture is not just a heritage, but a heritage that we must preserve. If we do not preserve it, who else will preserve the wealth of this nation?</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-96 xl:h-[30rem] bg-gradient-to-t from-light-red via-dark-red/80 to-transparent p-5 flex items-end">
            <div className="relative top-44 md:top-16 lg:top-24 xl:-top-24 z-10 mx-auto">
                <ProtectCultureMap/>
            </div>
            </div>
            <img src={gelombang} alt="" className="absolute -bottom-28 md:-bottom-56 lg:-bottom-80 xl:-bottom-72 w-full"/>
        </div>
    )
}
export default ProtectCulture;