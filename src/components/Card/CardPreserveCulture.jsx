const CardPreserveCulture = (props) => {
    return (
        <div className="relative max-w-md lg:max-w-sm border border-gray-300 rounded-lg p-5">
            <div className="relative">
            <img src={props.image} 
            alt={props.title}
            className="w-full h-52 object-center object-cover rounded-tl-xl rounded-br-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-br-xl h-28 hover:h-52  transition-all duration-300 ease-in-out  bg-gradient-to-t from-light-red via-black/40 to-transparent px-5 flex items-end">
            <h1 className="absolute bottom-2 font-bold text-[18px] text-white">
                {props.title}
            </h1>
            </div>
            </div>
            <div className="p-2">
                <p className="text-justify font-medium text-[14px] text-black mt-2">{props.desc}</p>
            </div>
        </div>
    )
}

export default CardPreserveCulture;