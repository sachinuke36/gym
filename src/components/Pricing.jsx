import React from 'react'
import {motion} from 'framer-motion'
import PricingCard from './PricingCard'
const Pricing = () => {
    const pricingCard = [{img:'./images/header.jpg',stage:'beginers',price:1200, elements:['free hand','gym fitness','weight loss','personal trainer','cycling']},
    {img:'./images/header1.jpg',stage:'beginers',price:1200, elements:['free hand','gym fitness','weight loss','personal trainer','cycling']},
    {img:'./images/pricing-2.jpg',stage:'beginers',price:1200, elements:['free hand','gym fitness','weight loss','personal trainer','cycling']}]
  return (
    <div className='w-[640px] sm:w-full  text-white flex  flex-col  gap-5 my-[10vh]'>
      <div className='relative w-[90vw] sm:w-[55vw] md:w-[35vw] lg:w-[20vw] mx-auto '>
                <motion.img
                initial={{scale:0,
                }}
                whileInView={{
                    scale:[0,1.09,1],
                    }}
                  className='p-[10px] w-[100%] '
                  src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="" />
                <h2 className='uppercase text-white absolute top-6 left-[100px] font-black z-10'>pricing chart</h2>
            </div>
            <h1 className=' text-3xl font-bold text-center'>Exclusive Pricing Plan</h1>
            <div className='flex gap-7  items-center justify-center flex-wrap'>
                    {
                        pricingCard.map((item,k)=>
                        <PricingCard key={k} img={item.img} stage={item.stage} price={item.price} elements={item.elements} />)
                    }
            </div>
    </div>
  )
}

export default Pricing
