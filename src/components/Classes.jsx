import React from 'react'
import ClassesCard from './ClassesCard'
import {motion} from 'framer-motion'
const classesCard = [{img:'./images/cycling.png',heading:'cycling', time:"Wednesday: 9:00am-10:00am"},
{img:'./images/karate.png',heading:'karate', time:"Friday: 10:00am-11:00am"},
{img:'./images/power.png',heading:'Power', time:"Saturday: 9:00am-10:00am"},
{img:'./images/meditition.png',heading:'Meditation', time:"Friday: 1:00pm-2:00pm"},
{img:'./images/zumba.png',heading:'Zumba', time:"Sunday: 6:00pm-7:00pm"},
{img:'./images/workout.png',heading:'Workout', time:"Monday: 4:00pm-5:00pm"},

]
const Classes = () => {
  return (
    <div className='flex pb-[20px] w-[718px] sm:w-full  flex-col text-white '>
       <div className=' relative  w-[518px] sm:w-[60vw] md:w-[45vw] lg:w-[30vw] mx-auto'>
       <motion.img
       initial={{scale:0,
       }}
       whileInView={{
           scale:[0,1.09,1],
           }}
            className='p-[10px] w-[100%]'
            src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="" /> 
            <div className='absolute top-8 text-[20px] left-[105px] md:left-[95px] sm:left-[105px]'>
                <h2 className='font-black uppercase'>our featured classes</h2>
            </div>
       </div>
       <div>
         <h1 className=' text-center  text-[30px] font-bold'>We Are Offering Best Flexible Classes</h1>
         <motion.div
         whileInView={{opacity:[0,1]}}
         transition={{duration:1}}
          className='flex mt-4 flex-wrap	gap-10 justify-center'>
            {
                classesCard.map((card,k)=>(<ClassesCard 
                    key={k}
                    img={card.img}
                    heading={card.heading}
                    time={card.time}
                />))
            }
         </motion.div>
       </div>
    </div>
  )
}

export default Classes
