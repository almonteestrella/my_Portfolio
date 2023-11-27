import React from 'react';
import Link from 'next/link';
import { AiOutlineDownload } from 'react-icons/ai';
import { Li } from './componentStyles/ComponentsStyles';

const Resume = () => {
    return (
        <Li>
            <Link
                href='http://localhost:3000/juan-almonte-resume.pdf'
                download
                target='_blank'
                className='link'
            >
                <span>
                    <AiOutlineDownload />
                </span>
                resume
            </Link>
        </Li>
    );
};

export default Resume;
