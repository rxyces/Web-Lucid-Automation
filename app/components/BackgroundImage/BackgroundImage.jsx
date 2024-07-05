import React from 'react';
import Image from "next/image";

import styles from './BackgroundImage.module.css';

const BackgroundImage = () => {
    return (
        <div className={styles.mainContainer}>
            <Image
            src="/Background.png"
            alt="Background gradient image"
            quality="100"
            layout="fill"
            priority
            className={styles.backgroundImage}
        />
        </div>
    )
}

export default BackgroundImage;