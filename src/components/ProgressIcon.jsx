import React from 'react';
import Image from 'next/image';
import { ProgressIconDiv } from '@/pages/pages_styles/Styles';

const ProgressIcon = ({ icon, info, className, alt }) => {
    return (
        <ProgressIconDiv>
            <div>
                <Image
                    src={icon}
                    width={0}
                    height={0}
                    className={className}
                    alt={alt}
                />
            </div>
            <p>{info}</p>
        </ProgressIconDiv>
    );
};

export default ProgressIcon;
