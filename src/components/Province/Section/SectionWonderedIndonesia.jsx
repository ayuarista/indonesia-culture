import React from "react";

const SectionWonderedIndonesia = () => {
  return (
    <div className="pt-16 bg-gradient-to-b from-red-100 to-transparent">
      <div className="flex flex-col lg:flex-row xl:flex-row items-start justify-center gap-20">
        <div className="relative">
          <div className="absolute bg-red-800 h-[22rem] w-56 -top-3 -left-5"></div>
          <img
            src="https://images.unsplash.com/photo-1566409031818-9508be68fc74?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full h-[27rem] object-cover   relative"
          />
          <div className="absolute w-32 border-4 border-white bg-light-red p-1 -bottom-7 rounded-full shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]"></div>
          <div className="absolute w-16 border-4 border-white bg-light-red p-1 -bottom-7 right-20 rounded-full shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]"></div>
        </div>
        <div>
          <h1 className="text-3xl font-third font-bold bg-clip-text bg-gradient-to-r from-light-red to-dark-red text-transparent">
            Ever Wondered Why Indonesia <br /> Has So Much Culture?
          </h1>
          <p className="text-abu mt-4 text-sm lg:max-w-xl lg:text-[15px]/relaxed xl:text-lg">
            Indonesia’s rich culture comes from its unique geography and
            history. As an archipelago of over 17,000 islands, it has become
            home to more than 300 ethnic groups, each with their own traditions,
            languages, beliefs, and art forms.
          </p>
          <p className="text-abu mt-4 text-sm lg:max-w-xl lg:text-[15px]/relaxed xl:text-lg">
            For centuries, Indonesia has also been a crossroads of civilizations
            — influenced by Indian, Chinese, Arab, and European cultures through
            trade, migration, and colonization. These outside influences blended
            beautifully with local wisdom, creating a vibrant cultural mosaic
            that lives on today.
          </p>
          <p className="text-abu mt-4 text-sm lg:max-w-xl lg:text-[15px]/relaxed xl:text-lg">
          From the sacred rituals of Bali to the colorful festivals of Nusa Tenggara, every region in Indonesia offers a glimpse into a story that has been told for generations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionWonderedIndonesia;
