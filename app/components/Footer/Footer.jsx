import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Footer = () => {
    return (
        <div className='flex flex-col items-center justify-center mb-10 mt-40 border-t-[1px] border-[#B1A6BA] pt-5'>
            <div className='flex items-center justify-center pb-4 mb-2 border-b-2 border-[#B1A6BA] rounded md:w-1/2'>

                <div className='flex flex-col md:flex-row self-start pr-10 md:pr-48 flex-none'>
                    <Link href="https://discord.gg/AJDXPs5jzR" rel="noopener noreferrer" target="_blank" aria-label="link for discord waiting room">
                        <div className='flex flex-col items-center justify-center pb-4 md:pr-10'>
                            <h3 className='font-bold text-[#B1A6BA] text-[14px] pb-2 md:text-[16px] md:pb-10'>
                                Join our waiting room !
                            </h3>
                            
                                <div className='relative w-[28px] h-[28px] md:w-[48px] md:h-[48px]'>
                                    <Image
                                        src="/icons/discordIcon.png"
                                        alt="discord icon"
                                        quality="100"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                        </div>
                    </Link>
                    <Link href="https://x.com/lucidautomation" rel="noopener noreferrer" target="_blank" aria-label="link for x">
                        <div className='flex flex-col items-center justify-center pb-4'>
                            <h3 className='font-bold text-[#B1A6BA] text-[14px] pb-2 md:text-[16px]  md:pb-10'>
                                Follow us on X !
                            </h3>
                            
                                <div className='relative w-[28px] h-[28px] md:w-[48px] md:h-[48px]'>
                                    <Image
                                        src="/icons/xIcon.png"
                                        alt="x icon"
                                        quality="100"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                            
                        </div>
                    </Link>
                </div>

                <div className='flex flex-col md:flex-row self-start pl-4'>
                    <div className='flex flex-col text-left pb-4 md:pr-10'>
                        <h3 className='font-bolder text-[14px] md:text-[16px] pb-2 md:pb-4'>
                            Navigation
                        </h3>
                        <div className='text-[14px] text-[#B1A6BA] md:text-[16px]'>
                            <NavLink href="/" text="Home"/>
                            <NavLink href="/#features0" text="Features"/>
                            <NavLink href="/#contactForm" text="Contact"/>
                            <NavLink href="/waitlist" text="Waitlist"/>
                        </div>
                    </div>

                    <div className='flex flex-col text-left'>
                        <h3 className='font-bolder text-[14px] md:text-[16px] pb-2 md:pb-4'>
                            Legal
                        </h3>
                        <div className='text-[14px] text-[#B1A6BA] md:text-[16px]'>
                            <NavLink href="/terms" text="Terms and conditions"/>
                            <NavLink href="/terms" text="Privacy policy"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className='relative w-[50px] h-[50px] self-center'>
                <Image
                    src="/SmallLucidLogo.png"
                    alt="logo"
                    quality="100"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <h3 className='text-[#B1A6BA] font-bolder text-[12px] pt-2 md:text-[14px]'>
                © Lucid Automation  | All rights reserved
            </h3>
        </div>

    )
}

export default Footer;

const NavLink = ( { href, text }) => {
    return (
        <Link href={href} aria-label={text}>
            <span className="block hover:underline">{text}</span>
        </Link>
    )
}