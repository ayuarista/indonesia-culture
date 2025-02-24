const CardPreserveCulture = (props) => {
    return (
        <div className="relative max-w-sm rounded-bl-lg rounded-tr-lg border border-gray-300 p-5">
            <div className="relative">
            <img src={props.image} 
            alt={props.title}
            className="w-full h-52 object-cover rounded-bl-lg rounded-tr-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-t from-red-900 via-black/10 to-transparent p-5 flex items-end">
            <h1 className="absolute bottom-2 font-bold text-xl">
                {props.title}
            </h1>
            </div>
            </div>
            <div className="p-4">
                <p className="text-justify font-medium text-[15px] text-black">{props.desc}</p>
                <button className="px-8 py-1 font-medium border-[#AF0808] rounded-full text-center">Agree</button>
            </div>
        </div>
    )
}

export default CardPreserveCulture;