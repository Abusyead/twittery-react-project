import React from 'react'

import { SlArrowRight } from "react-icons/sl";
import DobleColor from './Common/DobleColor';


const EarthData = [

    {
        date :"10:13-03/04/2024",
        view:"1.5M",
        reposts:"34 ",
        quotes:"6",
        like:"3.5k",
        bookmarks:"256"
    },
    {
        date :"13:46 03/04/2024",
        view:"272K",
        reposts:"220 ",
        quotes:"28 ",
        like:"2.5k",
        bookmarks:"1k"
    },
    {
        date :"12:37-06/12/2023",
        view:"1M",
        reposts:"75 ",
        quotes:"16",
        like:"971",
        bookmarks:"71"
    },
    {
        date :"11:34-03/04/2024",
        view:"2.5M",
        reposts:"2.k ",
        quotes:"336",
        like:"27k",
        bookmarks:"56"
    }
]

function EarthSection() {
  return (
    <section className='relative'>

        <div className='absolute xl:left-[800px] lg:left-[500px] md:left-[300px]  top-[40px]'>
            <DobleColor />
        </div>

        <div className='max-w-[1418px] mx-auto lg:mt-[152px] md:mt-[100px] sm:mt-[50px]'>
            <div className="flex justify-center items-center py-12 xl:gap-20 lg:gap-15 lg:flex-row flex-col lg:px-2 md:px-10 px-8">

           {/* left section */}

                <div className='lg:flex-1/2 lg:px-5 md:px-20 sm:px-15 px-10 lg:mt-0 xl:mt-20 md:mt-15 mt-10'>
                    <h2 className="max-w-[807px] font-bold xl:text-5xl lg:text-4xl md:text-4xl text-3xl  xl:leading-[66px] leading-[55px]">
                        Fine-tuned by agency owners We understand how to get results for your models
                    </h2>
                    <p className='mt-5 font-open text-[#9CA3AF] text-base font-normal leading-[29px]'>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit conubia mollis, urna ultrices metus diam volutpat duis senectus fusce porttitor, odio sed arcu massa fames euismod vehicula aliquam. Lobortis massa hac inceptos volutpat iaculis porttitor vel potenti in dictum tempor, eleifend torquent mi ut at curabitur aenean quam nunc fames.
                    </p>
                    <p className="mt-5 font-open text-[#9CA3AF] text-base font-normal leading-[29px]">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit conubia mollis, urna ultrices metus diam volutpat duis senectus fusce porttitor, odio sed arcu massa fames euismod vehicula aliquam
                    </p>
                    <button className='flex items-center justify-start mt-4  text-[#EA00F5] font-semibold cursor-pointer'>Learn More <SlArrowRight className="text-xs ml-3" />
                    </button>
                </div>

                {/* right section */}
                
                <div className='flex-1/2 w-full lg:mt-0 mt-10 relative z-10'>
                    <div className='max-w-[619px] lg:mx-0 mx-auto  bg-[#000000] p-5'>
                        {EarthData.map((data , index) =>(  
                            <p key={index} className='text-[#707478] leading-[45px] break-words'>
                                <span>{data.date} </span>From Earth 
                                <span className='px-1 text-[#DBDBDB]'>{data.view}</span>Views 
                                <span className='px-1 text-[#DBDBDB]'>{data.reposts}</span>Resposts 
                                <span className='px-1 text-[#DBDBDB]'>{data.quotes}</span>Quotes
                                <span className='px-1 text-[#DBDBDB]'>{data.like}</span>Likes
                                <span className='px-1 text-[#DBDBDB]'>{data.bookmarks}</span>Bookmarks
                            </p>
                        
                    ))}
                    </div>
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default EarthSection