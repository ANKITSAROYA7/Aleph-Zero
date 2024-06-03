import React from 'react'
import Image from "next/image"

const LogoSlider = () => {
    return (
        <div className=' overflow-x-hidden mb-[-1px]'>
            <div className=' bg_slider bg-[#111B24] bg-no-repeat bg-center bg-cover'>
                <div className=' container xl:max-w-[1180px] mx-auto px-3 relative'>
                    <Image src="/images/png/BlurLayer.png" className=' left-[-80px] absolute pointer-events-none' alt='logo' width={200} height={60} />
                    <Image src="/images/png/BlurLayer.png" className=' right-[-80px] absolute rotate-180 pointer-events-none' alt='logo' width={200} height={60} />
                    <h1 className=' ff-inter font-light text-[10px] leading-[13px]  text-center mx-auto text-white pt-8 pb-8 lg:pb-14 uppercase tracking-[2.98px]'>Featured in</h1>
                    <div className=' overflow-x-hidden '>
                        <div className=' flex justify-between items-center  pb-[68px] animate-spin-slow animate gap-[48px]'>
                            <Image src="/images/png/CoinDesk.png" className=' w-[112px] h-[48px]' alt='logo' width={112} height={22} />
                            <Image src="/images/png/AccelPoint.png" className=' w-[112px] h-[19px]' alt='logo' width={112} height={19} />
                            <Image src="/images/png/MinisteryAuthority.png" className=' w-[112px] h-[25px]' alt='logo' width={112} height={25} />
                            <Image src="/images/png/BlockWorks.png" className=' w-[112px] h-[40px]' alt='logo' width={112} height={40} />
                            <Image src="/images/png/Sifted.png" className=' w-[112px] h-[48px]' alt='logo' width={112} height={48} />
                            <Image src="/images/png/MyCompany.png" className=' w-[106px] h-[15px]' alt='logo' width={106} height={15} />
                            <Image src="/images/png/Nasdeq.png" className=' w-[112px] h-[32px]' alt='logo' width={112} height={32} />
                            <Image src="/images/png/CoinDesk.png" className=' w-[112px] h-[48px]' alt='logo' width={112} height={22} />
                            <Image src="/images/png/AccelPoint.png" className=' w-[112px] h-[19px]' alt='logo' width={112} height={19} />
                            <Image src="/images/png/MinisteryAuthority.png" className=' w-[112px] h-[25px]' alt='logo' width={112} height={25} />
                            <Image src="/images/png/BlockWorks.png" className=' w-[112px] h-[40px]' alt='logo' width={112} height={40} />
                            <Image src="/images/png/Sifted.png" className=' w-[112px] h-[48px]' alt='logo' width={112} height={48} />
                            <Image src="/images/png/MyCompany.png" className=' w-[106px] h-[15px]' alt='logo' width={106} height={15} />
                            <Image src="/images/png/Nasdeq.png" className=' w-[112px] h-[32px]' alt='logo' width={112} height={32} />
                            <Image src="/images/png/CoinDesk.png" className=' w-[112px] h-[48px]' alt='logo' width={112} height={22} />
                            <Image src="/images/png/AccelPoint.png" className=' w-[112px] h-[19px]' alt='logo' width={112} height={19} />
                            <Image src="/images/png/MinisteryAuthority.png" className=' w-[112px] h-[25px]' alt='logo' width={112} height={25} />
                            <Image src="/images/png/BlockWorks.png" className=' w-[112px] h-[40px]' alt='logo' width={112} height={40} />
                            <Image src="/images/png/Sifted.png" className=' w-[112px] h-[48px]' alt='logo' width={112} height={48} />
                            <Image src="/images/png/MyCompany.png" className=' w-[106px] h-[15px]' alt='logo' width={106} height={15} />
                            <Image src="/images/png/Nasdeq.png" className=' w-[112px] h-[32px]' alt='logo' width={112} height={32} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoSlider