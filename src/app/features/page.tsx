
import Heading from '@/components/Heading'
import React from 'react'

const FeaturesPage = () => {
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
                    <div key={index} className='lg:w-[70%] md:w-[85%] w-[97%] relative h-auto py-10  group sm:px-4 px-2 flex flex-col border-b border-secondary  gap-4 '>
                        <h3 className='gradient-title w-fit font-semibold xl:text-[40px] lg:text-4xl sm:text-3xl text-2xl max-md:max-w-sm'>
                            {title}
                        </h3>
                        <p className='sm:text-base text-sm lg:max-w-2xl md:max-w-xl max-w-sm'>
                            {`${description}`}
                        </p>
                        <div className='absolute top-0 md:left-0 right-0 md:w-[265px] md:h-[295px] w-[200px] h-[200px] gradient md:-translate-x-100 transition-transform duration-700 rotate-6 md:group-hover:translate-x-[800px]'></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeaturesPage
