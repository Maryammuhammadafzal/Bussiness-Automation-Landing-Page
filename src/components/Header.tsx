'use client'
import { MenuIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'

const Header = () => {
    const [isOpen , setIsOpen]= useState(false);
    const nav_data = [
        {
            name: 'Home',
            link: '/'
        },
        {
            name: 'About',
            link: '/'
        },
        {
            name: 'Expertise',
            link: '/'
        },
        {
            name: 'Projects',
            link: '/'
        },
        {
            name: 'Contact Us',
            link: '/'
        },
    ]
    return (
        <div className='w-full h-[120px] flex justify-center items-center fixed top-0 left-0'>
            <div className='w-full h-full flex justify-between items-center gap-4 lg:px-8 px-5'>
                <Link href='/' className='w-auto h-auto'>
                    <p className='logo text-[40px] font-semibold px-2'>LOGO</p>
                </Link>
                <nav className='w-auto h-auto flex justify-center items-center'>
                    <ul className='w-auto sm:flex hidden h-auto lg:gap-8 font-light md:gap-5 gap-2  items-center'>
                        {
                            nav_data.map(({ name, link }, index) => (
                                <li key={index} className='nav-list py-1 px-3'>
                                    <Link href={link}>{name}</Link>
                                </li>
                            ))
                        }
                    </ul>
                    <MenuIcon size={32} onClick={()=> setIsOpen(!isOpen)} />
                        <div className='flex w-50 h-screen bg-primary'></div>
                </nav>
            </div>
        </div>
    )
}

export default Header
