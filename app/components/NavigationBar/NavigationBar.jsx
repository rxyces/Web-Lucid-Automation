'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import WaitlistButton from '../WaitlistButton/WaitlistButton';

const NavigationBar = () => {
    const [toggle, setToggle] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setToggle(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <nav>
            <div className='flex justify-between max-w-screen-lg my-5 mx-auto'>
                <div className='flex flex-none'>
                    <div className="ml-10 md:mr-20">
                        <Image
                            src="/textLogo.png"
                            alt="logo image"
                            quality="100"
                            width={250}
                            height={50}
                        />
                    </div>

                    <div className="hidden md:flex space-x-8 self-center">
                        <NavLink href="/" text="Home" />
                        <NavLink href="/#features0" text="Features" />
                        <NavLink href="/#contactForm" text="Contact" />
                    </div>
                </div>
                

                <div className="hidden md:flex self-center mx-10">
                    <WaitlistButton />
                </div>

                <div className='flex md:hidden self-center ml-auto mr-6'>
                    <button onClick={() => {setToggle(!toggle)}} aria-label="toggle for navigation bar">
                    <svg className={`transform transition-transform duration-300 ${toggle ? 'rotate-180' : ''}`} width="45" height="45" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9l6 6 6-6" stroke="#B1A6BA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </button>
                </div>

            </div>
            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${toggle ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='flex flex-col pl-10 space-y-2 font-medium'>
                    <NavLink href="/" text="Home" />
                    <NavLink href="/#features0" text="Features" />
                    <NavLink href="/#contactForm" text="Contact" />
                </div>
            </div>
            
        </nav>
    );
};


const NavLink = ( { href, text }) => {
    return (
        <Link href={href} aria-label={text}>
            <span className="block hover:underline">{text}</span>
        </Link>
    )
}

export default NavigationBar;