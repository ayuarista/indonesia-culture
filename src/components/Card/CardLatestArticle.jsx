import ArticleCard from "./ArticleCard";
import ArticleTitle from "../Atoms/ArticleTitle";
const CardLatestArticle = () => {
  return (
    <div className="mt-16 lg:mt-20 mx-8 lg:mx-16">
      <ArticleTitle title="Latest Article" />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        <ArticleCard
          image="https://images.unsplash.com/photo-1666587128445-4623f8f8f033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          label="Latest"
          author="Cici Dian Eviliya"
          date="January 07, 2025"
          title="Often Thought to be Showing Off Their Bodies, It Turns Out This is the Dancers' Effort to Preserve Culture"
          size="col-span-2 row-span-2 h-[27rem]"
          text="text-sm"
          sizeTitle="text-md"
        />
        <ArticleCard
          image="https://cdn.antaranews.com/cache/1200x800/2024/12/05/1000059187.jpg.webp"
          label="2 months ago"
          author="Afif Yuliansyah"
          date="December 6, 2024"
          title="Kolintang Recognized by UNESCO as Intangible Cultural Heritage, Great Responsibility Awaits"
          size="col-span-2 row-span-1 h-52 md:h-72 lg:h-52"
          text="text-sm"
          sizeTitle="text-md"
        />
        <div className="grid grid-cols-2 col-span-2 gap-4 h-52">
          <ArticleCard
            image="https://images.unsplash.com/photo-1668214078623-bbd015a65df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            label="4 months ago"
            author="Indah Novita Dewi"
            date="Dec 23, 2024"
            title="Preserving Traditional Dance Through..."
            size="h-52"
            text="text-xs"
            sizeTitle="text-sm"
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1604973104381-870c92f10343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            label="4 months ago"
            author="Vinsensius S Fil"
            date="October 2, 2024"
            title="Let's Love Batik! Not Just a Cloth, This is Our Identity!"
            size="h-52"
            text="text-xs"
            sizeTitle="text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default CardLatestArticle;
