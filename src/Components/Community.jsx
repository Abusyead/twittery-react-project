import React from 'react'
import { FaDiscord } from "react-icons/fa";

import Flower from "/flower.svg"

function Community() {
  return (
    <section className='md:mt-15 mt-10 bg-[#07031C'>
        <div className='max-w-[777px]  mx-auto py-[108px] flex items-center justify-center flex-col px-3'>
            <div className='flex items-center justify-center gap-3 flex-col  text-center sm:flex-row'>
              <img src={Flower} alt="" />
              <h3 className='xl:text-5xl md:text-4xl text-3xl font-bold'>Join Our Community</h3>
            </div>
            <p className='mt-2 py-2 text-[#86909D] text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit Quis non fugit</p>
            <button className="mt-5 [background:linear-gradient(100.66deg,#531DD0_22.73%,#EA00F5_91.34%)] flex items-center justify-center w-[226px] h-[60px] rounded-full cursor-pointer"><span className="  hover:w-[224px] hover:h-[58px]  hover:rounded-full hover:bg-black flex items-center justify-center gap-2">JOIN DISCORD<FaDiscord /></span></button>
        </div>
    </section>
  )
}

export default Community