import React from 'react';
import {
    ExperienceCardButton,
    ImgDiv,
} from './componentStyles/ComponentsStyles';
import Image from 'next/image';

const BtnContainer = ({ info, currentItem, setCurrentItem }) => {
    return info.map(({ company_logo, title, info, id }, index) => (
        <ExperienceCardButton
            onClick={() => setCurrentItem(index)}
            key={id}
            className={index === currentItem ? 'active_btn' : ''}
        >
            <ImgDiv>
                <Image
                    src={company_logo}
                    width={0}
                    height={0}
                    alt='branch logo'
                    className='experiencedCardImg'
                />
            </ImgDiv>
            <div>
                <h3>{title}</h3>
                <p>{info}</p>
            </div>
        </ExperienceCardButton>
    ));
};

export default BtnContainer;
