'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { inter } from '../../fonts';


const ContactForm = () => {
    const [ formData, setFormData ] =  useState({
        "email": "",
        "discordUsername": "",
        "message": ""
    })

    const [ isFormValid, setIsFormValid ] = useState(false);
    const [ isEmailValid, setIsEmailValid ] = useState(false);
    const [ isSubmitted, setIsSubmitted ] = useState(false);

    const delay = async (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

    const handleInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState, 
            [fieldName]: fieldValue
        }));
    }

    const submitForm = async (e) => {
        e.preventDefault()
        await delay(Math.floor(Math.random() * (600 - 300 + 1)) + 300);

        setFormData({
            "email": "",
            "discordUsername": "",
            "message": ""
        })

        setIsSubmitted(true)
    }

    useEffect(() => {
        const { email, discordUsername, message } = formData;
        setIsFormValid(email !== "" && discordUsername !== "" && message !== "")
    }, [formData] )

    useEffect(() => {
        setIsEmailValid(formData.email.includes("@"));
    }, [formData.email]);

    const getEmailLabelText = () => {
        if (isFormValid && isEmailValid) {
            return "Email"
        }
        else if (!isFormValid && !isEmailValid) {
            return "Email *"
        }
        else if (isFormValid) {
            return "Email (please enter a valid email)"
        }
        else {
            return "Email"
        }
    }


    return (
        <div id="contactForm" className='w-screen flex justify-center xl:flex xl:w-2/3 xl:h-[900px] xl:border-2 xl:rounded-3xl xl:border-white xl:p-10 xl:space-x-10'>
            <div className='xl:flex xl:flex-col xl:w-1/2 xl:h-[800px] xl:rounded-lg xl:border-2 xl:border-white xl:shadow-[0_4px_6px_rgba(255,255,255,0.2),0_10px_20px_rgba(255,255,255,0.2)] xl:bg-gradient-to-tr xl:from-[#2C1A3E] xl:from-5% xl:to-[#0F041B] xl:to-95%'>
                <div className='xl:flex xl:mt-6 xl:ml-6 xl:items-center'>
                    <h3 className={`hidden ${inter.className} xl:font-semibold xl:text-[20px] xl:block xl:mr-3`}>
                        user_101
                    </h3>
                    <svg viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden xl:block xl:w-[17px] xl:h-[9px]'>
                        <path d="M9.72188 10.7649C9.45521 10.7649 9.18854 10.6635 8.98576 10.4594L0.305208 1.77882C-0.101736 1.37188 -0.101736 0.712153 0.305208 0.305208C0.712153 -0.101736 1.37187 -0.101736 1.77882 0.305208L9.72326 8.24965L17.6677 0.305208C18.0747 -0.101736 18.7344 -0.101736 19.1413 0.305208C19.5483 0.712153 19.5483 1.37188 19.1413 1.77882L10.4608 10.4594C10.258 10.6622 9.99132 10.7649 9.72465 10.7649H9.72188Z" fill="white"/>
                    </svg>
                    <svg viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg" className='hidden xl:block xl:w-[29px] xl:h-[29px] xl:ml-auto xl:mr-8'>
                        <path d="M9.63745 29.2211C9.63699 29.2207 9.63582 29.2201 9.63646 29.22C9.66959 29.2148 17.5188 27.9788 19.5874 25.9209C21.6603 23.8587 35.6259 9.96529 35.6259 9.96529C35.6259 9.96529 35.6259 9.96529 35.6259 9.96529C37.458 8.1426 37.458 5.18753 35.6259 3.36702C33.7948 1.54539 30.8268 1.54433 28.9965 3.36384C28.9944 3.36595 28.9952 3.36516 28.9931 3.36727C28.9243 3.43573 15.0226 17.2655 12.9548 19.3226C10.8862 21.3805 9.64378 29.1893 9.63856 29.2221C9.63846 29.2228 9.63791 29.2216 9.63745 29.2211V29.2211Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M26.046 5.90991L32.4181 12.249" stroke="white" strokeWidth="3"/>
                        <path d="M35.0908 19.4999V31.8148C35.0908 34.6796 32.7215 36.9999 29.7963 36.9999H7.29446C4.36922 36.9999 1.99991 34.6796 1.99991 31.8148V9.77771C1.99991 6.9129 4.36922 4.59253 7.29446 4.59253H19.4999" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>

                <div className='hidden xl:relative xl:block xl:w-[85px] xl:h-[85px] xl:ml-6 xl:flex-none xl:mt-5'>
                    <Image
                        src="/icons/userDMicon.png"
                        alt="logo"
                        quality="100"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>

                <div className='xl:flex xl:justify-between items-center xl:mt-8 xl:mx-6'>
                    <h4 className={`hidden ${inter.className} xl:font-semibold xl:text-[16px] xl:block`}>
                        Messages
                    </h4>
                    <h4 className={`hidden ${inter.className} xl:font-semibold xl:text-[16px] xl:block xl:text-[#0095F7]`}>
                        Requests (1)
                    </h4>
                </div>

                <div className='xl:flex xl:items-center xl:mt-8 xl:ml-6 flex-none'>
                    <div className='hidden xl:relative xl:block xl:w-[55px] xl:h-[55px] xl:flex-none'>
                        <Image
                            src="/SmallLucidLogo.png"
                            alt="logo"
                            quality="100"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <div className='xl:flex xl:flex-col xl:ml-4'>
                        <div className='xl:flex xl:flex-col xl:ml-1'>
                            <h5 className={`hidden ${inter.className} xl:font-normal xl:text-[16px] xl:block`}>
                                Contact Lucid Automation
                            </h5>
                            <div className='xl:flex xl:space-x-3 mr-2'>
                                <p className={`hidden ${inter.className} xl:font-normal xl:text-[12px] xl:block`}>
                                    Need support or want to ask a question? Contact ...
                                </p>
                                <p className={`hidden ${inter.className} xl:font-normal xl:text-[12px] xl:block text-[#B1A6BA] xl:flex-none`}>
                                    · 2 m 
                                </p>
                                <div className='hidden xl:block xl:w-1.5 xl:h-1.5 xl:bg-[#0095F7] xl:rounded-full xl:flex-none'></div>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
                
            </div>

            <div className='flex flex-col rounded-lg w-5/6 h-[600px] xl:w-2/3 xl:h-[800px] border-2 border-white shadow-[0_4px_6px_rgba(255,255,255,0.2),0_10px_20px_rgba(255,255,255,0.2)] bg-gradient-to-tr from-[#2C1A3E] from-5% to-[#0F041B] to-95%'>
                <div className='flex mt-4 items-center border-b-[1px] border-white pb-3'>
                    <svg viewBox="0 0 6 14" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-[6px] h-[14px ml-5 xl:hidden">
                        <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M-3.81512e-05 6.999C-3.81512e-05 6.80702 0.0564731 6.61504 0.170269 6.46906L5.00854 0.219726C5.23536 -0.0732422 5.60307 -0.0732422 5.82989 0.219726C6.0567 0.512695 6.0567 0.987644 5.82989 1.28061L1.4019 7L5.82989 12.7194C6.0567 13.0124 6.0567 13.4873 5.82989 13.7803C5.60307 14.0732 5.23536 14.0732 5.00854 13.7803L0.170269 7.53094C0.0572472 7.38496 -3.81512e-05 7.19298 -3.81512e-05 7.001V6.999Z"/>
                    </svg>
                    <div className='relative w-[30px] h-[30px] mr-2 ml-4 xl:w-[50px] xl:h-[50px] xl:mr-3 xl:ml-6 flex-none'>
                        <Image
                            src="/SmallLucidLogo.png"
                            alt="logo"
                            quality="100"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>
                    <h3 className={`${inter.className} font-medium text-[11px] xl:text-[16px]`}>
                        Contact Lucid Automation
                    </h3>
                    <div className='flex ml-auto mr-5 space-x-3 justify-center items-center xl:space-x-5'>
                        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px] xl:w-[25px] xl:h-[25px] stroke-[2.5px]">
                            <path stroke="white" strokeLinecap="round" strokeLinejoin="round" d="M22.0285 20.5272L19.5835 23.5828C15.7969 21.3564 12.6404 18.2022 10.416 14.4159L13.4718 11.9709C14.209 11.3816 14.4554 10.3681 14.0719 9.50668L11.2861 3.23467C10.8725 2.30469 9.84816 1.81184 8.86456 2.06684L3.56082 3.44252C2.5365 3.71037 1.87433 4.7025 2.02005 5.75033C3.93154 19.3658 14.6333 30.067 28.2516 31.9805C29.2995 32.1241 30.2917 31.4619 30.5574 30.4398L31.9331 25.1363C32.1882 24.1528 31.6953 23.1307 30.7674 22.7171L24.4951 19.9315C23.6336 19.5479 22.6221 19.7943 22.0307 20.5293L22.0285 20.5272Z"/>
                        </svg>

                        <svg viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[16px] xl:w-[29px] xl:h-[29px] stroke-[1.5px]">
                            <path d="M14.6256 7.1784L18.2733 4.68765C18.5585 4.49303 18.9079 4.74934 18.9079 5.15347V11.3314C18.9079 11.7356 18.5585 11.9919 18.2733 11.7972L14.6256 9.30649" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12.0303 1H3.59536C2.16198 1 1 2.20438 1 3.69006V12.4327C1 13.9184 2.16198 15.1228 3.59536 15.1228H12.0303C13.4636 15.1228 14.6256 13.9184 14.6256 12.4327V3.69006C14.6256 2.20438 13.4636 1 12.0303 1Z" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>

                        <svg viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[16px] xl:w-[27px] xl:h-[27px] stroke-[1.5px] hidden xl:block">
                            <path d="M17 32C25.2843 32 32 25.2843 32 17C32 8.71573 25.2843 2 17 2C8.71573 2 2 8.71573 2 17C2 25.2843 8.71573 32 17 32Z" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M17 24.9013V15.4482" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M16.9999 10.8447C16.6872 10.8447 16.4309 10.5883 16.4309 10.2758C16.4309 9.9632 16.6872 9.70679 16.9999 9.70679C17.3125 9.70679 17.5688 9.9632 17.5688 10.2758C17.5688 10.5883 17.3125 10.8447 16.9999 10.8447Z" fill="#B1A6BA" stroke="white" strokeWidth="3"/>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col items-center mt-4 xl:mt-8'>
                    <div className='relative w-[45px] h-[45px] xl:w-[80px] xl:h-[80px]'>
                        <Image
                            src="/SmallLucidLogo.png"
                            alt="logo"
                            quality="100"
                            fill
                            style={{ objectFit: 'contain' }}
                        />
                    </div>

                    <h2 className={`${inter.className} font-semibold text-[14px] mt-3 xl:text-[22px]`}>
                        Contact Lucid Automation
                    </h2>
                    <h4 className={`${inter.className} font-regular text-[10px] text-[#B1A6BA] xl:text-[14px]`}>
                        lucid_automation · Instagram 
                    </h4>
                    <h4 className={`${inter.className} font-regular text-[10px] text-[#B1A6BA] xl:text-[14px]`}>
                        999 followers · 5 posts  
                    </h4>

                    <div className="mt-2 w-[70px] h-[18px] bg-[#292929] rounded-md flex justify-center items-center xl:w-[100px] xl:h-[33px] xl:mt-4">
                        <div className={`${inter.className} font-semibold text-[10px] xl:text-[14px]`}>
                            View profile
                        </div>
                    </div>
                </div>
                
                <form className='mt-10 flex flex-col items-center space-y-4 w-11/12 self-center xl:space-y-8' onSubmit={submitForm}>
                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={`${inter.className} font-medium text-[14px]`}>
                        {getEmailLabelText()}
                        </label>
                        <input className="text-[12px] xl:text-[14px] rounded-md p-2 bg-[#D9D9D9] text-black font-semibold border-2 border-white" aria-label="email input field" name="email" onChange={handleInput} disabled={isSubmitted} value={formData.email}></input>
                    </div>

                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={`${inter.className} font-medium text-[14px]`}>
                            {isFormValid ? "Discord username" : "Discord username *"}
                        </label>
                        <input className="text-[12px] xl:text-[14px] rounded-md p-2 bg-[#D9D9D9] text-black font-semibold border-2 border-white" aria-label="discord username input field" name="discordUsername" onChange={handleInput} disabled={isSubmitted} value={formData.discordUsername}></input>
                    </div>

                    <div className='flex flex-col space-y-1 w-full'>
                        <label className={`${inter.className} font-medium text-[14px]`}>
                        {isFormValid ? "Message" : "Message *"}
                        </label>
                        <textarea className="text-[12px] xl:text-[14px] rounded-md pb-16 pl-2 pt-1 bg-[#D9D9D9] text-black font-semibold max-h-40 border-2 border-white" aria-label="message input field" name="message" onChange={handleInput} disabled={isSubmitted} value={formData.message}></textarea>
                    </div>
                    
                    <button className={`flex justify-center items-center self-end ${isSubmitted ? "hidden" : ""}`} disabled={!isEmailValid || !isFormValid} aria-label="submit contact form button">
                        <h3 className={`${inter.className} font-medium text-[14px] mr-2 xl:text-[18px] transition-colors duration-300 ${!isEmailValid || !isFormValid ? "text-[#006BBF]": "text-[#0095F7]"}`}>
                            Send
                        </h3>
                        <div className={`rounded-lg flex items-center justify-center w-[40px] h-[25px] xl:w-[50px] xl:h-[32px] transition-all duration-300 ${!isEmailValid || !isFormValid ? "bg-[#006BBF] shadow-none opacity-50": "bg-[#0095F7] shadow-lg opacity-100"}`}>
                            <svg viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] h-[18px] xl:w-[25px] xl:h-[22px]">
                                <path fill="white" d="M12.5148 1.24069C12.2533 1.00231 11.8555 0.919843 11.4788 1.0224L0.895676 3.90106C0.493572 4.01055 0.201489 4.29883 0.133606 4.65433C0.0657682 5.00914 0.239939 5.34177 0.586478 5.52126L4.14974 7.37083L7.50636 4.63077C7.75516 4.42773 8.13736 4.42773 8.36008 4.63077C8.5828 4.83382 8.56167 5.16298 8.31288 5.36603L4.95545 8.10609L6.89943 11.2772C7.07063 11.5558 7.39401 11.72 7.76173 11.72C7.80035 11.72 7.83991 11.7179 7.87956 11.7145C8.29402 11.6756 8.64468 11.44 8.79281 11.1005L12.711 2.14573C12.8506 1.82488 12.7755 1.47839 12.5148 1.24069Z"/>
                            </svg>
                        </div>
                    </button>
                    
                    <div className={`flex justify-center items-center mt-3 xl:mt-8 ${!isSubmitted ? "hidden" : ""}`}>
                        <h3 className={`${inter.className} font-medium text-[14px] xl:text-[18px] underline underline-offset-4`}>
                            Thanks for submitting !
                        </h3>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;