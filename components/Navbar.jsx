'use client';

import { navLinks } from '@/app/utils';
import Link from 'next/link';
import { ModeToggle } from './ThemeToggle';
import Image from 'next/image';
import { MobileView } from './MobileView';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
    //sticky behavior
    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100
                ? setNavbarVisible(true)
                : setNavbarVisible(false);
        });
    }, []);
    return (
        <main
            className={`container flex navbar justify-between items-center py-4 mb-10 lg:mb-0 ${
                navbarVisible ? 'sticky bg-white dark:bg-[#111823] w-full' : ''
            }`}
        >
            <div className='flex items-center gap-x-3'>
                <MobileView />

                <Link href='/'>
                    <Image src='/Logo.svg' width={40} height={40} alt='logo' />
                </Link>
            </div>
            <div className='flex gap-x-4'>
                <ul className='lg:flex gap-x-3 items-center hidden'>
                    {navLinks.map(({ text, path }, index) => (
                        <li key={index} className=''>
                            <Link
                                href={path}
                                className='custom-transition hover:text-[#0252CD] capitalize text-[#6F74A7] dark:text-white'
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ModeToggle />
            </div>
        </main>
    );
};

export default Navbar;
