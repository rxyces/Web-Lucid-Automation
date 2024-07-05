
import Image from 'next/image';
import Link from 'next/link';

import WaitlistButton from './components/WaitlistButton/WaitlistButton';
import BuyButton from './components/BuyButton/BuyButton';
import FeatureWidget from './components/FeatureWidget/FeatureWidget';
import ContactForm from './components/ContactForm/ContactForm';


export default function Home() {
    const features = [
        {
            title: 'Mass Account Generation',
            description: 'Effortlessly create multiple genuine accounts, building a network to use in your engagement strategy.',
            src: 'genAccountIcon',
            biggerImage: true
        },
        {
            title: 'Comprehensive Account Analytics',
            description: 'Generate detailed spreadsheets to track account information, providing unique insights to streamline performance.',
            src: 'analyticsIcon',
            biggerImage: false
        },
        {
            title: 'Autonomous Account Maintenance',
            description: 'Keep your accounts active and engaging with autonomous posting of stories, posts, and comments.',
            src: 'maintenanceIcon',
            biggerImage: false
        },
        {   
            title: 'Direct Message Outreach',
            description: 'Automate direct messages to promote your page and engage with your audience.',
            src: 'dmsIcon',
            biggerImage: false
        },
        {
            title: 'Comment Management',
            description: 'Efficiently manage comments by deleting negative ones, posting replies, and liking.',
            src: 'commentIcon',
            biggerImage: true
        },
        {
            title: 'Intelligent Activity Generation',
            description: 'Automatically publish posts and stories, fostering organic growth and probability of featuring on the explore page.',
            src: 'genActivityIcon',
            biggerImage: true
        },
    ];

	return (
		<main>
            <div className='flex flex-col md:flex-row items-center justify-center pt-10 px-8 md:pt-56 md:px-36'>
                <div className='flex flex-col max-w-[400px] md:max-w-lg m-10 md:pb-36 md:flex-none'>
                    <div className='font-extrabold text-[16px] md:text-[36px]'>
                        Empower your PR with
                    </div>
                    <div className='text-[#853fbe] font-extrabold text-[24px] md:text-[48px] text-right'>
                        Lucid Automation
                    </div>
                    <div className='text-[#c7c2cb] font-extrabold text-[12px] md:text-[20px]'>
                        The ultimate toolset for Instagram account management and growth, powering over 100,000 accounts
                    </div>
                    <div className='flex space-x-4 items-center justify-center m-4 md:m-10'>
                        <WaitlistButton/>
                        <BuyButton/>
                    </div>
                </div>
                <div className='flex-initial min-w-[350px]'>
                    <Image
                        src="/UI.png"
                        alt="UI images"
                        quality="100"
                        height={1200}
                        width={1200}
                        priority
                    />
                </div>
            </div>

            <div></div>

            <div className='flex items-center justify-center m-10 mt-64'>
                <Link href="#features0" aria-label="Scroll to features">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#c7c2cb" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </Link>
            </div>

            <div className='flex justify-center items-center mt-48 md:mt-80'>
                <div className='grid justify-center items-center grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {features.map((feature, index) => (
                        <div id={`features${index}`} key={index} className="flex-none">
                            <FeatureWidget
                                title={feature.title}
                                description={feature.description}
                                src={feature.src}
                                biggerImage={feature.biggerImage}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex items-center justify-center m-10 mt-64'>
                <Link href="#contactForm" aria-label="Scroll to contact form">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#c7c2cb" className="size-6 md:size-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                    </svg>
                </Link>
            </div>

            <div className='flex justify-center items-center mt-64'>
                <ContactForm />
            </div>

		</main>
	);
}
