const CardRRI = () => {
  return (
    <div className="flex items-center mt-20">
      <div className="relative w-1/2 left-28">
        <img src="https://lensaborneo.com/wp-content/uploads/2024/01/WhatsApp-Image-2024-01-17-at-16.40.29_640b0e86-750x563.jpg" className="rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl object-cover w-96 h-full" alt="" />
        <div className="absolute bg-light-red h-1/3 -left-6 bottom-20 rounded-tl-full rounded-bl-full p-1.5"></div>
      </div>
      <div className="flex flex-col w-1/2">
        <div className="flex items-center w-1/2">
          <div className="flex-1 border-t-2 border-red-700"></div>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/RRI_Logo_2023.svg/1200px-RRI_Logo_2023.svg.png" alt="" className="mx-5 w-28" />
          <div className="flex-1 border-t-2 border-red-700"></div>
        </div>
        <h1 className="font-bold text-light-red text-3xl">Radio Republic of Indonesia (RRI)</h1>
        <p className="font-medium text-black text-pretty mt-2">RRI, established on September 11, 1945, is Indonesia's national radio station that provides news, culture, and education. As a member of ABU, RRI plays a role in international content exchange and development of broadcasting technology. </p>
      </div>
    </div>
  );
};

export default CardRRI;
