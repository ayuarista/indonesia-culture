import HeroHome from "../components/Molecules/HeroHome";
import RekorMuri from "../components/Molecules/RekorMuri";
import ArticleAwards from "../components/Molecules/ArticleAwards";
import GuinnessWorldRecord from "../components/Molecules/GuinnessWorldRecord";
import Unesco from "../components/Molecules/Unesco";
import IndonesiaCulture from "../components/Molecules/IndonesiaCulture";
import PreserveCulture from "../components/Molecules/PreserveCulture";
import CardLatestArticle from "../components/Card/CardLatestArticle";
import ProtectCulture from "../components/Molecules/ProtectCulture";
const Home = () => {
  return (
    <div className="pt-16">
      <HeroHome />
      <IndonesiaCulture />
      <RekorMuri />
      <ArticleAwards />
      <GuinnessWorldRecord />
      <Unesco />
      <ProtectCulture/>
      <PreserveCulture/>
      <CardLatestArticle/>
    </div>
  );
};

export default Home;
