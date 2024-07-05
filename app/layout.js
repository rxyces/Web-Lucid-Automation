import { merriweather_sans } from './fonts';
import "./globals.css";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { SpeedInsights } from "@vercel/speed-insights/next"

import Footer from "./components/Footer/Footer";
/** @type {import("next").Viewport} */


export const viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
}

export const metadata = {
    title: "Lucid Automation",
    description: "Ultimate toolset for Instagram account management and growth",
};


export default function RootLayout({ children }) {
    
    return (
        <html lang="en">
        <body className={`${merriweather_sans.className} min-h-screen`}>
            <div style={{ fontSize: '16px' }}>
                <SpeedInsights/>
                <NavigationBar/>
                {children}
                <Footer/>
            </div>
        </body>
        </html>
    );
}
