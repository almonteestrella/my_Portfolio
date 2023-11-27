import styled from 'styled-components';

export const ImgDiv = styled.div`
    width: 100%;
    height: auto;
    object-fit: contain;
    & .hero-img {
        object-fit: contain;
        width: 100%;
        height: auto;
    }
`;

export const Main = styled.main`
    background: ${(props) => props.theme.experienceBg};

    padding: 4rem 2.5rem;
`;

export const HeaderDiv = styled.div`
    background: ${(props) => props.theme.headerDivBg};
    padding: 4rem;
    border-radius: 15px;
    align-self: flex-start;
`;

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    & div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    @media (min-width: 992px) {
        flex-direction: row;
        & div {
            flex: 1 1;
        }
    }
`;

export const H2 = styled.section`
    color: ${(props) => props.theme.experienceH2};
    font-weight: 700;
    font-size: 40px;
    margin-bottom: 25px;
    text-transform: capitalize;

    & br {
        @media (min-width: 992px) {
            display: none;
        }
    }
`;
export const P = styled.p`
    color: #ffffff;
    margin-bottom: 25px;
    letter-spacing: 1px;
    line-height: 20px;
    max-width: 80%;
`;

export const Span = styled.span`
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;
    display: inline-block;
    text-align: center;
    text-transform: capitalize;
`;
