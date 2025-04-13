import React from 'react'

const HeroProvince = () => {
  return (
    <div
    className="w-full md:min-h-[20vh] min-h-[85vh] lg:min-h-[70vh] xl:min-h-[89vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/60"
    style={{
      backgroundImage: `url(${"https://images.unsplash.com/photo-1698824554110-7187e3068031?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
    }}
  >
    <div className="lg:px-6 text-center">
      <div className="mt-10">
        <div className="items-center mb-3">
          <h1 className="font-third text-white text-2xl lg:text-5xl xl:text-4xl md:text-3xl font-bold leading-tight text-center">
          From Sabang to Merauke <br /> A Cultural Adventure
          </h1>
        </div>
        <p className="max-w-sm lg:max-w-xl text-[11px] lg:text-sm xl:text-lg mb-8 text-center xl:mx-auto md:mx-auto">
        "Every step is a story. Every place is a heritage. Dances, traditional fabrics, languages, and amazing rituals—all are waiting for you to discover."
        </p>
      </div>
    </div>
  </div>
  )
}

export default HeroProvince