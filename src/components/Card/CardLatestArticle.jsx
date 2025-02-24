const CardLatestArticle = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-2">
      <div className="grid grid-cols-1 row-span-2 relative p-3">
        <img
          src="https://images.unsplash.com/photo-1666587128445-4623f8f8f033?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8amF2YSUyMGRhbmNlfGVufDB8fDB8fHww"
          alt=""
          className="w-full h-44 rounded-lg"
        />
        <div className="absolute -left-2 rounded-br-full rounded-tr-full top-2 shadow-xl bg-white text-[#B20607] font-medium p-2">
          Latest
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent">
          <div className="border border-l-[#B20607] mx-3">
            <div className="inline">
              <p className="text-xs border-l mx-3">Cici Dian Eviliya</p>
              <p className="text-xs">January 07, 2025</p>
            </div>
            <h1 className="text-xl font-bold">
              Often Thought to be Showing Off Their Bodies, It Turns Out This is
              the Dancers' Effort to Preserve Culture
            </h1>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 grid-cols-2">
        <div className="grid grid-rows-1 col-span-2 relative p-3">
          <img
            src="https://cdn.antaranews.com/cache/1200x800/2024/12/05/1000059187.jpg.webp"
            alt=""
            className="w-full rounded-lg"
          />
          <div className="absolute -left-2 rounded-br-full rounded-tr-full top-2 shadow-xl bg-white text-[#B20607] font-medium p-2">
            2 months ago
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent">
            <div className="border border-l-[#B20607] mx-3">
              <div className="inline">
                <p className="text-xs border-l mx-3">Afif Yuliansyah</p>
                <p className="text-xs">December 6, 2024</p>
              </div>
              <h1 className="text-xl font-bold">
                Kolintang Recognized by UNESCO as Intangible Cultural Heritage,
                Great Responsibility Awaits
              </h1>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1668214078623-bbd015a65df7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGluZG9uZXNpYW4lMjBjdWx0dXJlfGVufDB8fDB8fHww"
              alt=""
              className="w-full object-cover"
            />
            <div className="absolute -left-2 rounded-br-full rounded-tr-full top-2 shadow-xl bg-white text-[#B20607] font-medium p-2">
              2 months ago
            </div>
            <div className="border border-l-[#B20607] mx-3">
              <div className="inline">
                <p className="text-xs border-l mx-3">Indah Novita Dewi </p>
                <p className="text-xs">Dec 23, 2024</p>
              </div>
              <h1 className="text-xl font-bold">
                Preserving Traditional Dance Through...
              </h1>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1604973104381-870c92f10343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aWt8ZW58MHx8MHx8fDA%3D"
              alt=""
              className="w-full object-cover"
            />
            <div className="absolute -left-2 rounded-br-full rounded-tr-full top-2 shadow-xl bg-white text-[#B20607] font-medium p-2">
              2 months ago
            </div>
            <div className="border border-l-[#B20607] mx-3">
              <div className="inline">
                <p className="text-xs border-l mx-3">Indah Novita Dewi </p>
                <p className="text-xs">Dec 23, 2024</p>
              </div>
              <h1 className="text-xl font-bold">
                Preserving Traditional Dance Through...
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLatestArticle;
