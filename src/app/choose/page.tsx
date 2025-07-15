
import Heading from '@/components/Heading'
import React from 'react'

const ChoosePage = () => {
  return (
     <div className='w-full h-auto flex md:py-20 py-10 flex-col md:gap-10 sm:gap-8 xs:gap-5 gap-2 sm:px-8 px-4'>
            <Heading title='Why Choose Us?' />
            <div className='flex flex-wrap w-full h-auto'>
      <div className='w-[24%] h-auto py-10 px-4 flex justify-center items-center gap-4 border-image'></div>
    </div>
    </div>
  )
}

export default ChoosePage
