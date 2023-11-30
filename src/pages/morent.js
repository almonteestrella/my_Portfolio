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
} from './pages_styles/Styles';
import ProgressIcon from '@/components/ProgressIcon';
import BackToTop from '@/components/BackToTop';
import DarkModeButton from '@/components/DarkModeButton';

const morent = () => {
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
                        <span className='underline'>morrent</span> - a car
                        rental website
                    </h1>
                </header>

                <div className='fixed-width'>
                    <Image
                        src='morrent-hero.svg'
                        height={0}
                        width={0}
                        alt='hero img'
                        className='hero-img'
                    />
                    <article>
                        <div>
                            <Link href='#'>
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
                <div className='fixed-width'>
                    <RoleArticle>
                        <div>
                            <h5>my role</h5>
                            <h2>software enginner</h2>
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

                            <TechLogo image='/mongodb.svg' name='mongo' />
                            <TechLogo
                                image='/framerMotion.svg'
                                name='framer motion'
                            />
                            <TechLogo image='/node.svg' name='node' />
                            <TechLogo image='/react.svg' name='react' />
                            <TechLogo image='/redux.svg' name='RTK' />

                            <TechLogo image='/tailwind.svg' name='tailwind' />
                        </div>
                    </TechnoArticle>
                </div>
            </Section2>
            <Section3>
                <div className='content'>
                    <p className='m-1'>
                        Morent, a cutting-edge car rental application that was
                        developed using the MERN stack. The app boasts a dynamic
                        homepage that showcases featured vehicles, along with
                        convenient pickup & drop-off location options & a
                        comprehensive list of available cars.
                    </p>
                    <p>
                        My team and I also developed the car listing page which
                        offers a search bar and various filtering options for
                        users to find the perfect vehicle. Additionally, it has
                        a car details page which provides users with detailed
                        information along with suggestions for other recommended
                        vehicles.
                    </p>
                    <p>
                        Car owners are also able to list their cars for rent
                        through our Add Car page, while users can easily track
                        their rented and rented-out cars through their profile
                        page. Overall, we've created an intuitive and
                        user-friendly MVP version of the platform that will make
                        renting a car a breeze.
                    </p>

                    <H3>problem</H3>
                    <H2>problem statement</H2>

                    <p>
                        One of the main problems that people face when looking
                        to rent a car is the hassle of finding a reliable and
                        user-friendly platform to search for and book rental
                        cars. In addition, car owners who want to rent out their
                        vehicles often struggle to find a suitable platform to
                        list their cars and manage their rentals.
                    </p>

                    <Image
                        src='/taxis.svg'
                        width={0}
                        height={0}
                        alt='taxis'
                        className='taxis'
                    />
                </div>
            </Section3>
            <ImgDiv>
                <Image
                    src='/figma_design.svg'
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

export default morent;
