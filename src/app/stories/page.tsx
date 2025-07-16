import Image from 'next/image'
import React from 'react'

const StoriesPage = () => {
    return (
        <div className='w-full h-full flex md:flex-row flex-col lg:p-8 md:p-5 mt-30 md:justify-between justify-center items-center gap-6'>
            <div className='md:w-1/2 sm:w-[60%] xs:w-[70%] w-[85%] flex justify-end'>
                <Image src='/images/hero-image.png' alt='hero-image' width={630} height={420} />
            </div>
            <div className='md:w-1/2 sm:w-[60%] xs:w-[70%] w-[85%] flex justify-end'>
                <Image src='/images/hero-image.png' alt='hero-image' width={630} height={420} />
            </div>
        </div>
    )
}

export default StoriesPage
