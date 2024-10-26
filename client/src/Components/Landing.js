import React from 'react'
import { FaCircleChevronDown } from "react-icons/fa6";

function Landing() {
  return (
   <>
   <div className='w-full md:w-9/12 h-1/2 md:h-4/5 xl:ml-62  md:ml-44 flex flex-col md:items-start pl-1 md:pl-44 pt-16 md:pt-24 md:mt-0 mt-24'>
  <div className='text-3xl md:text-7xl xl:p-7 p-4 xl:pl-52 pl-12 text-gray-600' style={{ fontFamily: "DynaPuff" }}>
    Hai!
  </div>
  <div className='text-3xl md:text-7xl p-4 xl:p-7 xl:pl-52 pl-12 text-gray-700' style={{ fontFamily: "DynaPuff" }}>
    I am Keerthivsan k
  </div>
  {/* <div className='text-3xl md:text-7xl p-4 pl-12 md:p-7 text-gray-700' style={{ fontFamily: "DynaPuff" }}>
    vasan k
  </div> */}
  <div className='text-xl md:text-5xl p-4 xl:p-7 xl:pl-52 pl-12 tracking-widest md:tracking-[.35em] text-gray-500' >
    Full Stack Developer
  </div>
  <div className='xl:p-7 xl:pl-52  p-4 pl-12'><button className='w-10 h-10 bg-purple-600 rounded-3xl'><FaCircleChevronDown className='w-10 h-10'/></button></div>
</div>

   </>
  )
}

export default Landing