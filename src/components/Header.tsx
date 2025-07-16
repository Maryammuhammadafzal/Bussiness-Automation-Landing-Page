'use client'
import { MenuIcon, X } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [offset, setOffset] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            setOffset(window.scrollY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    } , []);
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
    ];
    console.log(offset);
    
    return (
        <div className={`${offset > 0 ? 'bg-black' : 'bg-transparent' } w-full h-[100px] flex justify-center items-center fixed z-50 top-0 left-0`}>
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
                    <MenuIcon size={32} onClick={() => setIsOpen(!isOpen)} className='sm:hidden block' />
                    <nav className={`${isOpen ? 'translate-x-0 w-50 flex' : 'translate-x-50 w-0 hidden'} sm:hidden h-screen bg-black duration-700 fixed right-0 top-0`}>
                        <ul className='w-full h-full py-6 px-3 flex flex-col gap-6'>
                            <li className='w-full flex justify-end items-center p-3'>
                                <X onClick={() => setIsOpen(false)} size={32} />
                            </li>
                            {
                                nav_data.map(({ name, link }, index) => (
                                    <li key={index} className='nav-list py-1 px-3'>
                                        <Link href={link}>{name}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                </nav>
            </div>
        </div>
    )
}

export default Header
