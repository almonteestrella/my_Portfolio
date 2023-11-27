import styled from 'styled-components';

export const Section = styled.section`
    padding: 4rem 0rem;

    @media (min-width: 992px) {
        padding: 5rem 6rem;
    }
`;

export const H1 = styled.h1`
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;
    display: inline-block;
    text-align: center;
    text-transform: capitalize;
    color: ${(props) => props.theme.serviceText};
`;

export const Div1 = styled.div`
    text-align: center;
    margin-bottom: 40px;
`;

export const SkillsDiv = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 6rem;
    padding: 0 2rem;

    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 4rem;
        place-items: center;
    }
`;

export const Main = styled.main`
    background: ${(props) => props.theme.skillBg};
`;
