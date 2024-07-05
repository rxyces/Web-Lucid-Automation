'use client';

import { useRouter } from 'next/navigation';

const WaitlistButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.push('/waitlist');
    };

    return (
        <button className="bg-[#853fbe] hover:bg-[#A46ED1] rounded-lg w-24 h-10 whitespace-nowrap flex justify-center items-center" onClick={handleClick} aria-label="waitlist button">
            Waitlist
        </button>
    )
}

export default WaitlistButton;