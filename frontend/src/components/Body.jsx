import React from 'react'
import imag1 from '../assets/projectwith.svg'
import work from '../assets/wework.svg'


function Body() {
  return (
   <main>

    <div className='items-center justify-between mt-24 lg:flex'>
      <h1 className='lg:text-4xl md:text-5xl font-semibold max-w-[890px] mb-9 text-4xl'>Provide the best service with out of the box ideas</h1>
      <p className="text-[#878C91] max-w-[640px] lg:text-lg mb-9 text-sm">we are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
    </div>
    <div className='items-center justify-center lg:flex gap-36 mt-11'>
<div><img className='lg:w-[38rem] mb-3' src={imag1} alt="" /></div>
<div><img  className='lg:w-[73rem]' src={work} alt="" /></div>
    </div>

   </main>
  )
}

export default Body;