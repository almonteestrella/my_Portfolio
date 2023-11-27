import Challenges from '@/components/Challenges';
import TechLogo from '@/components/TechLogo';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { BiWorld } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

import {
    Section1,
    Section2,
    RoleArticle,
    TechnoArticle,
    Section3,
    H3,
    H2,
    ImgDiv,
    Section4,
    DarkModeDiv,
} from './pages_styles/Styles';
import ProgressIcon from '@/components/ProgressIcon';
import BackToTop from '@/components/BackToTop';
import DarkModeButton from '@/components/DarkModeButton';

const jobit = () => {
    return (
        <>
            <BackToTop />

            <Section1>
                <div className='DarkModeDiv'>
                    <DarkModeButton />
                </div>
                <header>
                    <h4>web dev project</h4>
                    <h1>
                        <span className='underline'>jobit</span> - unique job
                        search app experience
                    </h1>
                </header>
                <div>
                    <Image
                        src='jobIt-hero.svg'
                        height={0}
                        width={0}
                        alt='hero img'
                        className='hero-img'
                    />
                    <article>
                        <div>
                            <Link href={'https://jobit-dd.vercel.app/'}>
                                <span className='icon-left'>
                                    <BiWorld />
                                </span>
                                demo site
                                <span className='icon-right'>
                                    <BsArrowRight />
                                </span>
                            </Link>
                        </div>
                        <div>
                            <Link href='#'>
                                <span className='icon-left'>
                                    <BsGithub />
                                </span>
                                source code
                                <span className='icon-right'>
                                    <BsArrowRight />
                                </span>
                            </Link>
                        </div>
                    </article>
                </div>
            </Section1>

            <Section2>
                <RoleArticle>
                    <div>
                        <h5>my role</h5>
                        <h2>front end developer</h2>
                    </div>
                    <div>
                        <h5>start date</h5>
                        <h2>febreary 10th</h2>
                    </div>
                    <div>
                        <h5>end date</h5>
                        <h2>march 10th</h2>
                    </div>
                </RoleArticle>

                <TechnoArticle>
                    <H3>technologies used</H3>
                    <H2>tech stack</H2>
                    <div className='flexDiv'>
                        <TechLogo image='/git.svg' name='git' />

                        <TechLogo
                            image='/framerMotion.svg'
                            name='framer motion'
                        />

                        <TechLogo image='/react.svg' name='react' />
                        <TechLogo image='/redux.svg' name='RTK' />

                        <TechLogo image='/tailwind.svg' name='tailwind' />
                    </div>
                </TechnoArticle>
            </Section2>
            <Section3>
                <div className='content'>
                    <p className='m-1'>
                        As humans, we all, from time to time, feel the needs to
                        look for a new or career changed; which is why we
                        decided to create this amazing app
                    </p>
                    <p>
                        My team and I also developed a unique job search page
                        offers a search bar and various filtering options for
                        users to find the your dream job.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Velit deserunt delectus dicta soluta unde corrupti
                        expedita repellendus, laboriosam quidem molestiae nihil
                        earum quasi odio inventore. Labore voluptatem harum
                        maiores, nesciunt placeat vitae at tenetur excepturi
                        alias quibusdam fugiat, assumenda a?
                    </p>

                    <H3>problem</H3>
                    <H2>problem statement</H2>

                    <p>
                        jobit is a job search application, where you can type
                        and look for any kind of job available on the market you
                        may wish, in your existing location; implementing
                        technologies like: React.js / Next.js, tailwind and
                        additional npm packages. All done during one month
                    </p>
                    <Image
                        src='/job_Seeking.jpeg'
                        width={1280}
                        height={720}
                        alt='job search'
                        className='taxis'
                    />
                </div>
            </Section3>
            <ImgDiv>
                <Image
                    src='/jobit1.svg'
                    width={0}
                    height={0}
                    alt='figma design'
                    className='figma-design'
                />
            </ImgDiv>
            <Section3>
                <div className='content'>
                    <div className='heading'>
                        <H3>way of work</H3>
                        <H2>my process</H2>
                    </div>

                    <div className='flex-div'>
                        <ProgressIcon
                            icon='definition.svg'
                            alt='definition-progress'
                            className='progress-icon'
                            info='definition'
                        />
                        <ProgressIcon
                            icon='design.svg'
                            alt='design-progress'
                            className='progress-icon'
                            info='progress'
                        />
                        <ProgressIcon
                            icon='planning.svg'
                            alt='planning-progress'
                            className='progress-icon'
                            info='planning'
                        />
                        <ProgressIcon
                            icon='development.svg'
                            alt='development-progress'
                            className='progress-icon'
                            info='development'
                        />
                        <ProgressIcon
                            icon='deployment.svg'
                            alt='deployment-progress'
                            className='progress-icon'
                            info='deployment'
                        />
                    </div>
                </div>
            </Section3>

            <Section4>
                <div className='content'>
                    <div className='heading'>
                        <H3>problem</H3>
                        <H2>challenges & learning</H2>
                    </div>

                    <article className='first-article'>
                        <h2>challenges</h2>
                        <Challenges
                            image='/challenge-icon.svg'
                            info='   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos fuga facere qui ab error, dolorum dicta consequuntur dolore iure expedita iusto animi optio deleniti aperiam est ut nesciunt eum placeat! Totam molestiae illum excepturi nulla tempore aliquid sequi similique eligendi incidunt minima sint, alias, commodi quibusdam doloremque eos autem dolorum?'
                            className='icon'
                        />
                        <Challenges
                            image='/challenge-icon.svg'
                            info='   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos fuga facere qui ab error, dolorum dicta consequuntur dolore iure expedita iusto animi optio deleniti aperiam est ut nesciunt eum placeat! Totam molestiae illum excepturi nulla tempore aliquid sequi similique eligendi incidunt minima sint, alias, commodi quibusdam doloremque eos autem dolorum?'
                            className='icon'
                        />
                        <Challenges
                            image='/challenge-icon.svg'
                            info='   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos fuga facere qui ab error, dolorum dicta consequuntur dolore iure expedita iusto animi optio deleniti aperiam est ut nesciunt eum placeat! Totam molestiae illum excepturi nulla tempore aliquid sequi similique eligendi incidunt minima sint, alias, commodi quibusdam doloremque eos autem dolorum?'
                            className='icon'
                        />
                    </article>

                    <article>
                        <h2 className='learning'>learning</h2>
                        <Challenges
                            image='/learning-icon.svg'
                            info='   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos fuga facere qui ab error, dolorum dicta consequuntur dolore iure expedita iusto animi optio deleniti aperiam est ut nesciunt eum placeat! Totam molestiae illum excepturi nulla tempore aliquid sequi similique eligendi incidunt minima sint, alias, commodi quibusdam doloremque eos autem dolorum?'
                            className='icon'
                        />
                        <Challenges
                            image='/learning-icon.svg'
                            info='   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos fuga facere qui ab error, dolorum dicta consequuntur dolore iure expedita iusto animi optio deleniti aperiam est ut nesciunt eum placeat! Totam molestiae illum excepturi nulla tempore aliquid sequi similique eligendi incidunt minima sint, alias, commodi quibusdam doloremque eos autem dolorum?'
                            className='icon'
                        />
                        <Challenges
                            image='/learning-icon.svg'
                            info='   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos fuga facere qui ab error, dolorum dicta consequuntur dolore iure expedita iusto animi optio deleniti aperiam est ut nesciunt eum placeat! Totam molestiae illum excepturi nulla tempore aliquid sequi similique eligendi incidunt minima sint, alias, commodi quibusdam doloremque eos autem dolorum?'
                            className='icon'
                        />
                    </article>
                </div>
            </Section4>
        </>
    );
};

export default jobit;
