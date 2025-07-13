 import React from 'react';
import { IoIosInfinite } from "react-icons/io";
import { GoPencil } from "react-icons/go";
import { SlArrowRight } from "react-icons/sl";



const TableHead = [ "Aims" , "Claim/Spend 🕒" , "Promo Cost" ,"Revenue" , "Profit" ,"ROI"]
const TableData = [
  {
    aims: [88, 244],
    spend: 0.69,
    cost: 75.0,
    revenue: [94.0, 2],
    profit: 19.0,
    roi: 25.33,
  },
  {
    aims: [203, 329],
    spend: 0.83,
    cost: 75.0,
    revenue: [600.44, 10],
    profit: 525.44,
    roi: 700.59,
  },
  {
    aims: [105, 569],
    spend: 0.99,
    cost: 75.0,
    revenue: [182.81, 7],
    profit: 107.81,
    roi: 143.75,
  },
  {
    aims: [204, 408],
    spend: 1.19,
    cost: 75.0,
    revenue: [485.46, 6],
    profit: 410.46,
    roi: 547.28,
  },
  {
    aims: [586, 819],
    spend: 0.63,
    cost: 75.0,
    revenue: [492.71, 10],
    profit: 417.71,
    roi: 556.95,
  },
  {
    aims: [293, 970],
    spend: 2.01,
    cost: 75.0,
    revenue: [1720.07, 26],
    profit: 1645.07,
    roi: 2193.43,
  },
];

function FineTuned() {
  return (
    <section className="max-w-[1662px] mx-auto px-4">
      <div className="flex items-center justify-center xl:gap-20 lg:gap-10 lg:flex-row flex-col">

        {/* left table section */}

        <div className="overflow-x-auto 2xl:overflow-visible w-full lg:flex-1/2 lg:px-5 md:px-20 sm:px-15 px-10 ">
          <table className='min-w-[800px] bg-[#151515] '>
            <thead className=' bg-[rgb(34,34,37)]'>
              <tr>
                {TableHead.map((heading , index)=>(
                    <th className='' key={index}>
                      <div className='py-4  px-2  text-[#8c8c8e] font-normal text-base flex items-center justify-start'>
                        <span className='border-l border-[#8c8c8e] pl-2'>{heading}</span>
                      </div> 
                    </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.map((data, index) => (
                <tr key={index}>
                  <td className='pl-5 relative after:absolute after:h-10 after:w-[1px] after:left-1.5 after:bg-[#8c8c8e] after:top-4'>
                      <div className='flex justify-center items-start flex-col px-1 py-3 '>
                          <div className='flex items-center justify-center gap-1 text-base font-normal'>
                            <span className='text-gray-300'>{data.aims[0]}</span> <span className='text-[#818181]'>/</span>  <IoIosInfinite className='text-[#818181]' />
                          </div>
                        <div  className='text-[#818181] font-normal text-sm'>
                              (<span>{data.aims[1]}</span>)
                        </div>
                      </div>
                    </td>
                  <td>
                      <div className=' relative after:absolute after:h-10 after:w-[1px] after:left-2 after:bg-[#8c8c8e] after:top-1'>
                          <div className='flex justify-start px-5 py-3 items-center text-gray-300'>
                            {data.spend}%
                          </div>
                      </div>
                    </td>
                  <td>
                      <div className=' relative after:absolute after:h-10 after:w-[1px] after:left-2 after:bg-[#8c8c8e] after:top-1'>
                          <div className='flex justify-start px-5 py-3 items-center text-gray-300 gap-2'>
                            $ {data.cost} 
                            <div className='relative after:absolute after:w-4 after:h-[1px] after:left-0 after:-bottom-1 after:bg-[#2058EF]'>
                              <div>
                                <GoPencil className='text-[#2058EF]'/>
                              </div>  
                            </div> 
                          </div>
                      </div>
                    </td>
                    <td>
                      <div className=' relative after:absolute after:h-10 after:w-[1px] after:left-2 after:bg-[#8c8c8e] after:top-3'>
                          <div className='flex justify-start px-5 py-3 items-center text-gray-300'>
                            <div>
                              <div>$ {data.revenue[0]}</div> 
                              <div className="text-sm">from {data.revenue[1]} fans</div>
                            </div>
                          </div>
                      </div>
                    </td>
                    <td>
                      <div className=' relative after:absolute after:h-10 after:w-[1px] after:left-2 after:bg-[#8c8c8e] after:top-1'>
                          <div className='flex justify-start px-5 py-3 items-center text-[#00CD9F]'>
                            $ {data.profit}
                          </div>
                      </div>
                    </td> 
                    <td>
                      <div className=' relative after:absolute after:h-10 after:w-[1px] after:left-2 after:bg-[#8c8c8e] after:top-1'>
                          <div className='flex justify-start px-5 py-3 items-center text-[#00CD9F]'>
                            {data.roi}%
                          </div>
                      </div>
                    </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* right section */}
        
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
            <button className='flex items-center justify-start mt-4  text-[#EA00F5] font-semibold cursor-pointer'>Learn More <SlArrowRight className="text-xs ml-3" /></button>
        </div>
      </div>
    </section>
  );
}

export default FineTuned;
