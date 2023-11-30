import styled from 'styled-components';

export const Main = styled.main`
    padding: 2rem 2.5rem;
    background: ${(props) => props.theme.contactBg};

    @media (min-width: 992px) {
        padding: 3rem 4rem;
    }
`;

export const ContentDiv = styled.div`
    background: #ffbe62;
    border-radius: 10px;
    padding: 7rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: space-between;
    max-width: 1280px;
    margin: 0 auto;
    background-image: url("/pattern.svg");
    background-size: fill;

    & h1 {
        text-align: center;
        color: #151e2c;
    }

    @media (min-width: 992px) {
        padding: 7rem 3rem;
        flex-direction: row;
        & h1 {
            max-width: 50%;
            text-align: left;
        }

        & div:last-child {
            align-self: flex-end;
        }
    }
`;

export const Button = styled.button`
    background: #0252cd;
    padding: 1.5rem 2rem;
    border: none;
    border-radius: 20px;
    color: #fff;
    letter-spacing: 1.1px;
    width: 100%;
    text-transform: capitalize;
    cursor: pointer;
    transition: 0.3s linear all;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #3575d7;
    }

    & p {
        margin-right: 3px;
    }

    & span {
        font-size: 2rem;
        & svg {
            padding: 4px 0px 0px 0px;
        }
    }
`;

export const H1 = styled.h1`
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;

    display: inline-block;
    text-align: center;
    font-size: 32px;
    text-transform: capitalize;
`;
