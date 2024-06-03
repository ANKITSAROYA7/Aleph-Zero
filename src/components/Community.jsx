import React from 'react'
import Image from "next/image"


const Community = () => {
    return (
        <div className=' pb-16  md:pb-24 lg:py-[124px] bg-[#111B24]'>
            <div className=' container xl:max-w-[1200px] mx-auto px-3'>
                <div className=' flex flex-wrap mx-[-12px] justify-center items-center '>
                    <div className=' lg:w-[55%] px-3 '>
                        <Image src="/images/png/community_pic.png" alt='card' width={628} height={628} />
                    </div>
                    <div className=' w-full lg:w-[45%] px-3 xl:ps-5'>
                        <p className=' ff-inter font-bold text-[25px] sm:text-[27px] md:text-[29px] lg:text-[32px] leading-10 text-[#FFFFFF]'>Community <span className=' font-light text-[27px] sm:text-[29px] md:text-[32px] lg:text-[34px]'> of over 100,000 people</span></p>
                        <div className=' h-[2px] w-[64px] bg-[#00EAC7] mt-4 lg:mt-5'></div>
                        <p className=' text-[#BCCBD6]  ff-karla font-light text-lg leading-7 py-4 lg:py-6  max-w-[445px]'>Join us and get involved in a number of ongoing
                            educational activities run not only by the core team
                            but also by the community directly.</p>
                        <button className=' bg-[#0F3034] rounded-[48px] py-4 px-[26px] ff-inter font-medium text-[15px] leading-4 text-[#00CCAB]'>Get involved</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Community