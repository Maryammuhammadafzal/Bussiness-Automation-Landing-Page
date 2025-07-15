import Image from 'next/image'
import React from 'react'

const HeroPage = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center'>
            <div className='w-full h-full flex justify-center items-center bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url('/images/hero-bg.png')` }}>
                <div className='w-full h-full flex md:flex-row flex-col p-6 justify-between items-center gap-6'>
                    <h1 className='text-8xl font-semibold leading-12'>
                        Welcome to AutomateEdge Solutions
                    </h1>
                    <Image src='/images/hero-image.png' alt='hero-image' />
                </div>
            </div>

        </div>
    )
}

export default HeroPage
