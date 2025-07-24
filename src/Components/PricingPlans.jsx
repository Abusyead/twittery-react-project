import React from 'react'
import DobleColor from './Common/DobleColor'

const PricingData = [
    {
        img:"Vector.svg",
        h3:"Agency Plan",
        dolor:"100$",
        p:["Unlimited accs (pay per acc)","Unlimited RTs" , "1 hour support ","RT group trading network"," Private members group "," 1-1 onboarding call ","25x cheaper than VAs"," Cancel anytime"],
        button:"Start free 7 days trial"
    },
    {
        img:"Vector-2.svg",
        h3:"Get DFY Plan",
        dolor:"300$",
        p:["Unlimited accs (pay per acc)","Unlimited RTs" , "1 hour support ","RT group trading network"," Private members group "," 1-1 onboarding call ","25x cheaper than VAs"," Cancel anytime"],
        button:"show more"
    }
 
]

function PricingPlans() {
  return (
    <section className='relative'>
        <div className='absolute lg:left-[400px] md:left-[250px] left-5 lg:top-[440px] md:top-[200px] top-40'>
            <DobleColor /> 
        </div>
        <div className='lg:mt-30 md:mt-20 mt-15 max-w-[1468px] mx-auto'>
        
            <div className='flex justify-between items-center 2xl:gap-30 xl:gap-23 gap-10 xl:flex-row flex-col'>
                <div className="flex-1/3 flex flex-col items-center justify-center px-5 md:px-8 lg:px-4 xl:px-0">
                    <div>
                        <h4 className="text-base font-semibold uppercase text-[#E224DB] font-outfit">PRICING OPTIONS</h4>
                        <h2 className='md:text-5xl text-3xl font-bold md:leading-[60px] leading-11 font-robote mt-2 max-w-[348px]'>Our Twitter Pricing Plans.</h2>
                        <p className='md:my-6 my-3 font-medium text-[20px] md:leading-[70px] leading-12   font-epilogue'>Save 30% on the yearly Packages</p>
                        <div className="font-epilogue uppercase font-normal text-base flex justify-start md:gap-2 gap-1 items-center">
                            MONTHLY
                            <div className='w-[80px] h-[40px] rounded-full bg-white flex items-center cursor-pointer'>
                                <div className='size-[30px] rounded-full bg-[#5F1FD2] ml-2'>

                                </div>
                            </div>
                            YEARLY
                        </div>
                    </div>
                </div>
                <div className='flex-2/3 flex items-center justify-center gap-3  xl:mt-0 lg:mt-15 md:mt-10 mt-6 md:flex-row flex-col'>
                    {PricingData.map((data , index) => (
                        <div key={index} className='bgd-[#120F22]  w-[360px] flex items-center justify-center flex-col py-[45px]'>
                            <img className='size-[80px]' src={data.img} alt="" />
                            <div className='h-[1px] w-full bg-[#FFFFFF26] my-10'>

                            </div>
                            <h3 className='font-bold text-2xl leading-[30px] font-robote'>{data.h3}</h3>
                            <h2 className='my-6 font-bold text-[42px] leading-[60px] font-robote'>{data.dolor}</h2>
                            <p className='w-[277px] flex justify-center items-center flex-col leading-[42px] font-outfit font-normal text-base text-[#FFFFFF99]'>{data.p.map((pdata , pindex) =>(
                                <span key={pindex}>{pdata}</span>
                            ))}</p>
                            <button className='[background:linear-gradient(90deg,#E224DB_0%,#601ED1_100%)] mt-7 w-[260px] h-[55px] flex items-center justify-center cursor-pointer font-bold text-sm hover:text-[15px] font-robote transition-all duration-200'>{data.button}</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default PricingPlans
