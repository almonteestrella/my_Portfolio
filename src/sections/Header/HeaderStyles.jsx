import styled from 'styled-components';

export const Main = styled.main`
    background: ${(props) => props.theme.headerBg};
    min-height: 100vh;
`;

export const Container = styled.div`
    padding: 0rem 2.5rem;

    @media (min-width: 992px) {
        padding: 3rem 8rem;
    }
`;

export const Navbar = styled.nav`
    padding-top: 3rem;
    & div:first-child {
        padding-left: 3.5rem;
        padding-right: 3.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (min-width: 992px) {
            padding: 0 8rem;
        }
    }

    &.navbar {
        position: sticky;
    }

    &.navbar.sticky {
        width: 100vw;
        position: fixed;
        top: 0;
        right: 0;
        transition: 0.3s linear all;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        padding: 2rem 0;
        z-index: 1;
        background: ${(props) => props.theme.stickyBg};
    }
`;

/// DropDown Contact
export const ContactDropDown = styled.div`
    background: none;
    font-size: 1.7rem;
    transition: 0.3s linear all;

    & .close-btn {
        background: none;
        border: none;
        transition: 0.3s linear all;
        font-size: 3rem;
        color: ${(props) => props.theme.text};
        cursor: pointer;
        margin-right: 15px;
        & svg {
            margin-bottom: -4px;
        }
    }

    @media (min-width: 992px) {
        display: none;
    }
`;

export const NavLinks = styled.div`
    display: none;

    & .navbar-line {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
    @media (min-width: 992px) {
        display: flex;
        gap: 2rem;
        align-items: center;
        justify-content: center;
        margin-bottom: 0;
        padding-left: 0;
        & li a {
            color: ${(props) => props.theme.headerParagraph};
            text-transform: capitalize;
            letter-spacing: 0.6px;
            cursor: pointer;
            font-weight: 500;
            &:hover {
                opacity: 0.9;
            }
        }
    }
`;

export const Section = styled.section`
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (min-width: 992px) {
        flex-direction: row;
        & div {
            flex: 1 1;
        }
    }
`;

export const HeroImgDiv = styled.div`
    width: 100%;
    height: auto;

    @media (min-width: 992px) {
        margin-top: -80px;
    }

    & .hero-img {
        object-fit: contain;
        width: 100%;
        height: auto;
    }
`;
export const H4 = styled.h4`
    text-transform: uppercase;
    color: ${(props) => props.theme.headingName};
    letter-spacing: 2.5px;
    margin-bottom: 20px;
`;
export const H1 = styled.h1`
    font-weight: 700;
    font-size: 55px;
    line-height: 1.1;
    margin-bottom: 14px;
    text-transform: capitalize;
    color: ${(props) => props.theme.text};

    @media (min-width: 640px) {
        font-size: 60px;
    }
`;

export const P = styled.p`
    letter-spacing: 1.5px;
    color: ${(props) => props.theme.headerParagraph};
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 14px;

    @media (min-width: 992px) {
        max-width: 500px;
    }
`;

export const BtnContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;

    @media (min-width: 992px) {
        flex-direction: row;
    }
`;

export const Button = styled.button`
    background: #0252cd;
    border: none;
    padding: 2rem 3rem;
    border-radius: 30px;
    color: #fff;
    letter-spacing: 1.1px;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.3s linear all;
    width: 100%;

    &:hover {
        background: #3575d7;
    }

    @media (min-width: 992px) {
        width: auto;
    }
`;
