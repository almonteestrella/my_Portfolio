import styled from 'styled-components';

export const H1 = styled.h1`
    text-align: center;
    margin-bottom: 30px;
    color: ${(props) => props.theme.serviceText};

    @media (min-width: 992px) {
        & br {
            display: none;
        }
    }
`;

export const Main = styled.main`
    background: ${(props) => props.theme.testimonialBg};
    padding: 4rem 2.5rem;
`;

export const Span = styled.span`
    background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
    background-repeat: no-repeat;
    background-size: 100% 25%;
    background-position: left 70% top 90%;
`;

export const Container = styled.section`
    padding: 2rem 2.5rem;
    max-width: 1280px;
    margin: 0 auto;

    & .contentDiv {
        height: 500px;
        position: relative;
        overflow: hidden;
    }

    & .prev,
    .next {
        position: absolute;
        top: 200px;
        transform: translateY(-50%);
        background: ${(props) => props.theme.testArrow};
        width: 4rem;
        height: 4rem;
        display: grid;
        place-items: center;
        border-color: transparent;
        font-size: 2rem;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s linear all;
        & svg {
            color: ${(props) => props.theme.serviceText};
        }
    }

    .prev {
        left: 7px;
    }
    .next {
        right: 7px;
    }

    & article {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        padding: 0 2rem;
        margin-bottom: 1rem;
        display: flex;
        gap: 4rem;
        flex-direction: column;

        @media (min-width: 992px) {
            padding: 2rem 8rem;
        }

        & .person-img {
            width: 50%;
            height: auto;
            object-fit: cover;
            border-radius: 10px;
            margin-bottom: 20px;
            margin: 0 auto;
        }

        & .stars-img {
            width: 30%;
            height: auto;
            object-fit: contain;
            margin-bottom: 1.5rem;
        }

        @media (min-width: 992px) {
            gap: 4rem;
            flex-direction: row;
            & .person-img {
                width: 25%;
                margin: 0;
            }

            & .stars-img {
                width: 20%;
            }

            & .quote {
                max-width: 800px;
            }
        }

        & .quote {
            margin-bottom: 2rem;
            line-height: 1.4;
            color: ${(props) => props.theme.headerParagraph};
        }

        & .name {
            margin-bottom: 0.5rem;
            color: ${(props) => props.theme.headerParagraph};
        }

        & .title {
            color: ${(props) => props.theme.headerParagraph};
            font-size: 16px;
            text-transform: capitalize;
        }
    }

    & article.activeSlide {
        opacity: 1;
        transform: translateX(0);
    }
    & article.lastSlide {
        transform: translateX(-100%);
    }
    & article.nextSlide {
        transform: translateX(100%);
    }
`;
