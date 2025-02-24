const CardGWR = () => {
    return(
        <div className="relative max-w-sm rounded-lg shadow-xl">
            <div className="relative">
            <img src="https://awsimages.detik.net.id/community/media/visual/2023/08/06/kemendikbudristek_169.jpeg?w=600&q=90" 
            alt="" 
            className="w-full object-cover rounded-t-[21px]"
            />
            <h1 className="absolute bottom-2 font-bold text-xl">
                Largest Angklung Ensemble
            </h1>
            </div>
            <div className="absolute top-0 left-0 bg-white text-[#AF0808] font-bold px-3 py-2 border border-gray-300 rounded-tl-full rounded-br-full rounded-tr-full">
                2023
            </div>
            <div className="p-4">
                <p className="text-justify font-medium text-[15px] text-black">Largest Angklung Strings (2023) - 15,110 people played angklung simultaneously in Jakarta.</p>
            </div>
        </div>
    )
}

export default CardGWR;