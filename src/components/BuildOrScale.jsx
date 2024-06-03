import React from 'react'
import Image from "next/image"
import { GreenArrow } from './Icon'

const BuildOrScale = () => {
    return (
        <div className=' lg:pt-[76px] bg-[#111B24]'>
            <div className=' container xl:max-w-[1200px] mx-auto px-3'>
                <div className=' flex flex-wrap mx-[-12px] justify-center'>
                    <div className=' w-full md:w-6/12 px-3'>
                        <div className=' border bg-gradient-to-t from-[#14202A]  to-[rgba(20,32,42,0)]  border-[#1B2B38] group '>
                            <Image src="/images/png/Build.png" className=' w-full pb-[15px] lg:pb-[26px]' alt='logo' width={574} height={147} />
                            <div className=' px-5 pb-5 lg:ps-[49px] lg:pe-[33px]  lg:pb-9'>
                                <div className=' flex items-center pb-4'>
                                    <div className=' w-[2px] h-[23.53px] bg-[#00EAC7] me-[16px]'>
                                    </div>
                                    <p className='ff-bold text-[22px] leading-7 tracking-[0.72px] text-white ff-inter'>Build <span className=' font-light text-[24px]'>fast</span></p>
                                </div>
                                <p className=' ff-karla font-light text-base leading-6 max-w-[409px] text-[#BCCBD6] pb-[20px] lg:pb-[42px]'>Benefit from a unique combination of our consensus
                                    protocol, AlephBFT, and ink!, the Rust-based WASM
                                    programming environment.</p>
                                <p className='text-[#00CCAB] flex items-center justify-end ff-inter font-medium text-[15px] leading-[21px] tracking-[0.64px] group-hover:translate-x-[10px] transition-all duration-500 '>Deploy apps <span className=' ps-2'><GreenArrow /></span></p>
                            </div>
                        </div>
                    </div>
                    <div className=' w-full md:w-6/12 px-3 pt-6 md:pt-0'>
                        <div className=' border bg-gradient-to-t from-[#14202A]  to-[rgba(20,32,42,0)]  border-[#1B2B38] group '>
                            <Image src="/images/png/Scale.png" className=' w-full pb-[15px] lg:pb-[26px]' alt='logo' width={574} height={147} />
                            <div className='px-5 pb-5 lg:ps-[49px] lg:pe-[33px]  lg:pb-9'>
                                <div className=' flex items-center pb-4'>
                                    <div className=' w-[2px] h-[23.53px] bg-[#00EAC7] me-[16px]'>
                                    </div>
                                    <p className='ff-bold text-[22px] leading-7 tracking-[0.72px] text-white ff-inter'>Scale <span className=' font-light text-[24px]'>easy</span></p>
                                </div>
                                <p className=' ff-karla font-light text-base leading-6 max-w-[409px] text-[#BCCBD6] pb-[20px] lg:pb-[42px]'>Benefit from a unique combination of our consensus
                                    protocol, AlephBFT, and ink!, the Rust-based WASM
                                    programming environment.</p>
                                <p className='text-[#00CCAB] flex items-center justify-end ff-inter font-medium text-[15px] leading-[21px] tracking-[0.64px]  group-hover:translate-x-[10px] transition-all duration-500'>Validate and nominate <span className=' ps-2'><GreenArrow /></span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-wrap  items-center justify-between pt-12 sm:pt-16  md:pt-24 lg:pt-[168px] pb-[40px] lg:h-[370px]'>
                    <div className=' w-[100%] sm:w-[50%] md:w-[33.33%]  lg:w-[25%]  p-[24px] lg:p-[0] flex flex-col text-center items-center group'>
                        <p className=' ff-inter font-bold text-[21px] leading-7 text-white'>0.9 sec</p>
                        <div className=' bg-[#00EAC7] h-[2px] w-[64px] lg:group-hover:h-[64px] lg:group-hover:w-[2px] my-4 transition-all duration-500'></div>
                        <p className=' ff-karla font-light text-base leading-6  text-[#BCCBD6]'>Time to finality</p>
                    </div>
                    <div className=' w-[100%] sm:w-[50%] md:w-[33.33%]  lg:w-[25%]  p-[24px] lg:p-[0] flex flex-col text-center items-center group'>
                        <p className=' ff-inter font-bold text-[21px] leading-7 text-white'>0.0003 AZERO</p>
                        <div className=' bg-[#00EAC7] h-[2px] w-[64px] lg:group-hover:h-[64px] lg:group-hover:w-[2px] my-4 transition-all duration-500'></div>
                        <p className=' ff-karla font-light text-base leading-6  text-[#BCCBD6]'>Avg cost per transaction</p>
                    </div>
                    <div className=' w-[100%] sm:w-[50%] md:w-[33.33%]  lg:w-[25%]  p-[24px] lg:p-[0] flex flex-col text-center items-center group'>
                        <p className=' ff-inter font-bold text-[21px] leading-7 text-white'>57449</p>
                        <div className=' bg-[#00EAC7] h-[2px] w-[64px] lg:group-hover:h-[64px] lg:group-hover:w-[2px] my-4 transition-all duration-500'></div>
                        <p className=' ff-karla font-light text-base leading-6  text-[#BCCBD6]'>Accounts</p>
                    </div>
                    <div className=' w-[100%] sm:w-[50%] md:w-[33.33%]  lg:w-[25%]  p-[24px] lg:p-[0] flex flex-col text-center items-center group'>
                        <p className=' ff-inter font-bold text-[21px] leading-7 text-white'>123</p>
                        <div className=' bg-[#00EAC7] h-[2px] w-[64px] lg:group-hover:h-[64px] lg:group-hover:w-[2px] my-4 transition-all duration-500'></div>
                        <p className=' ff-karla font-light text-base leading-6  text-[#BCCBD6]'>Mainnet validators</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuildOrScale