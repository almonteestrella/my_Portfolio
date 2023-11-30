import styled from 'styled-components';

export const Main = styled.main`
    background: ${(props) => props.theme.projectsBg};
    padding: 4rem 2.5rem;
`;

export const H2 = styled.h1`
    text-align: center;
    margin-bottom: 60px;
    text-transform: capitalize;
    color: ${(props) => props.theme.serviceText};
`;

export const Span = styled.span`
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;
`;

export const Container = styled.section`
    margin-bottom: 3rem;
`;

export const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3rem;
    max-width: 1280px;
    margin: 0 auto;
`;
