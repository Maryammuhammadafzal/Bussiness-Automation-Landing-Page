
'use client'
import Heading from '@/components/Heading'
import Aos from 'aos';
import React, { useEffect, useState } from 'react'
import 'aos/dist/aos.css'
const FeaturesPage = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        Aos.init({
            duration: 1000,
            once: true,
        })

        if (typeof window !== 'undefined') {
            setIsMobile(window.innerWidth < 768)
        }
    }, []);
    const choose_data = [
        {
            title: 'Increase Operational Efficiency',
            description: 'Clients have reported up to a 70% reduction in manual tasks, freeing teams to focus on strategic initiatives.'
        },
        {
            title: 'Reduce Costs',
            description: 'From cutting down error-related expenses to minimizing resource overhead, automation drives significant cost savings.'
        },
        {
            title: 'Save Time',
            description: 'What once took days now takes minutes. Our solutions accelerate everything from approvals to reporting.'
        },
        {
            title: 'Improve Decision-Making',
            description: 'With real-time analytics and seamless data flow, you get clearer insights, faster.'
        },
        {
            title: 'Enhance Customer Experience',
            description: 'From instant follow-ups to smoother onboarding, automation ensures a better journey for your clients.'
        },

    ]
    return (
        <div className='w-full h-auto flex md:py-20 py-10 flex-col md:gap-10 sm:gap-8 xs:gap-5 gap-2 sm:px-8 px-4'>
            <Heading title='Real-World Impact' />
            <div className='flex flex-col gap-6 w-full h-auto'>
                {choose_data.map(({ title, description }, index) => (
                    <div key={index} className='lg:w-[70%] md:w-[85%] w-[97%] relative h-auto md:py-10 py-16  group sm:px-4 px-2 flex flex-col border-b border-secondary  gap-4 '>
                        <h3 className='gradient-title w-fit font-semibold xl:text-[40px] lg:text-4xl sm:text-3xl text-2xl max-md:max-w-sm max-sm:max-w-[300px]'>
                            {title}
                        </h3>
                        <p className='sm:text-base text-sm lg:max-w-2xl md:max-w-xl sm:max-w-sm max-w-[300px] '>
                            {`${description}`}
                        </p>
                        <div data-aos={isMobile? 'fade-up' : undefined} className='absolute md:top-0 top-3 md:left-0 right-0 md:w-[265px] md:h-[295px] sm:w-[200px] sm:h-[200px] w-[170px] h-[170px] gradient md:-translate-x-100 transition-transform duration-700 rotate-6 md:group-hover:translate-x-[800px]'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesPage
