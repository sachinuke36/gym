import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

const Footer = () => {
  return (
    <div className='w-[640px] sm:w-full  text-white grid place-items-center grid-cols-3 p-[40px] text-xl  mt-8'>
        <div className='flex flex-col gap-[10px] '>
        <h1 className='font-semibold text-5xl text-red-600 text-shadow'>GYM</h1>
        <p className=' text-gray-500'>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
        <div className='flex gap-3 text-3xl  '>
        <FaFacebook className='transition-colors hover:text-red-600' />
        <FaInstagram className='transition-colors hover:text-red-600' />
        <FaTwitter className='transition-colors hover:text-red-600' />
        <FaLinkedin className='transition-colors hover:text-red-600' />
        <IoLogoYoutube className='transition-colors hover:text-red-600' />
        </div>
        <p className='text-gray-500'>Privacy Policy | © 2024 Gym</p>
        </div>
        <div className='flex flex-col capitalize'>
            <h1 className='uppercase font-bold'>our classes</h1>
            <ul className='text-gray-400'>
                <li className='hover:text-red-600'>fitness classes</li>
                <li className='hover:text-red-600'>aerobics classes</li>
                <li className='hover:text-red-600'>power yoga</li>
                <li className='hover:text-red-600'>learn machines</li>
                <li className='hover:text-red-600'>full-body strength</li>
            </ul>
        </div>
        <div>
            <h1 className='uppercase font-bold'>working hours</h1>
            <ul className='text-gray-400'>
                <li className='text-gray-300'>Monday - Friday:</li>
                <li>7:00am - 21:00pm</li>
                <li className='text-gray-300'>Saturday:</li>
                <li>7:00am - 19:00pm</li>
                <li className='text-gray-300'>Sunday - Closed</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
