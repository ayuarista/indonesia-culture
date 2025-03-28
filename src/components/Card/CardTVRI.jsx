const CardTVRI = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-center mt-16 w-full">
      <div className="flex flex-col mx-8 mt-6 lg:mt-0 lg:mx-20">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="flex-1 border-t-2 border-red-700"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/TVRILogo2019.svg/170px-TVRILogo2019.svg.png" alt="" className="mx-5 w-24 lg:w-28" />
          <div className="flex-1 border-t-2 border-red-700"></div>
        </div>
        <h1 className="font-bold text-light-red text-2xl lg:text-3xl text-center lg:text-left mt-2">Republic of Indonesia Television (TVRI)</h1>
        <p className="font-medium text-black text-pretty mt-3 max-w-[25rem] lg:max-w-[85%] text-justify text-sm">RRI, established on September 11, 1945, is Indonesia's national radio station that provides news, culture, and education. As a member of ABU, RRI plays a role in international content exchange and development of broadcasting technology. </p>
      </div>
      <div className="relative w-full bg-gradient-to-r from-dark-red to-light-red h-72 rounded-tl-full">
        <div className="absolute right-8 lg:right-12 -top-10">
          <img
            src="https://cdn.antaranews.com/cache/1200x800/2023/11/23/WhatsApp-Image-2023-11-23-at-14.44.23.jpeg.webp"
            className="rounded-tr-full rounded-tl-full object-cover w-60 h-60 lg:w-72 lg:h-72 border-8 border-white rotate-6"
            alt=""
          />
          <div className="absolute bg-white border-4 border-dashed -bottom-5 right-0 border-light-red p-7 rounded-full"></div>
        </div>
        <div className="absolute left-0 lg:-left-2 bottom-0">
          <img
            src="https://ambonews.com/sites/default/files/article/2024/12/WhatsApp%20Image%202024-12-20%20at%2009.37.09.jpeg"
            alt=""
            className="w-56 lg:w-64 object-cover rounded-tl-4xl rounded-b-4xl rounded-tr-full border-8 border-white"
          />
        </div>
      </div>
    </div>
  );
};

export default CardTVRI;
