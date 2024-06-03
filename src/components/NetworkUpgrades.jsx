import React from 'react'
import Image from "next/image"
import { GreenArrow } from './Icon'

const NetworkUpgrades = () => {
    return (

        <div className='bg_upgrade bg-no-repeat bg-center bg-cover bg-[#111B24] my-[-2px]'>
            <div className='container xl:max-w-[1200px] mx-auto px-3'>
                <div className='flex justify-center sm:justify-start pt-12 sm:pt-16  md:pt-24 lg:pt-[265px] pb-[65px]'>
                    <div className='border border-[#1B2B38] flex max-sm:flex-col group '>
                        <div className="overflow-hidden">
                            <Image src="/images/png/UpgradePic.png " className=' max-sm:w-full h-full group-hover:scale-[1.1] transition-all duration-500 ' alt='mainpic' width={300} height={164} />
                        </div>
                        <div className=' lg:pt-[32px] lg:pb-[19px] lg:px-6 max-lg:p-4'>
                            <div className='  inline-flex gap-3 lg:gap-[16px] items-center justify-center group-hover:-translate-x-[7px] transition-all duration-500  '>
                                <div className=' w-[2px] h-[51px] bg-[#00EAC7]'></div>
                                <p className=' ff-inter font-light text-[18px] sm:text-[21px] lg:text-[23px] leading-7 text-white max-w-[226px] sm:max-w-[293px] '>Curious about <span className=' text-[18px] sm:text-[21px] lg:text-[22px] font-bold'>upcoming network upgrades?</span></p>
                            </div>
                            <p className=' flex gap-[8px] ff-inter font-medium  text-[15px] leading-5  text-[#00CCAB] pt-6 lg:pt-[38px] justify-end items-center '>Why Aleph Zero <GreenArrow /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default NetworkUpgrades