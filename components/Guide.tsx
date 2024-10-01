import Image from 'next/image'
import React from 'react'

const Guide = () => {
  return (
  <section className='flexCenter flex-col'>
    <div className='padding-container max-container w-full pb-24'>
      <Image
        src='/camp.svg'
        alt='camp'
        width={50}
        height={50}
      />
      <p className='uppercase regular-18 -mt-1 mb-3 text-green-50'>
        Always a pleasure guiding you...
      </p>

      <div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
        <h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>Guiding You On Your Travels...</h2>
        <p className='regular-16 text-gray-30 xl:max-w-[520px]'>Lorem, ipsum dolor sit amet consectetur 
          adipisicing elit. Beatae sapiente, nostrum at odit doloremque quam fuga praesentium ad dolores placeat
         soluta facere, animi accusamus explicabo provident tempore laboriosam, architecto voluptas voluptatibus possimus 
         eos laborum perspiciatis. Sunt harum hic ea placeat reprehenderit eveniet dicta quidem! Est!
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ab facere facilis. Labore harum aspernatur repellendus eaque aliquam animi inventore.
        </p>
      </div>
    </div>

{/* background image */}
    <div className='flexCenter max-container relative w-full'>
      <Image
        src='/boat.png'
        alt='boat'
        width={1440}
        height={580}
        className='w-full object-cover object-center 2xl:rounded-5xl'
        />
    

{/* fix destination and time pop up */}
    <div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
      <Image
        src='/meter.svg'
        alt='meter'
        width={16}
        height={158}
        className='h-full w-auto'
        />
      <div className='flexBetween flex-col'>
        <div className='flex w-full flex-col'>
          <div className='flexBetween w-full'>
            <p className='regular-16 text-gray-20'>Destination</p>
            <p className='bold-16 text-green-50'>50 min</p>
          </div>
          <p className='bold-20 mt-2'>Rail Street, London</p>
        </div>

        <div className='flex w-full flex-col'>
            <p className='regular-16 text-gray-20'>Track</p>
            <h4 className='bold-20 mt-2 whitespace-nowrap'>Wellinton Street, US</h4>
          </div>
        </div>
      </div>
  </div>
  </section>
  )
}

export default Guide