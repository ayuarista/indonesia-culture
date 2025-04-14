import React from "react";

const VideoAllProvince = ({video}) => {
  return (
    <div className="flex flex-col items-center justify-center pt-10">
      <div className="relative">
      <div className="absolute bg-gradient-to-b from-light-red to-dark-red h-[20.5rem] w-96 -top-4 -right-5"></div>
      <div className="absolute bg-gradient-to-b from-light-red to-dark-red h-40 w-68 -bottom-4 -left-5"></div>
      <div className="absolute w-1 h-28 border-4 border-light-red p-1 top-16 -left-8 rounded-full shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]"></div>
      <div className="absolute w-32 border-4 border-light-red p-1 -bottom-6 right-24 rounded-full shadow-[0px_4px_4px_2px_rgba(0,0,0,0.25)]"></div>
        {video}
      </div>
    </div>
  );
};

export default VideoAllProvince;
