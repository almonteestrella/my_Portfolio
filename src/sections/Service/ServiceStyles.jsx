import styled from 'styled-components';

export const Main = styled.main`
    background: ${(props) => props.theme.serviceBg};
    padding: 3rem 2.5rem;
`;

export const Br = styled.br`
    @media (min-width: 992px) {
        display: none;
    }
`;

export const H1 = styled.h1`
    text-align: center;
    margin-bottom: 60px;
    text-transform: capitalize;
    font-weight: 750;
    color: ${(props) => props.theme.serviceText};
`;

export const Span = styled.span`
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;
`;

export const ServicesDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 40px;

    @media (min-width: 992px) {
        flex-direction: row;
    }
`;
