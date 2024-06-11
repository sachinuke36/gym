import React from 'react'
import { IoMdTime } from "react-icons/io";
import { CgGym } from "react-icons/cg";
import { FaNutritionix } from "react-icons/fa";
import { GiWeightLiftingUp } from "react-icons/gi";
import { PiBarbellBold } from "react-icons/pi";
import { TbTreadmill } from "react-icons/tb";
import { easeInOut, motion } from "framer-motion"

const About2 = () => {
    return (
        <div className=' px-[10px] mx-auto  w-full sm:w-full md:w-full    mt-[2vh] pb-[20vh] flex  flex-col text-white'>
            <div className='top relative my-[2vh] w-[95vw]  sm:w-[40vw] md:w-[30vw]  '>
                <motion.img
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: [0, 1.09, 1],
                    }}
                    className='p-[10px] w-[100%]  '
                    src="https://gymate-iota.vercel.app/static/media/title-bg.13d788348b56c629eefb2e7ad1f4d6ce.svg" alt="" />
                <h2 className='uppercase text-white absolute  top-6 left-[100px] font-black z-10'>who we are</h2>
            </div>

            <div className="flex  sm:h-[60vh] w-[608px] sm:w-full ">
              <div className="left w-[50%]  md:[50%] p-[5px] md:p-[10px]">
                <div className='  h-[70%] flex flex-col md:gap-10 py-10 px-5'>
                    <motion.h1
                        variants={{
                            initial: {
                                scale: 0
                            },
                            middle: {
                                scale: 1.05
                            },
                            final: {
                                scale: 1,
                                ease: easeInOut
                            }
                        }}
                        initial="initial"
                        whileInView={{
                            scale: [1.5, 1],
                            rotate: ["12deg", "0deg"]

                        }}
                        transition={{
                            duration: 0.5,

                        }}
                        className='uppercase tex-[22px] md:text-[30px] w-[80%] font-bold'>Take Your Health And Body To Next Level</motion.h1>
                    <p className=' text-gray-500'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals</p>
                </div>
              </div>


             <div className="right w-[50%]    flex flex-col justify-center items-center">
                <motion.img
                    initial={{
                        scale: 0,
                    }}
                    whileInView={{
                        scale: [0, 1.09, 1],
                    }}
                    className='   md:h-[60vh]  '
                    src="https://gymate-iota.vercel.app/static/media/girl-run.2823e00263d26d8f8230.png" alt="" />
             </div>

            </div>




                    <div className="bottom h-[20vh] flex flex-col">
                        <div className='flex justify-evenly mt-6'>
                            <div className='  px-[10px] border-r-[gray] border-r-2'>
                                <p><GiWeightLiftingUp className='text-red-600 text-4xl md:text-8xl mx-auto' /></p>
                                <motion.p
                                    whileInView={{ scale: [0, 1.05, 1] }}
                                    className='uppercase  text-center font-extrabold text-[20px] md:text-[28px]'>PROFESSIONAL TRAINERS</motion.p>
                            </div>
                            <div className=' px-[10px] border-r-[gray] border-r-2'>
                                <p><PiBarbellBold className='text-red-600 text-4xl md:text-8xl mx-auto' /></p>
                                <motion.p
                                    whileInView={{ scale: [0, 1.05, 1] }}
                                    transition={{ duration: 1 }}
                                    className='uppercase  text-center font-extrabold text-[20px] md:text-[28px]'>MODERN EQUIPMENTS</motion.p>
                            </div>
                            <div className=' px-[10px]'>
                                <p><TbTreadmill className='text-red-600 text-4xl md:text-8xl mx-auto' /></p>
                                <motion.p
                                    whileInView={{ scale: [0, 1.05, 1] }}
                                    transition={{ duration: 1 }}
                                    className='uppercase  text-center font-extrabold text-[20px] md:text-[28px]'>FANCY GYM MACHINES</motion.p>
                            </div>
                        
                       
                    </div>
                    <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, rotate: "2.5deg" }}
                            transition={{
                                duration: 0.125,
                                ease: "easeInOut"
                            }}
                            className='uppercase mx-auto border border-red-500 w-[200px] px-[10px] my-[4vh] py-[5px] box-shadow text-shadow'>take a tour</motion.button>
                </div>
            
            
        </div>
    )
}

export default About2
