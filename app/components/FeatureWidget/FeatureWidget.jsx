import React from 'react';
import Image from 'next/image';

const FeatureWidget = ({ title, description, src, biggerImage }) => {
    const width = biggerImage ? "w-[113px]" : "w-[80px]";

    return (
    <div className='rounded-lg w-[280px] h-[270px] md:w-[350px] md:h-[310px] flex justify-center border-2 border-white shadow-[0_4px_6px_rgba(255,255,255,0.2),0_10px_20px_rgba(255,255,255,0.2)] bg-gradient-to-br from-[#4B1E71] from-15% to-[#000000] to-85% transform transition-transform duration-200 hover:scale-105 hover:shadow-[0_8px_12px_rgba(133,63,190,0.4),0_20px_40px_rgba(133,63,190,0.4)]'>
        <div className='flex flex-col items-center w-4/5 text-center pt-4'>
            <div className={`mb-5 flex-none relative ${width} h-[80px]`}>
                <Image
                    src={`/icons/${src}.png`}
                    alt={`${src} icon`}
                    quality="100"
                    fill
                    style={{ objectFit: 'contain' }}
                />
            </div>
            <div className='text-[16px] font-bold mb-4 md:mb-6 md:text-[20px]'>
                {title}
            </div>
            <div className='text-[12px] text-[#C7C2CB] md:text-[16px]'>
                {description}
            </div>
        </div>
    </div>
    )
}

export default FeatureWidget;
