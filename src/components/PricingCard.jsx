import React from 'react'
import {motion} from 'framer-motion';

const PricingCard = ({stage, elements, price, img}) => {
  return (
    <div className='w-[300px] bg-white text-black rounded-sm pb-[10px]  box-shadow'>
        <div className='relative flex justify-center'> <img
        className='w-[100%] h-[300px]  rounded-sm'
         src={img} alt="" />
         <div className='text-white border border-white absolute top-[250px] capitalize p-[5px] text-[20px] font-semibold box-shadow '>{stage}</div>
         </div>
        <div className='text-center text-[26px]'>Rs.{price}/M</div>
        <div className='flex flex-col '>{elements.map((i,k)=><p className='text-center capitalize' key={k}>{i}</p>)}</div>
        <div className=' flex justify-center p-[10px]'>
        <motion.button
               whileHover={{scale:1.05}}
               whileTap={{scale:0.95, rotate:"2.5deg"}}
                className=' mx-auto w-[200px] rounded border border-red-600 text-red-600 font-black  py-[10px] px-10 box-shadow capitalize '>purchase now</motion.button>
        </div>
    
    </div>
  )
}

export default PricingCard
