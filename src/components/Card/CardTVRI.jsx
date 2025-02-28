const CardTVRI = () => {
  return (
    // <div className="flex items-center justify-center mt-16">

      <div className="relative w-[40%] bg-gradient-to-r from-dark-red to-light-red h-72 rounded-tl-full">
        <div className="absolute  right-12 -top-12">
          <img
            src="https://cdn.antaranews.com/cache/1200x800/2023/11/23/WhatsApp-Image-2023-11-23-at-14.44.23.jpeg.webp"
            className="rounded-tr-full rounded-tl-full object-cover w-72 h-72 border-8 border-white rotate-6"
            alt=""
          />
        </div>
        <div className="absolute -left-3 bottom-0 -rotate-6">
          <img
            src="https://ambonews.com/sites/default/files/article/2024/12/WhatsApp%20Image%202024-12-20%20at%2009.37.09.jpeg"
            alt=""
            className="w-64 object-cover rounded-tl-4xl rounded-b-4xl rounded-tr-full border-8 border-white"
          />
        </div>
      </div>
    // </div>
  );
};

export default CardTVRI;
