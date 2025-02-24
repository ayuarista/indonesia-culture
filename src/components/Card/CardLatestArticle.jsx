const CardLatestArticle = () => {
  return (
    <div className="grid grid-cols-4 gap-4 mt-28 mx-16">
      <div className="grid row-span-2 col-span-2 relative h-[27rem]">
        <img
          src="https://images.unsplash.com/photo-1666587128445-4623f8f8f033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
          alt="Main News"
          className="w-full h-[27rem] object-cover object-center rounded-lg"
        />
        <div className="absolute text-sm -left-3 rounded-br-full rounded-tr-full top-3 shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] px-5 bg-white text-[#B20607] font-semibold p-2">
          Latest
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t rounded-lg from-black/90 to-transparent p-4 flex flex-col justify-end">
          <div className="border-l-4 border-[#AF0808] px-3">
            <p className="text-white text-sm">
              Cici Dian Eviliya | January 07, 2025
            </p>
            <h1 className="text-white font-bold text-md">
              Often Thought to be Showing Off Their Bodies, It Turns Out This is
              the Dancers' Effort to Preserve Culture
            </h1>
          </div>
        </div>
      </div>

      <div className="grid col-span-2 row-span-1 relative h-52">
        <img
          src="https://cdn.antaranews.com/cache/1200x800/2024/12/05/1000059187.jpg.webp"
          alt="News"
          className="w-full h-52 object-cover object-center rounded-lg"
        />
        <div className="absolute text-sm -left-3 rounded-br-full rounded-tr-full top-3 shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] px-5 bg-white text-[#B20607] font-semibold p-2">
          2 months ago
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t rounded-lg from-black/90 to-transparent p-4 flex flex-col justify-end">
          <div className="border-l-4 border-[#AF0808] px-3">
            <p className="text-white text-sm">
              Afif Yuliansyah | December 6, 2024
            </p>
            <h1 className="text-white font-bold text-md">
              Kolintang Recognized by UNESCO as Intangible Cultural Heritage,
              Great Responsibility Awaits
            </h1>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-4 h-52">
        {/* Image 3 */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1668214078623-bbd015a65df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZG9uZXNpYW4lMjBjdWx0dXJlfGVufDB8fDB8fHww"
            alt="News"
            className="w-full h-52 object-cover object-center rounded-lg"
          />
          <div className="absolute text-sm -left-3 rounded-br-full rounded-tr-full top-3 shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] px-5 bg-white text-[#B20607] font-semibold p-2">
            4 months ago
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t rounded-lg from-black/90 to-transparent p-4 flex flex-col justify-end">
            <div className="border-l-4 border-[#AF0808] px-3">
              <p className="text-white text-sm">
                Indah Novita Dewi | Dec 23, 2024
              </p>
              <h1 className="text-white font-bold text-sm">
                Preserving Traditional Dance Through...
              </h1>
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1604973104381-870c92f10343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aWt8ZW58MHx8MHx8fDA%3D"
            alt="News"
            className="w-full h-full object-cover object-center rounded-lg"
          />
          <div className="absolute text-sm -left-3 rounded-br-full rounded-tr-full top-3 shadow-[0px_4px_4px_3px_rgba(0,0,0,0.25)] px-5 bg-white text-[#B20607] font-semibold p-2">
            4 months ago
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t rounded-lg from-black/80 to-transparent p-4 flex flex-col justify-end">
            <div className="border-l-4 border-[#AF0808] px-3">
              <p className="text-white text-sm">
                Vinsensius S Fil | October 2, 2024
              </p>
              <h1 className="text-white font-bold text-sm">
                Let's Love Batik! Not Just a Cloth, This is Our Identity!
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLatestArticle;
