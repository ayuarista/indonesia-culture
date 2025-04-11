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
          size="col-span-2 row-span-2 h-[27rem] xl:h-[32rem] "
          text="text-sm xl:text-base"
          sizeTitle="text-md xl:text-xl"
          path={"https://www.kompasiana.com/cicidian5506/677d5ab134777c0b59547556/sering-dikira-pamer-tubuh-ternyata-ini-usaha-penari-untuk-melestarikan-budaya"}
        />
        <ArticleCard
          image="https://cdn.antaranews.com/cache/1200x800/2024/12/05/1000059187.jpg.webp"
          label="2 months ago"
          author="Afif Yuliansyah"
          date="December 6, 2024"
          title="Kolintang Recognized by UNESCO as Intangible Cultural Heritage, Great Responsibility Awaits"
          size="col-span-2 row-span-1 h-52 md:h-72 lg:h-52 xl:h-72"
          text="text-sm xl:text-base"
          sizeTitle="text-md xl:text-xl"
          path={"https://www.kompas.id/artikel/kolintan-warisan-budaya-unesco"}
        />
        <div className="grid grid-cols-2 col-span-2 gap-4 h-52">
          <ArticleCard
            image="https://images.unsplash.com/photo-1668214078623-bbd015a65df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            label="4 months ago"
            author="Indah Novita Dewi"
            date="Dec 23, 2024"
            title="Preserving Traditional Dance Through..."
            size="h-52"
            text="text-xs xl:text-sm"
            sizeTitle="text-sm xl:text-base"
            path={"https://www.kompasiana.com/indahnovita5600/6677d6b934777c6147595a34/melestarikan-tari-tradisional-melalui-acara-resepsi-pernikahan"}
          />
          <ArticleCard
            image="https://images.unsplash.com/photo-1604973104381-870c92f10343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
            label="4 months ago"
            author="Vinsensius S Fil"
            date="October 2, 2024"
            title="Let's Love Batik! Not Just a Cloth, This is Our Identity!"
            size="h-52"
            text="text-xs xl:text-sm"
            sizeTitle="text-sm xl:text-base"
            path={"https://www.kompasiana.com/vinsensiussfil8075/66fbff79ed6415138430b5e2/yuk-cintai-batik-nggak-cuma-kain-ini-identitas-kita"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardLatestArticle;
