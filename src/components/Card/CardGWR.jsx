const cardGWR = () => {
    return(
        <div className="relative max-w-md rounded-lg shadow-xl">
            <img src="https://images.unsplash.com/photo-1544180994-c8c0ecf8eef0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFsaSUyMGRhbmNlfGVufDB8fDB8fHww" 
            alt="" 
            className="w-full object-cover"
            />
            <h1 className="absolute bottom-0 font-bold text-xl">
                Largest Angklung Ensemble
            </h1>
            <div className="absolute top-0 left-0 bg-white text-[#AF0808] font-bold border border-gray-300 rounded-tl-full rounded-br-full rounded-tr-full">
                2023
            </div>
            <div className="p-4">
                <p className="text-justify font-medium text-[15px]">Largest Angklung Strings (2023) - 15,110 people played angklung simultaneously in Jakarta.</p>
            </div>
        </div>
    )
}

export default cardGWR;