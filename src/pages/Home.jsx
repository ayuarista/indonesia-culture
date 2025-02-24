import HeroHome from "../components/Molecules/HeroHome";
import RekorMuri from "../components/Molecules/RekorMuri";
import ArticleAwards from "../components/Molecules/ArticleAwards";
import GuinnessWorldRecord from "../components/Molecules/GuinnessWorldRecord";
import Unesco from "../components/Molecules/Unesco";
import IndonesiaCulture from "../components/Molecules/IndonesiaCulture";
const Home = () => {
  return (
    <div className="pt-16">
      <HeroHome />
      <IndonesiaCulture />
      <RekorMuri />
      <ArticleAwards />
      <GuinnessWorldRecord />
      <Unesco />
    </div>
  );
};

export default Home;
