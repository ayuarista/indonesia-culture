import React from 'react'

const HeadingProvince = ({title}) => {
  return (
    <div className="flex items-center justify-center pt-16">
        <div className="flex-1 ml-28 border-t-2 border-red-700"></div>
        <h2 className="mx-4 text-2xl md:text-3xl lg:text-[32px] xl:text-4xl bg-gradient-to-r from-0% from-dark-red to-80% to-light-red bg-clip-text text-transparent font-bold">
          {title}
        </h2>
        <div className="flex-1 mr-28 border-t-2 border-red-700"></div>
      </div>
  )
}

export default HeadingProvince