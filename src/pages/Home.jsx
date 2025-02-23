import HeroHome from "../components/Molecules/HeroHome";
import CardIndonesiaCulture from "../components/Card/CardIndonesiaCulture";
import AboutIndonesiaCulture from "../components/Atoms/AboutIndonesiaCulture";
import CardRekorMuri from "../components/Card/CardRekorMuri";
const Home = () => {
    return (
        <div className="pt-16">
           <HeroHome/>
           <div className="flex justify-between">
            <div className="w-1/2">
            <CardIndonesiaCulture/>
            </div>
            <div className="w-1/2">
            <AboutIndonesiaCulture/>
            </div>
           </div>
           <CardRekorMuri/>
        </div>
    );
}

export default Home;