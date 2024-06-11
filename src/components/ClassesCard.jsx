import React from 'react'
import {motion} from 'framer-motion'
const ClassesCard = ({img, heading, time}) => {
  return (
    <motion.div
    initial={{scale:0,
    }}
    whileInView={{
        scale:[0,1.09,1],
        }}
     className='flex w-[400px] box-shadow p-[10px] flex-col border border-[#2b2a2a] rounded-md'>
      <img
      className='w-[200px] h-[220px] mx-auto p-[10px]'
       src={img} alt="" />
       <h2 className='text-center font-bold text-[20px]'>{heading}</h2>
       <div className='text-center bg-red-600 w-[80%] mx-auto'>{time}</div>
    </motion.div>
  )
}

export default ClassesCard
