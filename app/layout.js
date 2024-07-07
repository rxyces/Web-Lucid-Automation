import { merriweather_sans } from './fonts';
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

import Footer from "./components/Footer/Footer";
/** @type {import("next").Viewport} */


export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export const metadata = {
    title: "Lucid Automation",
    description: "Revolutionary social media management software, designed to grow your social media presence. Effortlessly gain engagement and enhance outreach.",
};


export default function RootLayout({ children }) {
    
    return (
        <html lang="en">
        <body className={`${merriweather_sans.className} min-h-screen`}>
            <div style={{ fontSize: '16px' }}>
                <SpeedInsights/>
                <Analytics/>
                <NavigationBar/>
                {children}
                <Footer/>
            </div>
        </body>
        </html>
    );
}
