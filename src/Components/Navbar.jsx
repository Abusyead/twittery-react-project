import React, { useState } from 'react'
import logo from "/twittery.svg"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const NavLink = [ 
    {Link:"#home" , label:"Home"},
    {Link:"#company" , label:"Company"},
    {Link:"#services" , label:"Services"},
    {Link:"#testimonials" , label:"Testimonials"},
    {Link:"#contact" , label:"Contact"}
]

function Navbar() {
    const [isMenu , setIsMenu] = useState(false)
    
    const [activeLink , setActiveLink] = useState('#home')

  return (
     
    <nav className='bg-[#030015] fixed  left-0 right-0 z-100'>
        <div className=' relative px-10 overflow-hidden'>
            <div className='size-[800px] top-[-220px]  bg-[#243FE2] left-[105px] absolute z-10 blur-[400px] rounded-full'></div>

            <div className='size-[800px] top-[-195px]  bg-[#A524E2]  left-[822px] absolute z-10 blur-[400px] rounded-full'></div>



            <div className='max-w-[1530px] mx-auto flex items-center justify-between  xl:px-[116px]   xl:py-13 lg:py-9 py-7 relative z-100 '>


            {/* logo */}

            <div>
                <img src={logo} alt="" />
            </div>

            {/* mobile menu */}

            <button onClick={() => setIsMenu(!isMenu)} className='lg:hidden p-2'>
                {isMenu ? <RxCross2 className="size-6"/> : <FaBars className='size-6'/> }
            </button>



            {/* desktop navbar */}
            <div className='border lg:flex border-[#FFFFFF33] rounded-[50px] px-5  py-4  xl:gap-10 gap-6 hidden'>
                {NavLink.map((nav , index)=>(
                <a key={index} href={nav.Link} onClick={() => setActiveLink(nav.Link)} className={`text-base font-normal ${activeLink === nav.Link ? "text-[#ea00f5]":"text-white"}`}>{nav.label}</a>
                ))}
            </div>

            

            {/* login book */}

            

            <div className="lg:flex items-center gap-8 hidden px-3">
                <button className="text-white hover:text-[#ea00f5] cursor-pointer transition-colors duration-200">Login</button>
                <button className="p-[1px] lg:w-[171px] lg:h-[50px] w-[130px] h-[40px] rounded-full [background:linear-gradient(100.66deg,#531DD0_22.73%,#EA00F5_91.34%)]">
                    <span className="flex items-center justify-center hover:[background:linear-gradient(100.66deg,#531DD0_22.73%,#EA00F5_91.34%)] cursor-pointer bg-gray-900 text-white rounded-full lg:h-[47px] lg:w-[168px] w-[128px] h-[38px] text-base font-semibold">
                        Book now
                    </span>
                </button>

            </div>
            

            
        </div>

        {/* mobile menu */}


        {
            isMenu && (
            <div className="fixed top-10 bg-[#030015] w-full py-10 z-6">
                <div className="lg:hidden flex flex-col items-center justify-center gap-3 mt-10">
                    {NavLink.map((nav , index)=>(
                        <a key={index} href={nav.Link} onClick={() => setActiveLink(nav.Link)} className={`text-base font-normal ${activeLink === nav.Link ? "text-[#ea00f5]":"text-white"}`}>{nav.label}</a>
                    ))}  
                </div>
                <div className="lg:hidden flex items-center justify-center flex-col mt-10 gap-4 px-3">
                    <button className="text-white hover:text-[#ea00f5] cursor-pointer transition-colors duration-200">Login</button>
                    <button className="p-[1px] lg:w-[171px] lg:h-[50px] w-[130px] h-[40px] rounded-full [background:linear-gradient(100.66deg,#531DD0_22.73%,#EA00F5_91.34%)]">
                        <span className="flex items-center justify-center hover:[background:linear-gradient(100.66deg,#531DD0_22.73%,#EA00F5_91.34%)] cursor-pointer bg-gray-900 text-white rounded-full lg:h-[47px] lg:w-[168px] w-[128px] h-[38px] text-base font-semibold">
                            Book now
                        </span>
                    </button>

                </div>
            </div>
            )
        }
        </div>


        

    </nav>
     
  )
}

export default Navbar