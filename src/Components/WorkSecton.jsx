import React from 'react'
import { BiParagraph } from 'react-icons/bi'

const WorkData = [
    {
        id:1,
        img:"1.svg",
        title:"Type a Prompt",
        paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some."
    },
    {
        id:2,
        img:"2.svg",
        title:"Generate Twitter",
        paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some."
    },
    {
        id:3,
        img:"3.svg",
        title:"Export or create",
        paragraph:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration some."
    }
]

function WorkSecton() {
  return (
    <section className='max-w-[1462px] mx-auto lg:mt-30 md:mt-20 mt-15'>
        <div className=" flex items-center justify-center">
            <h2 className='md:text-5xl text-4xl  font-bold'>
                How it works
            </h2>
        </div>
        <div className='flex items-center justify-center mt-15 lg:gap-15 gap-10 lg:flex-row flex-col'>
            {WorkData.map((data , index)=>(
                <div key={index} className='flex items-center justify-center flex-col max-w-[366px]'>
                    <div className='bg-blue-400 rounded-full size-[121px] flex justify-center items-center relative mb-10'>
                         <img src={data.img} alt="" />
                         <span className="absolute top-0 left-0 h-[35px] w-[35px] bg-[#ffffff] rounded-full flex justify-center items-center text-[#EA00F5] text-xl font-semibold">{data.id}</span>
                    </div>
                    <h3 className='text-2xl font-bold text-[#ffffff] mb-5'>{data.title}</h3>
                    <p className='text-center font-open text-[#9CA3AF] font-normal text-base'>{data.paragraph}</p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default WorkSecton