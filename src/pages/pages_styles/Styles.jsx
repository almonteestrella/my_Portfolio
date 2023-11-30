import styled from 'styled-components';

export const Section1 = styled.section`
    padding: 2rem 3rem;
    background: ${(props) => props.theme.jobItSection1};

    & .DarkModeDiv {
        display: flex;
        justify-content: flex-end;
        width: 90vw;
    }

    @media (min-width: 992px) {
        padding: 3rem 5rem;

        display: grid;
        place-content: center;
        & .fixed-width {
            max-width: 1280px;
            margin: 0 auto;
        }
    }

    & header {
        text-align: center;

        & h4 {
            text-transform: uppercase;
            color: ${(props) => props.theme.headingName};
            letter-spacing: 2.5px;
            margin-bottom: 20px;
        }

        & h1 {
            font-weight: 700;
            font-size: 55px;
            line-height: 1;
            margin-bottom: 35px;
            text-transform: capitalize;
            color: ${(props) => props.theme.text};
        }
    }

    & .hero-img {
        width: 100%;
        height: auto;
        object-fit: contain;
        margin-bottom: 3rem;
    }

    & article {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        & a {
            color: ${(props) => props.theme.headingName};
        }

        & span {
            font-size: 2rem;
            align-self: center;
            & svg {
                margin-bottom: -5px;
            }
        }

        & .icon-left {
            margin-right: 5px;
        }

        & .icon-right {
            margin-left: 5px;
        }
        @media (min-width: 992px) {
            width: 70%;
            margin: 3rem auto;
        }
    }
`;

export const Section2 = styled.section`
    padding: 2rem 3rem;
    background: ${(props) => props.theme.jobItSection2};

    @media (min-width: 992px) {
        padding: 3rem 5rem;

        & .fixed-width {
            max-width: 1280px;
            margin: 0 auto;
        }
    }

    & div {
        margin-bottom: 3rem;

        & h5 {
            color: #778295;
            text-transform: capitalize;
            margin-bottom: 0.4rem;
        }

        & h2 {
            text-transform: capitalize;
        }
    }

    & .flexDiv {
        display: flex;
        gap: 2rem;
        flex-wrap: wrap;
        justify-content: center;
        margin: 3rem 0;
        & div {
            margin-bottom: 0;
        }

        @media (min-width: 640px) {
            justify-content: center;
            gap: 4rem;
        }
    }
`;

export const RoleArticle = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 4rem auto;

    @media (min-width: 992px) {
        flex-direction: row;
    }

    & h2 {
        color: ${(props) => props.theme.text};
    }
`;

export const TechnoArticle = styled.article`
    margin: 4rem auto;
    @media (min-width: 992px) {
        flex-direction: row;
    }
`;

export const Section3 = styled.section`
    padding: 2rem;
    background: ${(props) => props.theme.jobItSection1};

    & .heading {
        margin: 1rem 0;
    }

    p {
        margin-bottom: 2rem;
        letter-spacing: 1px;
        color: ${(props) => props.theme.jobItParagraph};
    }

    & .m-1 {
        margin-top: 2rem;
    }

    @media (min-width: 992px) {
        & .content {
            max-width: 1280px;
            margin: 0 auto;
        }
        & .heading {
            margin: 3rem 0;
        }
    }

    & .taxis {
        width: 100%;
        height: auto;
        object-fit: cover;
        filter: grayscale(1);
        border-radius: 10px;
    }

    & .icon {
        width: 100%;
        height: auto;
        object-fit: cover;
    }

    & .flex-div {
        display: flex;
        justify-content: center;
        gap: 4rem;
        flex-wrap: wrap;
        margin-bottom: 4rem;

        @media (min-width: 992px) {
            justify-content: space-between;
        }
    }
`;

export const H3 = styled.h3`
    color: ${(props) => props.theme.headingName};
    margin-bottom: 1rem;
    text-transform: capitalize;
`;

export const H2 = styled.h2`
    text-transform: capitalize;
    margin-bottom: 2rem;
    color: ${(props) => props.theme.text};
`;

export const ImgDiv = styled.div`
    width: 100%;
    & .figma-design {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

export const ProgressIconDiv = styled.article`
    & div {
        width: 12rem;
        height: 12rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        transition: all 0.3s linear;
        background: ${(props) => props.theme.serviceCardBg};
        margin-bottom: 2rem;
    }

    & p {
        text-align: center;
        text-transform: capitalize;
        margin-bottom: 0;
        color: ${(props) => props.theme.text};
    }

    & .progress-icon {
        width: 50%;
        height: auto;
        object-fit: cover;
    }
`;

export const Section4 = styled.section`
    padding: 2rem;
    background: ${(props) => props.theme.jobItSection2};

    & .heading {
        margin: 4rem 0;
    }

    & .first-article {
        margin-bottom: 3rem;
    }

    & article {
        background: ${(props) => props.theme.JobItBackgroundArticle};
        border-radius: 8px;
        padding: 2rem;
        & .icon {
            width: 20%;
            height: auto;
            object-fit: cover;
            align-self: flex-start;
        }

        & p {
            color: ${(props) => props.theme.jobItParagraph};
        }

        & h2 {
            margin-bottom: 3rem;
            text-transform: uppercase;
            color: #e15a46;
        }

        & .learning {
            color: #02bc7d;
        }
    }

    @media (min-width: 992px) {
        & .content {
            max-width: 70%;
            margin: 0 auto;
        }
        & article {
            padding: 2rem 4rem;
            & .icon {
                width: 5%;
            }
        }
    }
`;
