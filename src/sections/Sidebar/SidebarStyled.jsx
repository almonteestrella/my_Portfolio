import styled from 'styled-components';

export const Main = styled.main`
    padding: 0px 2rem;

    .sidebar {
        padding: 2rem;
        position: fixed;
        width: 100%;
        height: 50%;
        top: 85px;
        right: 0;
        background: ${(props) => props.theme.sidebarBg};

        transition: 0.3s linear all;
        transform: translate(100%);
        z-index: 1;
    }

    .show-sidebar {
        transform: translate(0);
        z-index: 1;
    }

    @media (min-width: 992px) {
        .sidebar {
            display: none;
        }
    }
`;

export const SidebarHeader = styled.div`
    margin-bottom: 6rem;
`;

export const NavLinksDiv = styled.ul`
    display: flex;
    flex-direction: column;
    background: ${(props) => props.theme.skillBg};
    padding: 1rem;
    border-radius: 10px;

    & li a {
        color: ${(props) => props.theme.text};
        display: block;
        font-size: 1.8rem;
        text-transform: capitalize;
        padding: 1rem 1.5rem;
        transition: 0.2s linear all;
        letter-spacing: 1px;
        border-radius: 20px;
        margin-bottom: 1rem;

        &:hover {
            background: #0252cd;

            color: white;
        }
    }
`;

export const Button = styled.button`
    border: none;
    background: none;
    margin: 1.5rem 0;
    & a {
        border-radius: 20px;
        color: ${(props) => props.theme.downLoadText1};
        padding: 1.1rem 1.5rem;
        display: block;
        transition: 0.2s linear all;
        letter-spacing: 1px;
        background: ${(props) => props.theme.downLoadBg};
        &:hover {
            color: ${(props) => props.theme.downLoadHover};
        }
    }
`;
