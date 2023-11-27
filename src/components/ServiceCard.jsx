import Image from 'next/image';
import React, { useState } from 'react';
import { ServiceCardContainer } from './componentStyles/ComponentsStyles';

const ServiceCard = ({ iconA, iconB, title, text }) => {
    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    return (
        <ServiceCardContainer
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
        >
            <div className='serviceCardLogo'>
                <Image
                    src={hovered ? iconA : iconB}
                    width={0}
                    height={0}
                    alt='icon'
                    className='service-icon'
                />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </ServiceCardContainer>
    );
};

export default ServiceCard;
