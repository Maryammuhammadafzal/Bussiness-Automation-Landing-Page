import Vector from '@/components/Vector'
import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-screen flex relative justify-center items-center'>
            <div className="vector absolute w-[400px] -rotate-45 h-[540px] -top-20 -left-20">
                <Vector/>
            </div>
            <div className='w-full h-full flex justify-center items-center bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('/images/hero-bg.png')` }}>
                <div className='w-full h-full flex md:flex-row flex-col lg:p-8 md:p-5 mt-30 md:justify-between justify-center items-center gap-6'>
                    <h1 className='xl:text-8xl z-20 lg:text-7xl sm:text-6xl text-5xl max-[380px]:text-4xl md:w-1/2 sm:w-[60%] xs:w-[70%] w-[85%] font-semibold xl:leading-22 lg:leading-20 md:leading-16'>
                        Welcome to AutomateEdge Solutions
                    </h1>
                    <div className='md:w-1/2 sm:w-[60%] xs:w-[70%] w-[85%] flex justify-end'>
                        <Image src='/images/hero-image.png' alt='hero-image' width={630} height={420} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroPage
