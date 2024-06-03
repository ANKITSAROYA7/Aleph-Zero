import React from 'react'

const Applications = () => {
    return (
        <div className=' bg-[#111B24]'>
            <div className=' container xl:max-w-[1224px] mx-auto px-3'>
                <div className=' flex flex-wrap mx-[-12px]  items-center justify-center'>
                    <div className='w-full xl:w-[48%] px-3 flex flex-col sm:flex-row justify-center'>
                        <div className='px-3 '>
                            <div className=' border border-[#1B2B38] bg_card bg-no-repeat bg-center bg-cover  h-[278px] my-[10px] w-[278px] '></div>
                            <div className=' border border-[#1B2B38] bg_card bg-no-repeat bg-center bg-cover  h-[278px] my-[10px] w-[278px]'></div>
                            <div className=' border border-[#1B2B38] bg_card bg-no-repeat bg-center bg-cover  h-[278px] my-[10px] w-[278px]'></div>
                        </div>
                        <div className='px-3 '>
                            <div className=' border border-[#1B2B38] bg_card bg-no-repeat bg-center bg-cover  h-[278px] my-[10px] w-[278px]'></div>
                            <div className=' border border-[#1B2B38] bg_card bg-no-repeat bg-center bg-cover  h-[278px] my-[10px] w-[278px]'></div>
                            <div className=' border border-[#1B2B38] bg_card bg-no-repeat bg-center bg-cover  h-[278px] my-[10px] w-[278px]'></div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[52%] px-3 xl:justify-end flex'>
                        <div className=' xl:max-w-[446px] xl:pe-3'>
                            <p className=' ff-inter text-[27px] sm:text-[29px] md:text-[32px] lg:text-[34px] leading-10 text-[#FFFFFF] font-bold'>Applications <span className=' ff-inter font-light text-[25px] sm:text-[27px] md:text-[29px] lg:text-[32px] leading-10'>under devlopment</span></p>
                            <div className=' h-[2px] w-[64px] bg-[#00EAC7] mt-3 lg:mt-[22px]'></div>
                            <p className=' text-[#BCCBD6]  ff-karla font-light text-lg  py-4 lg:py-6 '>With the mainnet launch, Aleph Zero has seen a
                                notable initial adoption within the developer
                                community. Our flexible environment will be familiar
                                for builders who are already accustomed with Rust and
                                the Substrate stack.</p>
                            <button className=' bg-[#0F3034] rounded-[48px] py-4 px-[24px] ff-inter font-medium text-[15px] leading-4 text-[#00CCAB] tracking-[0.64px]'>Explore the ecosystem</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Applications