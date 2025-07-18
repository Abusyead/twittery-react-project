import React from 'react'
import videoImg from "/video-img.png"
import Polygon from "/Polygon.svg"

function VideoSection() {
  return (
    <section className="lg:mt-30 md:mt-20 mt-15 ">
      <div className='w-full max-h-[698px] relative'>
          <img
            src={videoImg}
            alt=""
            className="brightness-50 w-full object-cover"
          />
          <div className="absolute w-full h-full flex justify-center items-center top-0 left-0 right-0 bottom-0 flex-col">
              <h3>Watch Tutorial</h3>
              <div className='sm:mt-5 mt-3 text-base md:text-2xl font-semibold  lg:size-25 md:size-20 sm:size-15 size-10 border-1 rounded-full flex justify-center items-center'>
                 <img src={Polygon} alt="" />
              </div>

          </div>
      </div>
    </section>
  )
}

export default VideoSection

 