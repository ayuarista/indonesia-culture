import ViewAllNews from "./ViewAllNews";
const AboutIndonesiaCulture = () => {
    return(
        <div>
            <div className="flex flex-col gap-1">
            <h1 className="font-bold text-xl">What do you know about</h1>
            <h1 className="font-bold text-2xl">Indonesian Culture?</h1>
            </div>
            <p className="font-medium">Indonesian culture is a rich and diverse collection of traditions, arts, customs, and values shaped by the country’s long history and the influence of indigenous, Hindu-Buddhist, Islamic, and colonial cultures.</p>
            <ViewAllNews />
        </div>
    )
}

export default AboutIndonesiaCulture;