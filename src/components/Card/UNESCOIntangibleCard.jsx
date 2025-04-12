import BtnUnescoPopup from "../Atoms/BtnUnescoPopup";

const UNESCOIntangibleCard  = ({image, title, year, info, id}) => {
    return(
        <div className="relative max-w-md lg:max-w-sm xl:max-w-xl rounded-lg shadow-xl">
            <div className="relative">
            <img src={image} 
            alt={title}
            className="w-full h-52 object-cover rounded-t-[21px]"
            />
            <div className="absolute bottom-0 left-0 right-0 h-44 hover:h-60  transition-all duration-300 ease-in-out bg-gradient-to-t from-red-900 via-black/10 to-transparent p-5 flex items-end">
            <h1 className="absolute bottom-2 font-bold text-xl xl:text-2xl text-white">
                {title}
            </h1>
            </div>
            </div>
            <div className="absolute top-0 left-0 bg-white text-[#AF0808] font-bold px-3 py-2 border border-gray-300 rounded-tl-full rounded-br-full rounded-tr-full">
                {year}
            </div>
            <div className="p-4">
                <p className="text-justify font-medium text-[15px] xl:text-lg text-black">{info}</p>
            <BtnUnescoPopup itemId={id}/>
            </div>
        </div>
    )
}

export default UNESCOIntangibleCard;