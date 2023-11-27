import ProjectCard from '@/components/ProjectCard';

import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Container, H2, Span, FlexDiv, Main } from './Projects_Styles';
import { TbExternalLink } from 'react-icons/tb';

const Projects = () => {
    return (
        <Main id='projects'>
            <Container>
                <H2>
                    featured <Span>projects</Span>
                </H2>

                <FlexDiv>
                    <ProjectCard
                        image='/jobit-hero.svg'
                        icon={<TbExternalLink />}
                        imageInfo='job search'
                        title='jobit - a job finding application'
                        color='#0BAB7C'
                        bg_color='#54c4a3'
                        caseStudy='/jobit'
                        left={false}
                        tech={[
                            'next.js',
                            'tailwind',
                            'redux-toolkit',
                            'chart.js',
                        ]}
                    />

                    <ProjectCard
                        image='/morrent-hero.svg'
                        icon={<TbExternalLink />}
                        imageInfo='car rent search'
                        title='morrent - a card rental application'
                        details='MERN application'
                        color='#3563E9'
                        bg_color='#5d82ed'
                        caseStudy='/morent'
                        left={true}
                        tech={[
                            'vite',
                            'tailwind',
                            'redux-toolkit',
                            'node',
                            'express',
                            'mongodb',
                        ]}
                    />
                </FlexDiv>
            </Container>
        </Main>
    );
};

export default Projects;
