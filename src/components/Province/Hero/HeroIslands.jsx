import React from 'react'

const HeroIslands = ({image, islands, text}) => {
  return (
    <div
    className="w-full md:min-h-[20vh] min-h-[85vh] lg:min-h-[70vh] xl:min-h-[89vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/40"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div className="lg:px-6 text-center">
      <div className="mt-10">
        <div className="items-center mb-3">
          <h1 className="font-third text-white text-2xl lg:text-6xl xl:text-4xl md:text-3xl font-bold leading-tight text-center">
          {islands}
          </h1>
        </div>
        <p className="max-w-sm lg:max-w-xl text-[11px] lg:text-sm xl:text-lg mb-8 text-center xl:mx-auto md:mx-auto">
        {text}
        </p>
      </div>
    </div>
  </div>
  )
}

export default HeroIslands