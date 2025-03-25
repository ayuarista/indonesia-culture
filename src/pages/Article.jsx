import CardArticle from "../components/Card/CardArticle";
import { DataCardArticle } from "../data/card/DataCardArticle";
const  = () => {
    return(
        <div className="pt-16">
            <div className=" -cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
                {DataCardArticle.map((article) => (
                    <CardArticle
                        key={article.id}
                        image={article.image}
                        title={article.title}
                        author={article.author}
                        link={article.link}
                    />
                ))}
            </div>
        </div>
    )
}

export default Article;