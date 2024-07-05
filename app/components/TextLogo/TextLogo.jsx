import Image from 'next/image';

const TextLogo = () => {
    return (
        <div className="pl-10 pr-20">
            <Image
                src="/textLogo.png"
                alt="logo image"
                quality="100"
                width={250}
                height={50}
            />
        </div>
    )
}

export default TextLogo;