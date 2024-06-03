import React from 'react'
import Image from "next/image"
import { Goto } from './Icon'

const Ecosystem = () => {
    return (
        <div className='bg_eco bg-no-repeat bg-center bg-cover bg-[#111B24] my-[-23px]'>
            <div className='lg:py-[180px] container lg:max-w-[1000px] mx-auto px-3'>
                <div className=' flex flex-wrap mx-[-12px] justify-center  '>
                    <div className=" sm:w-6/12 md:w-4/12 px-3 flex justify-center">
                        <div className=' w-full relative  border-x-[1px] border-t-[1px] border-b-[2px] group overflow-hidden  border-[#1B2B38] rounded-sm' >
                            <Image className=' absolute top-0  left-0 w-full z-10' src="/images/png/ecocardbg.png" alt='card' width={309} height={88} />
                            <Image className=' lg:pt-2 lg:ps-6 p-4 z-50 relative' src="/images/png/cardpic1.png" alt='card' width={96} height={96} />
                            <div className=' lg:pt-[13px] lg:ps-8  lg:pb-[18px] p-4'>
                                <div className=' flex gap-[16px]'>
                                    <div className=' h-[21px] w-[2px] bg-[#00EAC7]'>
                                    </div>
                                    <p className='text-[#FFFFFF]  ff-inter font-light text-[20px] leading-6'>AZERO <span className=' text-[19px] font-bold'>wallet</span></p>
                                </div>
                                <p className='text-[#BCCBD6] max-w-[239px] ff-karla font-light text-[14px] pt-2 pb-4'>Set up your Aleph Zero wallet to be
                                    able to hold, transfer, or stake your
                                    AZERO coins.</p>
                                <button className=' gap-4 text-[#00CCAB]  ff-inter font-medium text-base leading-4 py-[14px] bg-[#0F3034] ps-4 pe-[31px] flex rounded-s-[48px] translate-x-[210px] sm:translate-x-[235px] md:translate-x-[170px] group-hover:translate-x-[155px] md:group-hover:translate-x-[110px] lg:group-hover:translate-x-[155px]  lg:translate-x-[235px]  transition-all duration-500'><Goto /> Go to</button>
                            </div>
                        </div>
                    </div>
                    <div className=" sm:w-6/12 md:w-4/12 px-3 flex justify-center py-[24px] sm:py-0">
                        <div className='w-full  relative  border-x-[1px] border-t-[1px] border-b-[2px] group overflow-hidden  border-[#1B2B38] rounded-sm' >
                            <Image className=' absolute top-0  left-0 w-full z-10' src="/images/png/ecocardbg2.png" alt='card' width={309} height={88} />
                            <Image className=' lg:pt-2 lg:ps-6 p-4 z-50 relative' src="/images/png/cardpic2.png" alt='card' width={96} height={96} />
                            <div className=' lg:pt-[13px] lg:ps-8 lg:pb-[18px] p-4'>
                                <div className=' flex gap-[16px]'>
                                    <div className=' h-[21px] w-[2px] bg-[#00EAC7]'>
                                    </div>
                                    <p className='text-[#FFFFFF]  ff-inter font-light text-[20px] leading-6'>AZERO <span className=' text-[19px] font-bold'>wallet</span></p>
                                </div>
                                <p className='text-[#BCCBD6] max-w-[239px] ff-karla font-light text-[14px] pt-2 pb-4'>Set up your Aleph Zero wallet to be
                                    able to hold, transfer, or stake your
                                    AZERO coins.</p>
                                <button className=' gap-4 text-[#00CCAB]  ff-inter font-medium text-base leading-4 py-[14px] bg-[#0F3034] ps-4 pe-[31px] flex rounded-s-[48px] translate-x-[210px] sm:translate-x-[235px] md:translate-x-[170px] group-hover:translate-x-[155px] md:group-hover:translate-x-[110px] lg:group-hover:translate-x-[155px]  lg:translate-x-[235px]  transition-all duration-500'><Goto /> Go to</button>
                            </div>
                        </div>
                    </div>
                    <div className=" sm:w-6/12 md:w-4/12 px-3 flex justify-center sm:pt-6 md:pt-0 ">
                        <div className='  w-full relative  border-x-[1px] border-t-[1px] border-b-[2px] group overflow-hidden  border-[#1B2B38] rounded-sm' >
                            <Image className=' absolute top-0  left-0 w-full z-10' src="/images/png/ecocardbg3.png" alt='card' width={309} height={88} />
                            <Image className=' lg:pt-2 lg:ps-6 p-4 z-50 relative' src="/images/png/cardpic3.png" alt='card' width={96} height={96} />
                            <div className=' lg:pt-[13px] lg:ps-8 lg:pb-[18px] p-4'>
                                <div className=' flex gap-[16px]'>
                                    <div className=' h-[21px] w-[2px] bg-[#00EAC7]'>
                                    </div>
                                    <p className='text-[#FFFFFF]  ff-inter font-light text-[20px] leading-6'>AZERO <span className=' text-[19px] font-bold'>wallet</span></p>
                                </div>
                                <p className='text-[#BCCBD6] max-w-[239px] ff-karla font-light text-[14px] pt-2 pb-4'>Set up your Aleph Zero wallet to be
                                    able to hold, transfer, or stake your
                                    AZERO coins.</p>
                                <button className=' gap-4 text-[#00CCAB]  ff-inter font-medium text-base leading-4 py-[14px] bg-[#0F3034] ps-4 pe-[31px] flex rounded-s-[48px] translate-x-[210px] sm:translate-x-[235px] md:translate-x-[170px] group-hover:translate-x-[155px] md:group-hover:translate-x-[110px] lg:group-hover:translate-x-[155px]  lg:translate-x-[235px]  transition-all duration-500'><Goto /> Go to</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ecosystem 