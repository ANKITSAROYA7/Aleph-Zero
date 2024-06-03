'use client'
import React from 'react'
import { useState } from 'react'
import { RxCross1 } from "react-icons/rx"
import { BiMenu } from "react-icons/bi"
import Image from "next/image"
import { StartExploring } from './Icon'


const HeroSection = () => {
    const [show, setShow] = useState(false);
    if (show === true) {
        document.body.classList.add("overflow_hidden")
    } else {
        document.body.classList.remove("overflow_hidden")
    }
    return (
        <div className='bg-[#111B24] hero relative bg-no-repeat bg-center bg-cover mb-[-1px]'>
            <nav className=' max-w-[1920px] mx-auto' >
                <div className=' flex justify-between items-center py-5 sm:py-6 lg:py-[30px] lg:ps-[34px] lg:pe-[40px] px-3  max-w-[1920px] mx-auto'>
                    <div className=' flex items-center'>
                        <Image src="/images/png/logo.png" className=' max-w-[150px] sm:max-w-[220px]' alt='logo' width={250} height={40} />
                    </div>
                    <ul className={`${show ? " !left-[0px] bg-[#111B24]" : ""} z-40 flex gap-[33px] flex-col min-h-screen w-full top-0 bottom-0 fixed justify-center items-center left-full lg:static lg:w-auto lg:min-h-full lg:flex-row transition-all duration-500 `}>
                        <li><a onClick={() => setShow(!show)} href="#About" className='text-white ff-karla text-base leading-6 font-extralight relative border_bottom after:absolute after:left-[10%] after:h-[2px] after:w-0 after:bg-[#00EAC7] after:bottom-[-4px] after:hover:w-[80%] after:transition-all after:duration-500 after:rounded-[10px] '>Explore</a></li>
                        <li><a onClick={() => setShow(!show)} href="#About" className='text-white ff-karla text-base leading-6 font-extralight relative border_bottom after:absolute after:left-[10%] after:h-[2px] after:w-0 after:bg-[#00EAC7] after:bottom-[-4px] after:hover:w-[80%] after:transition-all after:duration-500 after:rounded-[10px] '>Build</a></li>
                        <li><a onClick={() => setShow(!show)} href="#About" className='text-white ff-karla text-base leading-6 font-extralight relative border_bottom after:absolute after:left-[10%] after:h-[2px] after:w-0 after:bg-[#00EAC7] after:bottom-[-4px] after:hover:w-[80%] after:transition-all after:duration-500 after:rounded-[10px] '>Community</a></li>
                        <li><a onClick={() => setShow(!show)} href="#About" className='text-white ff-karla text-base leading-6 font-extralight relative border_bottom after:absolute after:left-[10%] after:h-[2px] after:w-0 after:bg-[#00EAC7] after:bottom-[-4px] after:hover:w-[80%] after:transition-all after:duration-500 after:rounded-[10px] '>Content</a></li>
                    </ul>
                    <label className=' z-[41] lg:hidden text-white text-3xl' onClick={() => setShow(!show)}>
                        {show ? <RxCross1 /> : <BiMenu />}
                    </label>
                    <div className=' lg:flex hidden '>
                        <button className='bg-[#00EAC7]  text-[13px] leading-[14px] py-[10px] px-[28px] text-black rounded-[48px]'>Explore the ecosystem</button>
                    </div>
                </div>
            </nav>
            <div className=' container xl:max-w-[1180px] mx-auto px-3 '>
                <div className=' flex  flex-wrap mx-[-12px]'>
                    <div className=' lg:w-[36%] px-3 pt-[40px] pb-14  sm:pt-36 sm:pb-[155px] z-10'>
                        <p className='  ff-inter font-bold text-[33px] sm:text-[36px] lg:text-[40px] leading-[50px] text-white'>Zero-knowledge<span className=' text-[35px] sm:text-[38px] font-light  lg:text-[42px]'>, scalable layer 1</span></p>
                        <div className='bg-[#00EAC7] h-[2px] w-[64px] my-3 lg:mb-6 lg:mt-[22px]'></div>
                        <p className=' text-[#BCCBD6] ff-karla  font-light text-base sm:text-lg leading-7'>Aleph Zero is a layer 1 privacy-enhancing
                            blockchain that ensures scalability, low
                            transaction fees, instant finality, and optimal
                            security.</p>
                        <button className=' ff-inter font-medium text-[15px] leading-4 text-[#00CCAB] flex items-center gap-[17px] py-[14px] px-6 bg-[#0F3034] rounded-[48px] mt-6'><StartExploring/>Start exploring</button>    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection