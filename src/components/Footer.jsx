import React from 'react'
import Image from "next/image"
import { Discord, Email, Greenarrowlinks, Instagram, Linkdin, Mail, Reddit, Telegram, Twitter, Youtube } from './Icon'

const Footer = () => {
    return (
        <div className=' bg-[#111B24]'>
            <div className='container xl:max-w-[1200px] mx-auto px-3 pt-[68px]'>
                <div className=' flex flex-wrap mx-[-12px]'>
                    <div className=' w-full md:w-5/12 px-3'>
                        <div className=' sm:max-w-[368px]'>
                            <div className='gap-[18px] flex items-center' >
                                <div className=' h-[23.53px] w-[2px] bg-[#00EAC7]'></div>
                                <p className=' ff-inter font-light text-2xl leading-7 text-white '>Be <span className=' text-[23px] font-bold'>future-ready</span></p>
                            </div>
                            <p className=' ff-karla font-light text-[14px] text-[#BCCBD6] py-4 lg:py-[26px]'>Get the latest from the Aleph Zero ecosystem and
                                engineering updates, straight to your inbox.</p>
                            <div className=' border-[#16232E] border bg-[#0F171F]  rounded-s-[2px] rounded-e-[48px] flex  justify-between ps-[11px] w-full '>
                                <input className=' placeholder:text-[#BCCBD6] placeholder:ff-karla placeholder:font-light placeholder:text-base placeholder:leading-[18.7px] border-0 bg-transparent focus:outline-none outline-none w-[100%] text-[#00EAC7]' type="text" placeholder='Your email' />
                                <button className=' text-[#111B24] font-medium text-[13px] leading-[14px] py-[11px] bg-[#00EAC7] px-4 rounded-[48px] flex items-center gap-[11px]'><Email /> Subscribe</button>
                            </div>
                            <div className=' flex  pt-6'>
                                <input type="checkbox" />
                                <p className=' ff-karla font-light text-[13px] leading-[18px] text-[#BCCBD6]'>I consent to receive commercial information in the
                                    form of a newsletter sent to the e-mail address
                                    provided by the Aleph Zero Foundation with
                                    registered seat in Bergliweg 15, 6300 Zug. Providing
                                    consent is voluntary. Consent may be revoked at any
                                    time.</p>
                            </div>
                        </div>
                        <div className='flex gap-[26px] pt-5 lg:pt-[41px] items-center'>
                            <Discord />
                            <Telegram />
                            <Twitter />
                            <Linkdin />
                            <Reddit />
                            <Youtube />
                            <Instagram />
                        </div>
                    </div>
                    <div className=' flex-wrap w-full md:w-7/12 px-3 flex justify-between  '>
                        <ul className=' w-[50%] lg:w-[auto] max-lg:py-6'>
                            <li className=' pb-6  lg:pb-[35px]'><a className=' ff-inter font-bold text-[15px] leading-5 text-white ' href="">Explore</a></li>
                            <li ><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] ' href="">Why Aleph Zero</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] ' href="">Roadmap</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] ' href="">Utility & Economics</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] ' href="">Use Cases</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px] ' href="">FAQ <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px] ' href="">Whitepapers <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px] ' href="">Carbon Footprint </a></li>
                            <li className=' pt-[20px] lg:pt-12'><a className=' ff-inter font-light tracking-[3px] text-[11px] leading-5 text-[#BCCBD6]' href="">Network</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Carbon Footprint </a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px] ' href="">Wallet <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Staking</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px] ' href="">Explorer <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Ecosystem</a></li>
                        </ul>
                        <ul className=' w-[50%] lg:w-[auto] max-lg:py-6'>
                            <li className=' pb-6  lg:pb-[35px] text-white'><a className=' ff-inter font-bold text-[15px] leading-5   ' href=""></a>Build</li>
                            <li><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Funding Program</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px] ' href="">Testnet <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li className=' pt-[20px] lg:pt-12'><a className=' ff-inter font-light text-[11px]  leading-[13px] text-[#BCCBD6] tracking-[3px]' href="">Dev space</a></li>
                            <li className=' pt-4 lg:pt-[25px]'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Dev Portal</a></li>
                            <li className=' pt-4 lg:pt-[25px]'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px]' href="">Code repository <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li><a className='pt-4 lg:pt-[25px] ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px]' href="">Documentation <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                        </ul>
                        <ul className=' w-[50%] lg:w-[auto] max-lg:py-6'>
                            <li className=' pb-6  lg:pb-[35px] text-white'><a className=' ff-inter font-bold text-[15px] leading-5   ' href=""></a>Community</li>
                            <li><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Funding Program</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Social Platforms</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Upcoming Events</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Ambassador Program</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Press / Media Kit</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px]' href="">Careers <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Core Team</a></li>
                        </ul>
                        <ul className=' w-[50%] lg:w-[auto] max-lg:py-6'>
                            <li className=' pb-6  lg:pb-[35px] text-white'><a className=' ff-inter font-bold text-[15px] leading-5   ' href=""></a>Content</li>
                            <li><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]' href="">Blog</a></li>
                            <li className=' pt-4 lg:pt-5'><a className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] flex items-center gap-[7px]' href="">Videos <span className=' pb-1'><Greenarrowlinks /></span></a></li>
                        </ul>
                    </div>
                </div>
                <div className='mx-[-12px] flex flex-wrap'>
                    <div className=' lg:w-6/12 px-3 pt-6 lg:pt-12'>
                        <div className=' pt-4 px-4 sm:px-[25px] border border-[#1B2B38]'>
                            <div className=' sm:ps-4 pb-[14px] flex max-sm:flex-col justify-center sm:justify-start sm:text-start text-center  items-center gap-6'>
                                <Image src="/images/png/footercard1.png" alt='cardpic1' width={103} height={18} />
                                <div>
                                    <p className=' ff-inter font-light text-[13px] leading-4  text-[#FFFFFF]'>Aleph Zero Foundation</p>
                                    <p className=' ff-karla font-light text-[14px] leading-[21px] text-[#BCCBD6]'>The Aleph Zero Foundation is responsible for
                                        overseeing the development of Aleph Zero protocol. The
                                        Foundation is also the issuer of the AZERO coin.</p>
                                </div>
                            </div>
                            <div className=' bg-[#222B33] h-[1px] w-full'></div>
                            <div className=' flex max-sm:flex-col justify-between pt-4 pb-4 lg:pb-11'>
                                <p className=' ff-karla font-light text-[14px] leading-[21px] gap-[14px] text-[#BCCBD6] flex  items-center '><Image src="/images/png/location.png" alt='Location' width={9.6} height={12.3} /> Bergliweg 15, 6300 Zug, Switzerland</p>
                                <p className=' ff-karla font-light text-[14px] leading-[21px] gap-[14px] text-[#BCCBD6] flex  items-center pt-3 sm:pt-0 '><Mail /> hello@alephzero.org</p>
                            </div>
                        </div>
                    </div>
                    <div className=' lg:w-6/12 px-3 pt-6 lg:pt-12'>
                        <div className=' pt-4 px-4 sm:px-[25px] border border-[#1B2B38]'>
                            <div className=' sm:ps-4 pb-[14px] flex max-sm:flex-col justify-center sm:justify-start sm:text-start text-center  items-center gap-6'>
                                <Image src="/images/png/footercard1.png" alt='cardpic1' width={103} height={18} />
                                <div>
                                    <p className=' ff-inter font-light text-[13px] leading-4  text-[#FFFFFF]'>Aleph Zero Foundation</p>
                                    <p className=' ff-karla font-light text-[14px] leading-[21px] text-[#BCCBD6]'>The Aleph Zero Foundation is responsible for
                                        overseeing the development of Aleph Zero protocol. The
                                        Foundation is also the issuer of the AZERO coin.</p>
                                </div>
                            </div>
                            <div className=' bg-[#222B33] h-[1px] w-full'></div>
                            <div className=' flex max-sm:flex-col justify-between pt-4 pb-4 lg:pb-11'>
                                <p className=' ff-karla font-light text-[14px] leading-[21px] gap-[14px] text-[#BCCBD6] flex  items-center '><Image src="/images/png/location.png" alt='Location' width={9.6} height={12.3} /> Bergliweg 15, 6300 Zug, Switzerland</p>
                                <p className=' ff-karla font-light text-[14px] leading-[21px] gap-[14px] text-[#BCCBD6] flex  items-center pt-3 sm:pt-0 '><Mail /> hello@alephzero.org</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' lg:flex  justify-between w-full lg:pb-[27px] lg:pt-[57px]'>
                    <p className=' ff-inter font-medium text-[13px]  leading-4 text-[#BCCBD6] text-center lg:text-start mx-auto lg:mx-0 py-6 lg:py-0'>Aleph Zero Foundation © 2018-2023, design and development by Cardinal</p>
                    <div className=' flex justify-between lg:justify-start pb-3 px-3  lg:px-0 lg:pb-0 ' >
                        <p className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6]'>Privacy Policy</p>
                        <p className=' ff-inter font-medium text-[13px] leading-5 text-[#BCCBD6] ps-6'>Cookies Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer