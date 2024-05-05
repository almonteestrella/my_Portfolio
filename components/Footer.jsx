import { socialLinks } from '@/app/utils';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <main className='bg-white dark:bg-[#151E2C] py-12'>
            <div className='flex flex-col lg:flex-row text-center lg:justify-between container text-[#778295] dark:text-white'>
                <h3 className='mb-2 capitalize'>
                    &copy; <span>{new Date().getFullYear()}</span> juan almonte.
                    All rights reserved
                </h3>
                <ul className='flex gap-x-4 justify-center'>
                    {socialLinks.map(({ icon, id }) => {
                        return (
                            <li key={id}>
                                <Link href={'#'}>{icon}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </main>
    );
};

export default Footer;
