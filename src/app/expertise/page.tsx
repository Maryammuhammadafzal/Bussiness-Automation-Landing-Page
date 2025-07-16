import Heading from '@/components/Heading'
import Vector from '@/components/Vector'
import React from 'react'
import AboutPage from '../about/page'

const ExpertisePage = () => {
    return (
        <>
        <AboutPage/>
        <div className='w-full overflow-x-hidden h-auto flex md:py-20 py-10 flex-col md:gap-10 relative sm:gap-8 xs:gap-5 gap-2 sm:px-8 px-4'>
             <div className="vector absolute w-[400px] h-[540px] -top-20 -right-50 ">
                <Vector/>
            </div>
            <Heading title='Our Expertise' />
            <div className='flex xs:flex-row flex-col w-full h-auto'>
                <div className='xs:w-1/2 w-full h-auto xs:border-r border-secondary'>
                    <div className='w-full border-b sm:h-[230px] xs:h-[200px] h-auto flex flex-col gap-3 border-secondary py-10 px-1'>
                        <h3 className='gradient-title w-fit font-semibold max-md:leading-6 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg'>Workflow Automation</h3>
                        <p className='font-light md:text-base sm:text-sm text-xs max-w-xl'>Say goodbye to manual processes. We design and implement end-to-end workflow automation solutions to help your teams focus on what matters most—growth and innovation.</p>
                    </div>
                    <div className='w-full border-b sm:h-[230px] xs:h-[200px] h-auto flex flex-col gap-3 border-secondary py-10 px-1'>
                        <h3 className='gradient-title w-fit font-semibold max-md:leading-6 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg'>CRM & Sales Automation</h3>
                        <p className='font-light md:text-base sm:text-sm text-xs max-w-xl'>Boost your customer relationships and sales performance with smart CRM tools. Automate follow-ups, manage pipelines, and personalize communication effortlessly.</p>
                    </div>
                    <div className='w-full sm:h-[230px] xs:h-[200px] h-auto  max-xs:border-b border-secondary flex flex-col gap-3 py-10 px-1'>
                        <h3 className='gradient-title w-fit font-semibold max-md:leading-6 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg'>Marketing Automation</h3>
                        <p className='font-light md:text-base sm:text-sm text-xs max-w-xl'>Streamline your campaigns, capture leads, and increase ROI with automation tools that manage emails, social media, and analytics all in one place.</p>
                    </div>
                </div>
                <div className='xs:w-1/2 w-full h-auto'>
                    <div className='w-full border-b sm:h-[230px] xs:h-[200px] h-auto flex flex-col gap-3 border-secondary sm:pl-8 pl-4 py-10 px-1'>
                        <h3 className='gradient-title w-fit font-semibold max-md:leading-6 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg'>Finance Automation</h3>
                        <p className='font-light md:text-base sm:text-sm text-xs max-w-xl'>Reduce human error and increase efficiency in invoicing, payroll, and reporting with AI-powered finance automation solutions.</p>
                    </div>
                    <div className='w-full border-b sm:h-[230px] xs:h-[200px] h-auto flex flex-col gap-3 border-secondary sm:pl-8 pl-4 py-10 px-1'>
                        <h3 className='gradient-title w-fit font-semibold max-md:leading-6 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg'>HR & Employee Onboarding</h3>
                        <p className='font-light md:text-base sm:text-sm text-xs max-w-xl'>Enhance employee experience from day one. Automate onboarding, documentation, and training with tailored HR automation solutions.</p>
                    </div>
                    <div className='w-full sm:h-[230px] xs:h-[200px] h-auto flex flex-col gap-3 sm:pl-8 pl-4 py-10 px-1'>
                        <h3 className='gradient-title w-fit font-semibold max-md:leading-6 xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl text-lg'>Custom Integration</h3>
                        <p className='font-light md:text-base sm:text-sm text-xs max-w-xl'>We connect your favorite tools and platforms to create seamless automated ecosystems tailored to your unique business needs.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpertisePage
