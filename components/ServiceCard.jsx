'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const ServiceCard = ({ iconA, iconB, title, text }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <main
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className='shadow-md rounded-md px-4 py-6 bg-[#F3F8FF] flex flex-col group custom-transition hover:bg-[#0252CD] hover:text-white lg:hover:translate-y-5 dark:bg-[#192333] dark:hover:bg-[#0252CD] gap-y-2'
        >
            <div className='rounded-md bg-[#0252CD] w-10 h-10 grid place-items-center p-3 group-hover:bg-white custom-box-shadow'>
                <Image
                    src={hovered ? iconA : iconB}
                    width={20}
                    height={20}
                    alt='icon'
                />
            </div>
            <h3 className='capitalize text-lg font-semibold group-hover:text-white'>
                {title}
            </h3>
            <p className='text-[#6F74A7] group-hover:text-white dark:text-white'>
                {text}
            </p>
        </main>
    );
};

export default ServiceCard;
