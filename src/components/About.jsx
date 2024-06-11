import React from 'react'
import Card from './Card'
import { IoMdTime } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { FaNutritionix } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { PiBarbellBold } from "react-icons/pi";
import { TbTreadmill } from "react-icons/tb";

const About = () => {
    const card =[{
        logo:<IoMdTime />,
        heading:"PROGRESSION",
        info:"Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."
    },{
        logo:<CgGym /> ,
        heading:"WORKOUT",
        info:"With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."
    },{
        logo:<FaNutritionix /> ,
        heading:"NUTRITION",
        info:"Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."
    }]
  return (
    <section className='about h-[100vh] mt-5' id='#about'>
        <div className="cards w-[100%] flex  justify-evenly">
        {
            card.map((card,k)=>(<Card 
            key={k}
            logo={card.logo}
            heading={card.heading}
            info={card.info}/>))
        }
        </div>
        <div className='trapezium'>
            <div className='absolute flex flex-col gap-[20px] top-[-38vh] right-[10px]'>
                <h2 className=' text-red-900 font-black w-[150px] p-[5px] text-center'>Who are we</h2>
            <h2 className='text-black   text-2xl font-black left-[150px]'>Take Your Health And Body To Next Level</h2>
            <p className=''>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
            <div className='flex justify-evenly'>
                <div className='  px-[10px] border-r-[gray] border-r-2'>
                    <p><GiWeightLiftingUp className='text-red-600 text-4xl mx-auto' /></p>
                    <p>PROFESSIONAL TRAINERS</p>
                </div>
                <div className=' px-[10px] border-r-[gray] border-r-2'>
                   <p><PiBarbellBold className='text-red-600 text-4xl mx-auto'/></p>
                   <p>MODERN EQUIPMENTS</p>
                </div>
                <div className=' px-[10px]'>
                    <p><TbTreadmill className='text-red-600 text-4xl mx-auto' /></p>
                    <p>FANCY GYM MACHINES</p>
                </div>
            </div>

            <div className='mx-auto'><button className='border-2 p-[10px] hover:bg-orange-50 border-orange-600'>Take a Tour</button></div>
            
            </div>
        </div>
      
    </section>
  )
}

export default About
