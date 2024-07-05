import { Merriweather_Sans, Red_Hat_Text, Inter } from 'next/font/google';

export const merriweather_sans = Merriweather_Sans({
    subsets: ['latin'],
    display: 'swap',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
})

export const red_hat_text = Red_Hat_Text({
    subsets: ['latin'],
    display: 'swap',
    weight: "400"
})

export const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});