import { socialLinks } from '@/utils';
import React from 'react';
import { Main, Div1 } from './FooterStyles';

const Footer = () => {
    return (
        <Main>
            <h3>
                &copy; <span>{new Date().getFullYear()}</span> juan almonte. All
                rights reserved
            </h3>
            <Div1>
                {socialLinks.map(({ icon, id }) => {
                    return <li key={id}>{icon}</li>;
                })}
            </Div1>
        </Main>
    );
};

export default Footer;
