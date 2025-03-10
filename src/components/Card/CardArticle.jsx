const CardArticle = ({image, title, author, link}) => {
    return(
        <div className="max-w-sm rounded-lg shadow-2xl p-5 bg-white">
            <div className="relative h-60 w-full rounded-lg overflow-hidden">
                <img src={image}/>
            </div>
            <div className="border-l-4 border-light-red px-2 mt-4">
                <p className="text-sm text-gray-500">{author}</p>
            </div>
            <div className="mt-3">
            <a href={link}>
            {title}
            </a>
            </div>
        </div>
    )
}

export default CardArticle;