import React from 'react';
import { SlArrowDown } from "react-icons/sl";

const AskedQuestionsData = [ 
      { que:"What is the reason for utilizing an AI-powered text-to-image generator?", p:"No matter if you're a marketer, designer, or creative individual, you can quickly transform your creative concepts into tangible designs without investing time in designing from the ground up. With AI-generated images from text, you can effortlessly enhance your designs at no cost and in a matter of minutes." }, 
         
      { que:"What is Tweet Riser?", p:"No matter if you're a marketer, designer, or creative individual, you can quickly transform your creative concepts into tangible designs without investing time in designing from the ground up. With AI-generated images from text, you can effortlessly enhance your designs at no cost and in a matter of minutes." }, 
      { que:"Will Tweet Riser help me build an audience and grow my account?", p:"No matter if you're a marketer, designer, or creative individual, you can quickly transform your creative concepts into tangible designs without investing time in designing from the ground up. With AI-generated images from text, you can effortlessly enhance your designs at no cost and in a matter of minutes." }, 
      { que:"Can I customize the messages sent by Tweet Riser?", p:"No matter if you're a marketer, designer, or creative individual, you can quickly transform your creative concepts into tangible designs without investing time in designing from the ground up. With AI-generated images from text, you can effortlessly enhance your designs at no cost and in a matter of minutes." }, 
      { que:"How do I integrate Tweet Riser with Twitter / X?", p:"No matter if you're a marketer, designer, or creative individual, you can quickly transform your creative concepts into tangible designs without investing time in designing from the ground up. With AI-generated images from text, you can effortlessly enhance your designs at no cost and in a matter of minutes." } 
]

function AskedQuestions() {
  return (
    <section className='md:mt-[131px] mt-20 max-w-[1124px] mx-auto px-5'>
      <h1 className='lg:text-5xl md:text-4xl text-2xl font-bold md:leading-[66px] leading-8 xl:mb-12 lg:mb-10 md:mb-7 mb-5  text-center'>Frequently Asked Questions</h1>
      <div>
        {
          AskedQuestionsData.map((data , index) => (
            <details key={index} className='p-4 rounded mb-4 group max-w-[1076px] mx-auto'>
                <summary className='flex justify-between items-center cursor-pointer font-semibold md:text-xl text-lg md:mb-3 mb-2'>
                    <span className='max-w-[896px]'>{data.que}</span>
                    <SlArrowDown className="mt-10 group-open:rotate-180"></SlArrowDown>
                </summary>
                <p className='font-normal font-open font-base leading-[29px] text-[#9CA3AF] max-w-[807px]'>{data.p}</p>
            </details>
          ))
        }
      </div>
    </section>
  );
}

export default AskedQuestions;
