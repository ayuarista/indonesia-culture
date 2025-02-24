import CardPreserveCulture from "../Card/CardPreserveCulture";
import DataPreserveCulture from "../data/card/DataPreserveCulture";
import AboutPreserveCulture from "../Atoms/AboutPreserveCulture";

const PreserveCulture = () => {
    return (
        <div className="mx-16 mt-32">
            <AboutPreserveCulture/>
        <div className="grid grid-cols-3 gap-6 mt-10">
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