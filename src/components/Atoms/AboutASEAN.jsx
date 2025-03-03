const AboutASEAN = ({title, desc}) => {
    return(
        <div>
            <h1 className="font-bold text-light-red text-3xl">{title}</h1>
            <p className="font-medium text-sm mt-1 text-black max-w-[30rem] text-pretty">{desc}</p>
        </div>
    )
}

export default AboutASEAN