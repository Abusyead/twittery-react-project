import React from 'react'
import { FaXTwitter } from "react-icons/fa6";

function HeroArea() {
  return (
    <section>
        <div className="container mt-[207px] pb-[241px] mx-auto flex items-center justify-center flex-col">
            <p className='flex justify-center items-center gap-3 text-base uppercase'><span className='w-[70px] h-[35px] rounded-full bg-[#E224DB] flex items-center justify-center text-base font-bold'>New</span>5 Day FREE Trial to get your First 50 Only Fans subs from <FaXTwitter /></p>
            <h1 className='mt-[29px] max-w-[1006px]  leading-[90px] text-[72px] font-semibold  text-center'>Maximum <FaXTwitter className="text-[65px] inline-block" /> Traffic, Earn Maximum Cashflow.</h1>
            <p className="mt-4 max-w-[772px] text-center font-open font-normal text-[18px] leading-[36px] text-[#EFEDFD]">Lorem ipsum dolor sit amet consectetur adipiscing elit faucibus, pretium feugiat morbi id nisi ligula u     rna, condimentum ante mollis interdum vulputate odio sodales.</p>
            <button className="w-[200px] h-[60px] [background:linear-gradient(100.66deg,#531DD0_22.73%,#EA00F5_91.34%)] rounded-full cursor-pointer flex items-center justify-center mt-[43px]"><span className="w-[198px] h-[58px] hover:bg-black flex items-center justify-center rounded-full">Get Started New</span></button>
        </div>
    </section>
  )
}

export default HeroArea