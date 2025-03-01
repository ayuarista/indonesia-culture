import HeroHome from "../components/Molecules/HeroHome";
import RekorMuri from "../components/Molecules/RekorMuri";
import ArticleAwards from "../components/Molecules/ArticleAwards";
import HomeUnesco from "../components/Molecules/HomeUnesco";
import IndonesiaCulture from "../components/Molecules/IndonesiaCulture";
import PreserveCulture from "../components/Molecules/PreserveCulture";
import CardLatestArticle from "../components/Card/CardLatestArticle";
import ProtectCulture from "../components/Molecules/ProtectCulture";
import HomeGWR from "../components/Molecules/HomeGWR";
const Home = () => {
  return (
    <div className="pt-16">
      <HeroHome />
      <IndonesiaCulture />
      <RekorMuri />
      <ArticleAwards />
      <HomeGWR/>
      <HomeUnesco />
      <ProtectCulture/>
      <PreserveCulture/>
      <CardLatestArticle/>
    </div>
  );
};

export default Home;
