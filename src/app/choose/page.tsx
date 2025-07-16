
import Heading from '@/components/Heading'
import Vector from '@/components/Vector'
import React from 'react'

const ChoosePage = () => {
  const choose_data = [
    {
      title: 'Industry Experts',
      description: 'Our team brings years of experience and deep technical knowledge to every project, ensuring optimal solutions.'
    },
    {
      title: 'Custom Solutions',
      description: 'No two businesses are the same. We deliver tailored automation strategies aligned with your goals and workflows.'
    },
    {
      title: 'Proven Results',
      description: 'We’ve helped countless businesses increase efficiency by up to 70% while reducing operational costs and errors.'
    },
    {
      title: 'Secure & Scalable',
      description: 'From consultation to post-launch, our support team is always here to ensure your automation systems run smoothly.'
    },

  ]
  return (
    <div className='w-full h-auto flex md:py-20 py-10 flex-col md:gap-10 sm:gap-8 xs:gap-5 gap-2 sm:px-8 px-4'>
      <Heading title='Why Choose Us?' />
      <div className='grid lg:grid-cols-4 xs:grid-cols-2 grid-cols-1 gap-6 justify-evenly w-full h-auto'>
        {choose_data.map(({ title, description }, index) => (
          <div className='w-auto h-auto relative'>

            <div key={index} className='min-h-[220px] h-auto bg-primary z-20 py-10 text-center sm:px-4 px-2 flex flex-col justify-center items-center gap-4 border-image'>
              <h3 className='font-semibold sm:text-2xl text-xl'>
                {title}
              </h3>
              <p className='sm:text-base text-sm'>
                {`${description}`}
              </p>
            </div>
            <div className="vector -z-10 absolute w-[250px] h-[300px] -top-20 -left-20">
              <Vector />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChoosePage
