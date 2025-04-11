const CardPreserveCulture = ({image, title, desc}) => {
    return (
        <div className="relative max-w-md lg:max-w-sm xl:max-w-xl border border-gray-300 rounded-lg p-5 hover:-translate-y-3  transition-all duration-300 ease-in-out">
            <div className="relative">
            <img src={image} 
            alt={title}
            className="w-full h-52 xl:h-58 object-center object-cover rounded-tl-xl rounded-br-xl"
            />
            <div className="absolute bottom-0 left-0 right-0 rounded-br-xl h-28  bg-gradient-to-t from-light-red via-black/40 to-transparent px-5 flex items-end">
            <h1 className="absolute bottom-2 font-bold text-[18px] text-white">
                {title}
            </h1>
            </div>
            </div>
            <div className="p-2">
                <p className="text-justify font-medium text-[14px] xl:text-base text-black mt-2">{desc}</p>
            </div>
        </div>
    )
}

export default CardPreserveCulture;