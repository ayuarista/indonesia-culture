import HeroHome from "../components/Molecules/HeroHome";
import CardIndonesiaCulture from "../components/Card/CardIndonesiaCulture";
import AboutIndonesiaCulture from "../components/Atoms/AboutIndonesiaCulture";
import RekorMuri from "../components/Molecules/RekorMuri";
import ArticleAwards from "../components/Molecules/ArticleAwards";
import AboutGWR from "../components/Atoms/AboutGWR";
import CardGWR from "../components/Card/CardGWR";
const Home = () => {
    return (
        <div className="pt-16">
           <HeroHome/>
           <div className="flex justify-between flex-col lg:flex-row">
            <div className="w-1/2">
            <CardIndonesiaCulture/>
            </div>
            <div className="w-1/2 mx-10">
            <AboutIndonesiaCulture/>
            </div>
           </div>
           <RekorMuri/>
           <ArticleAwards/>
           <AboutGWR/>
           <CardGWR/>
        </div>
    );
}

export default Home;