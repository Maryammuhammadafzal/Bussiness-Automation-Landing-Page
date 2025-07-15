import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('/images/hero-bg.png')` }}>
                <div className='w-full h-full flex md:flex-row flex-col lg:p-8 md:p-5 mt-30 justify-between items-center gap-6'>
                    <h1 className='text-8xl w-1/2 font-semibold leading-22'>
                        Welcome to AutomateEdge Solutions
                    </h1>
                    <div className='w-1/2 flex justify-end'>
                        <Image src='/images/hero-image.png' alt='hero-image' width={630} height={420} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroPage
