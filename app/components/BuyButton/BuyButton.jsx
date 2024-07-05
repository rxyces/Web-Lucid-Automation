'use client'


import React from 'react'
import { useState, useEffect } from 'react'


const BuyButton = () => {
    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        console.log("make api call")
        setIsDisabled(true)
    }, [])


    return (
        <button className="bg-[#853fbe] enabled:hover:bg-[#A46ED1] disabled:bg-[#3e2851] rounded-lg w-24 h-10 whitespace-nowrap flex justify-center items-center" disabled={isDisabled} aria-label="waitlist and buy buttons">
            {isDisabled ? "Sold out" : "Buy now"}
        </button>
    )
    
}

export default BuyButton;