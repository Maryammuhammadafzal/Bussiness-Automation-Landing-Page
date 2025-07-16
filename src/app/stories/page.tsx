import Image from 'next/image'
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StoriesCarousel  from '@/components/StoriesCarousel';
import Heading from '@/components/Heading';

const StoriesPage = () => {
    return (
        <div className='w-full h-full flex md:flex-row flex-col lg:p-8 md:p-5 mt-30 md:justify-between justify-center items-center gap-6'>
            <div className='md:w-[35%] sm:w-[60%] xs:w-[70%] w-[85%] flex md:order-1 order-2'>
                <Image src='/images/story-image.png' alt='hero-image' width={630} height={420} />
            </div>
            <div className='md:w-[60%] flex-col gap-6 xs:w-[85%] w-[95%] flex md:order-2 order-1'>
                <Heading title='Client Success Stories' />
                <StoriesCarousel />
            </div>
        </div>
    )
}

export default StoriesPage
