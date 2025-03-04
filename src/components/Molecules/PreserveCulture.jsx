import CardPreserveCulture from "../Card/CardPreserveCulture";
import AboutPreserveCulture from "../Atoms/AboutPreserveCulture";
import DataPreserveCulture from "../../data/card/DataPreserveCulture";

const PreserveCulture = () => {
    return (
        <div className="mx-12 lg:mx-16 mt-68 lg:mt-80">
            <AboutPreserveCulture/>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
            {DataPreserveCulture.map((item) => (
                <CardPreserveCulture
                key={item.id}
                title={item.title}
                image={item.image}
                desc={item.desc}
                />
            ))}
        </div>
        </div>
    )
}

export default PreserveCulture;