const CardArticle = () => {
    return(
        <div className="max-w-md rounded-lg shadow-2xl p-5">
            <div className="relative h-72 w-full rounded-lg overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-t from-black/90 to-transparent p-4 flex flex-col justify-end"></div>
                <img src="https://images.unsplash.com/photo-1666587128445-4623f8f8f033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YSUyMGRhbmNlfGVufDB8fDB8fHww" alt="" className="w-full h-full object-cover"/>
            </div>
        </div>
    )
}

export default CardArticle;