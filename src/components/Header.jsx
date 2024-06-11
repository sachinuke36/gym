import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import{motion} from 'framer-motion'

const Header = () => {
    return (
        <div className=' w-full sm:w-[100%] h-[100vh]   flex justify-center text-white mx-auto mt-2'>
            <motion.img
            initial={{scale:0,
            }}
            whileInView={{
                scale:[0,1.09,1],
                }}
             className=' w-50% sm:w-[30vw] md:[40vw] ' src="./images/header.png" alt="" />
            <div className=' w-[50%]   z-10 top-[20vh] right-[0px] flex flex-col justify-center'>
                <h1 className='text-5xl w-[40%]  text-center mx-auto leading-[60px] tracking-[5px]'>Nothing will work unless you do.</h1>
                <motion.button
               whileHover={{scale:1.05}}
               whileTap={{scale:0.95, rotate:"2.5deg"}}
                className='mt-[100px]  mx-auto w-[200px] rounded border border-red-600 text-red-600 font-black  py-[10px] px-10 box-shadow '>Our classes</motion.button>
                <div className='flex mt-[10vh] justify-center gap-[40px] text-3xl '>
                    <FaFacebookSquare className='cursor-pointer hover:text-orange-600' />
                    <FaInstagram className='cursor-pointer hover:text-orange-600' />
                    <FaLinkedin className='cursor-pointer hover:text-orange-600' />
                    <FaTwitter className='cursor-pointer hover:text-orange-600' />
                </div>
            </div>
        </div>
    )
}

export default Header
