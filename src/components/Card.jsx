import React from 'react'

const Card = ({logo, heading, info}) => {
  return (
    <div className='z-10 p-[20px]  gap-[30px] flex flex-col items-center justify-center w-[300px] border  rounded-tl-[50px] rounded-br-[50px] bg-white h-[400px]'>
      <div className='flex text-5xl justify-center  text-red-600 '>{logo}</div>
      <h2 className='font-black text-center'>{heading}</h2>
      <p>{info}</p>
    </div>
  )
}

export default Card
