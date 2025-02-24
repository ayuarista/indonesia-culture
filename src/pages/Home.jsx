import HeroHome from "../components/Molecules/HeroHome";
import CardIndonesiaCulture from "../components/Card/CardIndonesiaCulture";
import AboutIndonesiaCulture from "../components/Atoms/AboutIndonesiaCulture";
import RekorMuri from "../components/Molecules/RekorMuri";
import CardAward from "../components/Card/CardAward";
import ArticleAwards from "../components/Molecules/ArticleAwards";
const Home = () => {
    return (
        <div className="pt-16">
           <HeroHome/>
           <div className="flex justify-between">
            <div className="w-1/2">
            <CardIndonesiaCulture/>
            </div>
            <div className="w-1/2 mx-10">
            <AboutIndonesiaCulture/>
            </div>
           </div>
           <RekorMuri/>
           <ArticleAwards/>
        </div>
    );
}

export default Home;