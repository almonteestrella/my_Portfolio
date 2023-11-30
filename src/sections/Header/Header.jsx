import React, { useState, useEffect } from 'react';
import {
    Container,
    Navbar,
    ContactDropDown,
    Section,
    H4,
    H1,
    P,
    BtnContainer,
    Button,
    NavLinks,
    Main,
    HeroImgDiv,
} from './HeaderStyles';
import Link from 'next/link';
import Image from 'next/image';
import { navLinks } from '@/utils';
import { FaTimes } from 'react-icons/fa';
import { CiMenuKebab } from 'react-icons/ci';
import CopyToClipboard from '@/components/CopyToClipboard';
import Sidebar from '../Sidebar/Sidebar';
import DarkModeButton from '@/components/DarkModeButton';
import Resume from '@/components/Resume';

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    //sticky behavior
    const [navbarVisible, setNavbarVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 100
                ? setNavbarVisible(true)
                : setNavbarVisible(false);
        });
    }, []);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <Main id='home'>
            <Navbar className={`navbar ${navbarVisible ? 'sticky' : ''}`}>
                <div>
                    <Image src='/Logo.svg' width={45} height={45} alt='logo' />
                    <ContactDropDown>
                        <button
                            onClick={() => toggleSidebar()}
                            className='close-btn'
                        >
                            {isSidebarOpen ? (
                                <span>
                                    <FaTimes />
                                </span>
                            ) : (
                                <span>
                                    <CiMenuKebab />
                                </span>
                            )}
                        </button>

                        <span className='dark-mode'>
                            <DarkModeButton />
                        </span>
                    </ContactDropDown>

                    <NavLinks>
                        {navLinks.map(({ id, path, text }) => (
                            <li key={id}>
                                <Link href={path}>{text}</Link>
                            </li>
                        ))}
                        <Resume />
                        <li>
                            <Image
                                src='/navbarLine.svg'
                                width={0}
                                height={0}
                                alt='navbar separator'
                                className='navbar-line'
                            />
                        </li>

                        <DarkModeButton />
                    </NavLinks>
                </div>
            </Navbar>
            <Container>
                <Sidebar isOpen={isSidebarOpen} closeSidebar={toggleSidebar} />

                <Section>
                    <div>
                        <H4>hi, i am juan almonte</H4>
                        <H1>
                            professional <br />
                            <span className='underline'>
                                web developer
                            </span>{' '}
                            <br />
                            based in canada
                        </H1>
                        <P>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Optio eum, at explicabo enim doloremque iure
                            sit quidem repellendus exercitationem asperiores
                        </P>

                        <BtnContainer>
                            <Link href='#projects' className='work'>
                                my work
                            </Link>
                            <CopyToClipboard />
                        </BtnContainer>
                    </div>

                    <HeroImgDiv>
                        <Image
                            src='/hero.svg'
                            width={0}
                            height={0}
                            alt='hero-img'
                            className='hero-img'
                        />
                    </HeroImgDiv>
                </Section>
            </Container>
        </Main>
    );
};

export default Header;
