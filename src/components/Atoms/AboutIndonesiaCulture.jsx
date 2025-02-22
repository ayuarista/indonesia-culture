import ViewAllNews from "./ViewAllNews";
const AboutIndonesiaCulture = () => {
    return(
        <div className="text-black">
            <div className="flex flex-col gap-1">
            <h1 className="font-bold text-2xl">What do you know about</h1>
            <h1 className="font-bold text-3xl">Indonesian Culture?</h1>
            </div>
            <p className="font-medium mt-3 max-w-[35rem] text-justify">Indonesian culture is a rich and diverse collection of traditions, arts, customs, and values shaped by the country’s long history and the influence of indigenous, Hindu-Buddhist, Islamic,</p>
            <div className="mt-5">
            <ViewAllNews/>
            </div>
        </div>
    )
}

export default AboutIndonesiaCulture;