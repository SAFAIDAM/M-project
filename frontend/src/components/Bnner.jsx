import React from 'react'

function Bnner() {
  return (
    <div className='md:flex items-center justify-between mt-24 bg-black rounded-[30px] p-11'>
      <h1 className='lg:text-7xl md:text-5xl font-semibold max-w-[890px] mb-9 text-4xl text-white'>Ready to work with us ?</h1>
      <button  className="flex items-center justify-center gap-6 p-4 mb-4 font-bold bg-white border border-white rounded-full min-w-52 text-balck">
            Get Started{" "}
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#010205"} fill={"none"}>
    <path d="M20 12L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 17C15 17 20 13.3176 20 12C20 10.6824 15 7 15 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            </span>
          </button>
    </div>
  )
}

export default Bnner