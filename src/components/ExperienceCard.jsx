import Image from 'next/image';
import React from 'react';
import {
    ExperienceCardButton,
    ImgDiv,
} from './componentStyles/ComponentsStyles';

const ExperienceCard = ({ image, title, info }) => {
    return (
        <ExperienceCardButton>
            <ImgDiv>
                <Image
                    src={image}
                    width={0}
                    height={0}
                    alt='branch logo'
                    className='experiencedCardImg'
                />
            </ImgDiv>
            <h3>{title}</h3>
            <p>{info}</p>
        </ExperienceCardButton>
    );
};

export default ExperienceCard;
