const AboutASEAN = ({title, desc}) => {
    return(
        <div className="lg:mx-16 mx-8 lg:mt-0 mt-10">
            <h1 className="font-bold text-light-red text-2xl lg:text-3xl">{title}</h1>
            <p className="font-medium text-[15px] text-justify mt-1 text-black max-w-[30rem] text-pretty">{desc}</p>
        </div>
    )
}

export default AboutASEAN