const CardGWR = (props) => {
    return(
        <div className="relative max-w-sm rounded-lg shadow-xl">
            <div className="relative">
            <img src={props.image} 
            alt={props.title}
            className="w-full h-52 object-cover rounded-t-[21px]"
            />
            <h1 className="absolute bottom-2 font-bold text-xl">
                {props.title}
            </h1>
            </div>
            <div className="absolute top-0 left-0 bg-white text-[#AF0808] font-bold px-3 py-2 border border-gray-300 rounded-tl-full rounded-br-full rounded-tr-full">
                {props.year}
            </div>
            <div className="p-4">
                <p className="text-justify font-medium text-[15px] text-black">{props.desc}</p>
            </div>
        </div>
    )
}

export default CardGWR;