import ViewAllNews from "./ViewAllNews"

const AboutRekorMuri = () => {
    return (
        <div>
            <div className="flex items-center gap-2">
                <h1 className="bg-gradient-to-r font-bold text-4xl from-0% from-[#490303] to-40% to-[#AF0808] text-transparent bg-clip-text">Rekor Muri Indonesia</h1>
                <img src="" alt="" />
            </div>
            <div className="mt-3 max-w-[35rem]">
            <p className="font-medium text-justify text-black">The Indonesia World Records Museum is a museum located in Semarang, Central Java, Indonesia. A collection of Indonesian records is presented in this museum.</p>
            </div>
            <div className="mt-5">
                <ViewAllNews/>
            </div>
        </div>
    )
}
export default AboutRekorMuri