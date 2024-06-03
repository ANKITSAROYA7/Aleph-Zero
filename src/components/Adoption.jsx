import React from 'react'
import Image from "next/image"
import { SliderFirst } from './Icon'

const Adoption = () => {
    return (
        <div className='  sm:pt-16  md:pt-24 lg:pt-[124px] bg-[#111B24]'>
            <div className=' container xl:max-w-[1200px] mx-auto px-3'>
                <div className=' flex flex-wrap mx-[-12px] justify-center items-center '>
                    <div className=' w-full lg:w-6/12 px-3 pb-5 lg:pb-0'>
                        <p className=' ff-inter font-light text-[27px] sm:text-[29px] md:text-[32px] lg:text-[34px] leading-10 text-[#FFFFFF]'>Driving <span className=' ff-inter font-bold text-[25px] sm:text-[27px] md:text-[29px] lg:text-[32px] leading-10'>Web3 adoption</span></p>
                        <div className=' h-[2px] w-[64px] bg-[#00EAC7] mt-3 lg:mt-5'></div>
                        <p className=' text-[#BCCBD6]  ff-karla font-light text-lg leading-7 py-4 lg:py-6 '>Aleph Zero bridges the gap between scalability,
                            security, developer friendliness, and cost of use.
                            Moreover, the network will boast a native privacy stack
                            to further enable you to build solutions that strike the
                            balance between transparency and privacy.</p>
                        <button className=' bg-[#0F3034] rounded-[48px] py-4 px-[26px] ff-inter font-medium text-[15px] leading-4 text-[#00CCAB]'>See what’s possible</button>
                    </div>
                    <div className=' w-full lg:w-6/12 md:px-3 gap-[18px] flex flex-col'>
                        <div className=' flex items-center gap-[10px] lg:gap-[15px] '>
                            <Image src="/images/png/sliderpic.png" alt='card' width={40} height={102} />
                            <div className=' w-full rounded-sm border border-[#243039] bg-[#14202A] py-[12px] px-[17px]'>
                                <div className=' flex items-center '>
                                    <Image src="/images/png/horizontalslide1.png" alt='card1' width={78} height={78} />
                                    <p className=' ff-inter font-medium text-[15px] leading-5 text-white'>Smart contracts</p>
                                </div>
                            </div>
                            <Image src="/images/png/sliderpic2.png" alt='card' width={40} height={102} />
                        </div>
                        <div className=' flex items-center gap-[10px] lg:gap-[15px] '>
                            <Image src="/images/png/sliderpic.png" alt='card' width={40} height={102} />
                            <div className=' w-full rounded-sm border border-[#243039] bg-[#14202A] py-[12px] px-[17px]'>
                                <div className=' flex items-center '>
                                    <Image src="/images/png/horizontalslide1.png" alt='card1' width={78} height={78} />
                                    <p className=' ff-inter font-medium text-[15px] leading-5 text-white'>Smart contracts</p>
                                </div>
                            </div>
                            <Image src="/images/png/sliderpic2.png" alt='card' width={40} height={102} />
                        </div>
                        <div className=' flex items-center gap-[10px] lg:gap-[15px] '>
                            <Image src="/images/png/sliderpic.png" alt='card' width={40} height={102} />
                            <div className=' w-full rounded-sm border border-[#243039] bg-[#14202A] py-[12px] px-[17px]'>
                                <div className=' flex items-center '>
                                    <Image src="/images/png/horizontalslide1.png" alt='card1' width={78} height={78} />
                                    <p className=' ff-inter font-medium text-[15px] leading-5 text-white'>Smart contracts</p>
                                </div>
                            </div>
                            <Image src="/images/png/sliderpic2.png" alt='card' width={40} height={102} />
                        </div>
                        <div className=' flex items-center gap-[10px] lg:gap-[15px] '>
                            <Image src="/images/png/sliderpic.png" alt='card' width={40} height={102} />
                            <div className=' w-full rounded-sm border border-[#243039] bg-[#14202A] py-[12px] px-[17px]'>
                                <div className=' flex items-center '>
                                    <Image src="/images/png/horizontalslide1.png" alt='card1' width={78} height={78} />
                                    <p className=' ff-inter font-medium text-[15px] leading-5 text-white'>Smart contracts</p>
                                </div>
                            </div>
                            <Image src="/images/png/sliderpic2.png" alt='card' width={40} height={102} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Adoption