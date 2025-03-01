const CardGWR = ({image, title, year, desc}) => {
    return(
        <div className="relative max-w-md lg:max-w-sm rounded-lg shadow-xl">
            <div className="relative">
            <img src={image} 
            alt={title}
            className="w-full h-52 object-cover rounded-t-[21px]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-44 hover:h-72  transition-all duration-300 ease-in-out bg-gradient-to-t from-red-900 via-black/10 to-transparent p-5 flex items-end">
            <h1 className="absolute bottom-2 font-bold text-xl">
                {title}
            </h1>
            </div>
            </div>
            <div className="absolute top-0 left-0 bg-white text-[#AF0808] font-bold px-3 py-2 border border-gray-300 rounded-tl-full rounded-br-full rounded-tr-full">
                {year}
            </div>
            <div className="p-4">
                <p className="text-justify font-medium text-[15px] text-black">{desc}</p>
            </div>
        </div>
    )
}

export default CardGWR;