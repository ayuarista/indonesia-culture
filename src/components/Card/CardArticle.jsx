const CardArticle = () => {
    return(
        <div className="max-w-md rounded-lg shadow-2xl p-5 bg-white">
            <div className="relative h-72 w-full rounded-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1666587128445-4623f8f8f033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YSUyMGRhbmNlfGVufDB8fDB8fHww" alt="" className="w-full h-full object-cover"/>
            </div>
            <div className="border-l-4 border-light-red px-2 mt-4">
                <p className="text-sm text-black">Cici Dian Eviliya</p>
            </div>
            <p className="text-black font-medium text-[15px] mt-3">Often Thought to be Showing Off Their Bodies, It Turns Out This is the Dancers' Effort to Preserve Culture</p>
        </div>
    )
}

export default CardArticle;