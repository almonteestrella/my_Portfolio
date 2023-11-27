// 'use client';
import { navLinks } from '@/utils';
import Link from 'next/link';
import { Main, NavLinksDiv, Button } from './SidebarStyled';

const Sidebar = ({ isOpen, closeSidebar }) => {
    return (
        <Main>
            <aside className={isOpen ? 'sidebar show-sidebar' : 'sidebar'}>
                <NavLinksDiv>
                    {navLinks.map(({ id, path, text }) => (
                        <li key={id}>
                            <Link href={path} onClick={closeSidebar}>
                                {text}
                            </Link>
                        </li>
                    ))}

                    <Button>
                        <Link
                            href='http://localhost:3000/juan-almonte-resume.pdf'
                            download
                            target='_blank'
                            className='link'
                        >
                            Resume
                        </Link>
                    </Button>
                </NavLinksDiv>
            </aside>
        </Main>
    );
};

export default Sidebar;
