import React from 'react';
import Image from 'next/image';

import { red_hat_text } from '../../fonts';

const Logo = ( {width, height, fontSize }) => {
    return (
        <div className='flex flex-nowrap items-center'>
            <div className='flex-none'>
                <Image
                    src="/SmallLucidLogo.png"
                    alt="Logo image"
                    quality="100"
                    width={width}
                    height={height}
                />
            </div>
            
            <span className={`${red_hat_text.className} ml-4 font-medium`} style={{ fontSize: `${fontSize}px` }}>
                lucid-automation
            </span>
        </div>
    )
}

export default Logo;
