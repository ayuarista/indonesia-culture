const CardPreserveCulture = (props) => {
    return (
        <div className="relative max-w-sm shadow-xl rounded-lg p-5">
            <div className="relative">
            <img src={props.image} 
            alt={props.title}
            className="w-full h-52 object-center object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 h-52 bg-gradient-to-t from-red-900 via-black/40 to-transparent px-5 flex items-end">
            <h1 className="absolute bottom-2 font-bold text-[18px]">
                {props.title}
            </h1>
            </div>
            </div>
            <div className="p-2 flex flex-col justify-center">
                <p className="text-justify font-medium text-[14px] text-black mt-2">{props.desc}</p>
                <button className="px-8 py-1  text-black border border-[#AF0808] rounded-full mt-3">Agree</button>
            </div>
        </div>
    )
}

export default CardPreserveCulture;