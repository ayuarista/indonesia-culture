const ArticleCard = ({ image, label, author, date, title, size, text, sizeTitle }) => {
    return (
      <div className={`relative ${size}`}>
        <img src={image} alt="News" className="w-full h-full object-cover object-center rounded-lg" />
        <div className="absolute text-sm -left-2 rounded-br-full rounded-tr-full top-4 shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] px-4 bg-white text-[#B20607] font-semibold p-1.5">
          {label}
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t rounded-lg from-black/90 to-transparent p-4 flex flex-col justify-end">
          <div className="border-l-4 border-[#AF0808] px-3">
            <p className={`text-white ${text}`}>{author} | {date}</p>
            <h1 className={`text-white font-bold ${sizeTitle}`}>{title}</h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default ArticleCard;
  