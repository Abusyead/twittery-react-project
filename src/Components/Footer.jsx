import React from 'react'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

import TwitteryFooter from "/Twitteryfooter.svg"

const FooterData =[
   {
    h2:"Company",
    p:["Jobs","Privacy","Terms","Cookies","Contact Support"]
   },
   {
    h2:"Create",
    p:["Social Post","Mockup Make","Animation Gif","Photo Lyric","Cartoon"]
   }
]

const FooterIcon = [<FaTwitter />,<FaDiscord />,<FaInstagram />,<FaTiktok />]

const FooterNav = ["Terms" , "Privacy"]

function Footer() {
  return (
    <section className='max-w-[1300px] mx-auto md:mt-15 sm:mt-12 mt-4 '>
        <div className=''>
            <div className="md:grid flex justify-center items-center flex-col xl:grid-cols-3 md:grid-cols-2  grid-cols-1 sm:px-5 px-10 gap-10 mb-15">
                <div className='max-w-[359px] flex justify-center md:items-start items-center flex-col'>
                    <img src={TwitteryFooter} />
                    <p className='text-[#9CA3AF] font-normal font-base leading-[29px] my-2 md:text-start text-center'>
                        There are many variations of passages of Lorem Ipsum available but  majority have suffered 
                        alteration in some form by injected.
                    </p>
                    <div className=' flex gap-4'>
                       {FooterIcon.map((data,index) =>(
                        <div className='size-[50px] flex items-center justify-center bg-[#5950894D] rounded-[10px] cursor-pointer mt-8' key={index}>
                          <span className='text-[#EA00F5]' >{data}</span>
                        </div>
                          
                       ))}
                    </div>
                </div>


                <div className='max-w-[500px]  flex justify-between md:gap-6 sm:gap-30 gap-0 md:px-10 sm:px-0 sm:flex-row flex-col '>
                    {FooterData.map((data , index) =>(
                      <div key={index} className='flex sm:items-start items-center justify-center flex-col mt-5'>
                        <h2 className='text-2xl font-semibold mb-3'>{data.h2}</h2>
                        <div className='flex sm:items-start items-center justify-center flex-col mt-5'>
                          {data.p.map(( pdata , i) =>(
                            <p key={i} className='text-base font-normal leading-[46px] text-[#9CA3AF]my-3'>{pdata}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                </div>
                <div className='max-w-[329px] flex justify-center md:items-start items-center flex-col'>
                    <h2 className='text-2xl font-semibold mb-3'>Join Newslatter</h2>
                    <p className='font-base text-base text-[#9CA3AF] leading-[29px] md:text-start text-center'>signup for our newsletter to get the latest News in your inbox.</p>

                    <div className='mt-8 flex items-center justify-between   max-w-[325px] h-[55px] px-2 border border-[#FFFFFF33] rounded-[3px]'>
                      <input type="text" className="outline-none p-2" placeholder='Enter Your Email'/>
                      <button className='bg-[#EA00F5] w-[72px] h-[45px] sm:flex hidden justify-center items-center rounded-[10px] cursor-pointer '><IoIosSend className='size-[22.5px]' /></button>
                    </div>
                    <div className='flex justify-center'>
                      <button className='bg-[#EA00F5] w-[72px] h-[45px] flex sm:hidden justify-center items-center rounded-[10px] cursor-pointer mt-5'><IoIosSend className='size-[22.5px]' /></button>
                    </div>
                    

                </div>
            </div>

            <div className='flex justify-between items-center md:flex-row flex-col pb-10 px-5'>
                <div className='flex justify-start sm:gap-20 gap-8 sm:flex-row flex-col'>
                    <p className='text-[#9CA3AF]'>Copyright - All Rights Reserved.</p>
                    <div className='flex items-center justify-center gap-10'>
                        {FooterNav.map((data , index)=>(
                          <a className='text-[#9CA3AF]' href="#" key={index}>{data}</a>
                        ))}
                    </div>
                </div>
                <div className='text-[#9CA3AF] md:mt-0 mt-7'>
                    Made with  By <a href="">Twittery</a> 
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer