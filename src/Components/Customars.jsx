import React from 'react'

  const CustomerData = [
    {
        img:"Ellipse1.png",
        name:"David Duhovni",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse1.png",
        name:"Bill Klauber",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse2.png",
        name:"Allan Sanidad",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse3.png",
        name:"Markus",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse3.png",
        name:"Bill Klauber",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse4.png",
        name:"Douglas Coffman",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse5.png",
        name:"Salahdine Benyoussef",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    },
    {
        img:"Ellipse6.png",
        name:"Salahdine Benyoussef",
        p:"“Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum.Amet facilisis magna etiam tempor orci eu lobortis elementum”"
    }
  ]

function Customars() {
  return (
    <section className='lg:mt-30 md:mt-20 mt-15'>
        <div className=''>
            <div className='mb-20 flex items-center justify-center max-w-[670px]  mx-auto'>
                <h2 className='text-[60px] text-center font-bold'>What our customers say</h2>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-6 '>
              {CustomerData.map((data, index) =>(
                 <div key={index} className='md:max-w-[515px] max-w-full p-6 bg-[#120F22]'>
                    <div className='flex items-center justify-start gap-4'>
                       <img className='size-[55px]' src={data.img} alt="" />
                       <h4 className='text-xl font-bold'>{data.name}</h4>
                    </div>
                    <p className='mt-7 text-base font-normal'>{data.p}</p>
                 </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Customars