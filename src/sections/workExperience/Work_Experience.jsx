import Image from 'next/image';
import React, { useState } from 'react';

import {
    ImgDiv,
    HeaderDiv,
    Container,
    H2,
    P,
    Main,
    Span,
} from './Work_Experience_Styled';
import JobExperienceInfo from '@/components/JobExperienceTab';
import { experienceInfo } from '@/utils';
import BtnContainer from '@/components/BtnContainer';

const Work_Experience = () => {
    const [currentItem, setCurrentItem] = useState(0);
    return (
        <Main>
            <Container>
                <HeaderDiv>
                    <H2>
                        work <br /> <Span>experience</Span>
                    </H2>
                    <div>
                        <JobExperienceInfo
                            info={experienceInfo}
                            currentItem={currentItem}
                        />
                    </div>

                    <ImgDiv>
                        <Image
                            src='/line-decoration-B.svg'
                            width={0}
                            height={0}
                            alt='line decoration'
                            className='hero-img'
                        />
                    </ImgDiv>
                </HeaderDiv>

                <div>
                    <BtnContainer
                        info={experienceInfo}
                        currentItem={currentItem}
                        setCurrentItem={setCurrentItem}
                    />
                </div>
            </Container>
        </Main>
    );
};

export default Work_Experience;
