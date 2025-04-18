import React from 'react'

const HeroProvince = () => {
  return (
    <div
    className="w-full min-h-[50vh]  md:min-h-[30vh] lg:min-h-[70vh] xl:min-h-[60vh] bg-cover bg-center flex justify-center items-center text-white bg-blend-multiply bg-black/60"
    style={{
      backgroundImage: `url(${"https://images.unsplash.com/photo-1513415756790-2ac1db1297d0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})`,
    }}
  >
    <div className="lg:px-6 text-center">
      <div className="mt-10">
        <div className="items-center mb-3">
          <h1 className="font-third text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-center">
          From Sabang to Merauke <br /> A Cultural Adventure
          </h1>
        </div>
        <p className="max-w-sm md:max-w-md lg:max-w-xl text-[11px]/relaxed md:text-xs/relaxed lg:text-sm/relaxed xl:text-lg/relaxed mb-8 text-center xl:mx-auto md:mx-auto">
        "Every step is a story. Every place is a heritage. Dances, traditional fabrics, languages, and amazing rituals—all are waiting for you to discover."
        </p>
      </div>
    </div>
  </div>
  )
}

export default HeroProvince