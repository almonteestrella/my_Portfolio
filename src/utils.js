import { HiArrowNarrowRight } from 'react-icons/hi';
import { FiGithub, FiInstagram, FiLinkedin, FiTwitter } from 'react-icons/fi';
import Image from 'next/image';

export const navLinks = [
    { id: 1, text: 'home', path: '#home' },
    {
        id: 2,
        text: 'projects',
        path: '#projects',
    },
    { id: 3, text: 'contact', path: '#contact' },

    { id: 4, text: 'testimonials', path: '#testimonials' },
];

export const socialLinks = [
    {
        id: 1,
        name: 'Github',
        icon: <FiGithub />,
        link: '#',
    },

    { id: 2, name: 'LinkedIn', icon: <FiLinkedin />, link: '#' },
    { id: 3, name: 'Instagram', icon: <FiInstagram />, link: '#' },
    { id: 4, name: 'Twitter', icon: <FiTwitter />, link: '#' },
];

export const projects = [
    {
        url: 'https://jobit-dd.vercel.app/',
        details: 'front end application',
        image: '/jobit.png',
        imageInfo: 'job search',
        title: 'jobit application',
        icon: <HiArrowNarrowRight />,
    },
    {
        url: 'https://morerent.vercel.app/',
        details: 'MERN application',
        image: '/morent.png',
        imageInfo: 'car rent search',
        title: 'morent car rental',
        icon: <HiArrowNarrowRight />,
    },
];

export const Members = [
    {
        id: 1,
        image: '/cong.svg',
        name: 'cong',
        title: 'full stack developer',
        quote: 'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 2,
        image: '/derek.svg',
        name: 'derek',
        title: 'front end developer',
        quote: 'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
    {
        id: 3,
        image: '/yovanny.svg',
        name: 'yovanny',
        title: 'full stack developer',
        quote: 'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
    },
];

export const experienceInfo = [
    {
        id: 1,
        title: 'title1',
        description: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
        ],
        time_frame: '2018-present',
        company_logo: '/cps.svg',
        info: 'tech support technician - 5 years of experience',
    },
    {
        id: 2,
        title: 'title2',
        description: [
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
            'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident quia reiciendis velit earum nulla asperiores.',
        ],
        time_frame: '2018-present',
        company_logo: '/cps.svg',
        info: 'tech support technician - 5 years of experience',
    },
];
