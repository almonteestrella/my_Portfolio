import Image from 'next/image';
import React from 'react';
import { ChallengeDiv } from './componentStyles/ComponentsStyles';

const Challenges = ({ image, info, className }) => {
    return (
        <ChallengeDiv>
            <Image
                src={image}
                width={0}
                height={0}
                alt='icon img'
                className={className}
            />
            <p>{info}</p>
        </ChallengeDiv>
    );
};

export default Challenges;
