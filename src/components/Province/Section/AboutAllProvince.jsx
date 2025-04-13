import React from 'react'
const AboutAllProvince = ({img1, img2, img3, img4, title, text, text2, radius, radius2, radius3, radius4  }) => {
  return (
    <div className='pt-14'>
        <div className="max-w-screen-xl flex flex-col lg:flex-row items-start justify-center gap-10 relative mx-32">
            <div className="relative w-full lg:w-1/2">
                <div className="absolute left-5 top-0">
                    <img src={img1} alt="" className={`object-cover w-48 h-68 ${radius}`}/>
                </div>
                <div className="absolute left-[14.6rem] top-0">
                    <img src={img2} alt="" className={`object-cover w-48 h-40 ${radius2}`}/>
                </div>
                <div className="absolute left-5 top-[18.4rem]">
                    <img src={img3} alt="" className={`object-cover w-48 h-40 ${radius3}`}/>
                </div>
                <div className="absolute left-[14.6rem] top-[11.5rem]">
                    <img src={img4} alt="" className={`object-cover w-48 h-56 ${radius4}`}/>
                </div>
                <div className="absolute w-32 border-4 border-light-red p-2 left-[14.6rem] top-[26.5rem] rounded-full"></div>
            </div>
            <div className="relative">
                <h1 className='text-2xl md:text-3xl lg:text-2xl xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold max-w-xs'>{title}</h1>
                <p className='text-light-gray mt-4 text-sm lg:max-w-xs text-pretty text-justify lg:text-[15px]/relaxed xl:text-lg'>{text}</p>
                <p className='text-light-gray mt-4 text-sm lg:max-w-xs text-pretty text-justify lg:text-[15px]/relaxed xl:text-lg'>{text2}</p>
            </div>
        </div>
    </div>
  )
}

export default AboutAllProvince