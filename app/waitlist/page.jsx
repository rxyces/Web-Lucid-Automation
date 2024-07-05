'use client'
import { useState, useEffect } from "react";
import SEO from "../components/SEO/SEO";

const Waitlist = () => {
    const [ isSubmitted, setIsSubmitted ] = useState(false);
    const [email, setEmail] = useState("Email");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [error, setError] = useState("")

    const delay = async (ms) => {
        return new Promise((resolve) => {
            setTimeout(resolve, ms);
        })
    }

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const handleBlur = () => {
        if (email === "") {
            setEmail("Email")
        }
    }

    const handleFocus = () => {
        if (email === "Email") {
            setEmail("")
        }
    }

    const handleClick = async () => {
        if (isEmailValid) {
            await delay(Math.floor(Math.random() * (600 - 300 + 1)) + 300);
            setEmail("Email")
            setIsSubmitted(true)
        }
    }

    useEffect(() => {
        if (email === "" || email === "Email") { //reset error counter if input at either default position
            setError("");
        } 
        else if (email.includes("@")) { //reset error and set valid email state if email contains @
            setIsEmailValid(true);
            setError("");
        }
        else {
            setIsEmailValid(false); //email must be invalid if it does not contain @ (as invalid is the default so even under "" it should be invalid)
            const timeOutId = setTimeout(() => {
                setError("Please enter a valid email") //everytime email changes, after 600ms trigger this func where if its not default position and also invalid means user actually entered bad email so error is displayed
            }, 600);
            return () => clearTimeout(timeOutId); //cleanup func
        }
    }, [email]);

    return (
        <main>
            <SEO pageTitle="Join the Lucid Automation Waitlist" pageDescription="Sign up to the Lucid Automation waitlist to join our user base currently managing over 10,000 growing accounts. Secure your spot today!"/>
            <div className="flex flex-col items-center text-center mt-10 md:mt-24 mb-64">
                <h1 className="font-extrabold text-[22px] md:text-[48px]">
                    Smart tools for smarter growth
                </h1>
                <div className='mt-6 rounded-lg w-[300px] h-[215px] md:w-[450px] md:h-[315px] flex justify-center border-2 border-white shadow-[0_4px_6px_rgba(255,255,255,0.2),0_10px_20px_rgba(255,255,255,0.2)] bg-gradient-to-tr from-[#2C0E4D] from-15% to-[#1a161c] to-85%'>
                    <div className='flex flex-col items-center text-center mt-4 md:mt-8'>
                        <div className='text-[13px] font-bold mx-6 mb-6 md:mb-8 md:text-[20px] md:mx-10'>
                            Stay ahead in the social media scene with Lucid Automation. Join our waitlist for early access to powerful tools, exclusive updates, and special promotions.
                        </div>
                        <input className="rounded-md w-[270px] md:w-[375px] bg-[#D9D9D9] text-black font-semibold border-2 border-white text-[12px] p-2" name="email" disabled={isSubmitted}  value={email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}></input>
                        <p className="text-[10px] text-red-500 font-semibold md:text-[12px] my-auto">
                            {error}
                        </p>
                    </div>
                </div>
                <button 
                    aria-label="submit waitlist button"
                    disabled={!isEmailValid || isSubmitted}
                    onClick={handleClick} 
                    className={`mt-16 border-2 border-white rounded-lg whitespace-nowrap flex justify-center items-center text-[13px] md:text-[14px] transform transition-all duration-300 ${isSubmitted ? 'bg-green-500 w-12 h-8 md:w-14 md:h-10' : 'enabled:bg-[#0095F7] w-32 h-8 md:w-64 md:h-10 hover:enabled:scale-105 disabled:bg-opacity-50 disabled:bg-[#637A99]'}`}
                >
                    {isSubmitted ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    ) : (
                        'Join waitlist'
                    )}
                </button>
            </div>
        </main>
    )
}

export default Waitlist;