import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    cursor: pointer;
    transition: all 0.3s linear;
    background: ${(props) => props.theme.serviceCardBg};
    width: 12rem;
    height: 12rem;
    border-radius: 50%;

    .logo-img {
        width: 50%;
        height: auto;
        object-fit: cover;
        filter: grayscale(100%);
    }

    &:hover {
        transform: scale(1.2);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        & .logo-img {
            filter: grayscale(0%);
        }
    }
`;

export const ServiceCardContainer = styled.div`
    width: 75vw;
    margin: 0 auto;
    background: ${(props) => props.theme.serviceCardBg};
    padding: 2rem 2.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 2rem;
    transition: all 0.3s linear;

    & h3 {
        font-size: 24px;
        text-transform: capitalize;
        font-family: Poppins;
        color: ${(props) => props.theme.serviceText};
    }

    & p {
        margin-bottom: 2rem;
        color: ${(props) => props.theme.serviceInfo};

        letter-spacing: 1px;
        line-height: 1.5;
    }

    &:hover {
        background: #0252cd;
        color: #ffff;
        p,
        h3 {
            color: #ffff;
        }

        .serviceCardLogo {
            background: #ffff;
        }

        @media (min-width: 992px) {
            transform: translateY(30px);
        }
    }

    .serviceCardLogo {
        width: 50px;
        height: 50px;
        display: grid;
        place-items: center;
        padding: 2%;
        background: #0252cd;
        border-radius: 10px;
        transition: all 0.3s linear;
        box-shadow: 10px 10px 26px 0px rgba(2, 82, 205, 0.28);
    }

    .service-icon {
        width: 50%;
        height: auto;
        object-fit: cover;
    }
`;

export const ExperienceCardButton = styled.button`
    width: 100%;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 1rem;
    cursor: pointer;
    padding: 4rem;
    border-radius: 15px;
    background: ${(props) => props.theme.experienceButtonBg};
    border: none;

    &.active_btn {
        background: ${(props) => props.theme.experienceButtonHover};
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    }

    & h3 {
        text-transform: capitalize;
        font-family: 500;
        letter-spacing: 0.1px;
        text-align: left;
        color: ${(props) => props.theme.experienceH2};
    }
    & p {
        color: ${(props) => props.theme.jobArticleP};
        text-align: left;
    }

    & .experiencedCardImg {
        width: 100%;
        height: auto;
        object-fit: contain;
    }
`;

export const ImgDiv = styled.div`
    width: 80%;
    height: auto;
    object-fit: contain;
    text-align: left;
`;

export const ProjectCardDiv = styled.div`
    background: ${(props) => props.color};
    border-radius: 15px;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (min-width: 992px) {
        flex-direction: row;
        padding: 6rem 0;
        justify-content: center;

        & article:first-child {
            display: grid;
            place-items: center;
        }

        & article {
            width: 100%;
            height: auto;
        }

        &:nth-child(even) {
            flex-direction: row-reverse;
        }
        &:nth-child(odd) {
            flex-direction: row;
        }
    }

    & h2 {
        color: #ffffff;
        margin-bottom: 3rem;
        max-width: 250px;
        text-transform: capitalize;

        @media (min-width: 992px) {
            font-size: 3rem;
            max-width: 400px;
        }
    }

    & .techs-container {
        margin-bottom: 3rem;
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: 1rem;

        & .tech-li {
            padding: 1rem 1.5rem;

            border: none;

            color: #ffffff;
            text-transform: capitalize;
        }

        @media (min-width: 992px) {
            max-width: 400px;
        }
    }

    & .link {
        margin-bottom: 3rem;

        & a {
            color: #ffffff;
            font-size: 20px;
            text-transform: capitalize;
            transition: all 0.3s linear;
            &:hover {
                color: #cccccc;
            }
        }
        & span svg {
            font-size: 30px;
            margin-bottom: -5px;
        }
    }

    & .img-container {
        width: 100%;
        height: auto;

        @media (min-width: 992px) {
            overflow-x: clip;
            overflow-y: visible;
        }
    }

    & .project-img {
        width: 100%;
        height: auto;
        object-fit: cover;

        @media (min-width: 992px) {
            position: relative;
            left: -10%;
        }
    }

    @media (min-width: 992px) {
        & .img-left {
            left: -10%;
        }
        & .img-right {
            left: 10%;
        }
    }
`;

export const Div1 = styled.div`
    background: ${(props) => props.bg_color};
    border-radius: 5px;
`;

export const CopyDiv = styled.span`
    background: #fff;
    padding: 2rem 3rem;
    border-radius: 30px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    & button {
        background: none;
        cursor: pointer;
        border: none;
    }
    & button svg {
        background: none;
        border: none;
        color: #ffbe62;
    }

    & span {
        margin-right: 10px;
        color: #6f74a7;
        letter-spacing: 1px;
    }

    @media (min-width: 992px) {
        width: auto;
    }
`;

export const ButtomDiv = styled.div`
    .scroll.hide {
        display: none;
    }

    .scroll {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: ${(props) => props.theme.jobItSection1};

        color: ${(props) => props.theme.text};
        font-size: 2rem;
        border: none;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        z-index: 1;
        box-shadow: 0 5px 16px rgba(0, 0, 0, 0.1);
    }

    .scroll.show {
        display: block;
    }
`;

export const JobArticleDiv = styled.article`
    color: linear-gradient(0deg, #6f74a7, #6f74a7);
    & p {
        color: ${(props) => props.theme.jobArticleP};
        margin-bottom: 1rem;
    }
    & h3 {
        margin-bottom: 1rem;
        text-transform: capitalize;
        letter-spacing: 1px;
        color: ${(props) => props.theme.experienceH2};
    }
`;
export const DutiesDiv = styled.article`
    & .description {
        display: grid;
        grid-template-columns: auto 1fr;
        column-gap: 2rem;
    }
    & svg {
        color: #ffbe62;
        font-size: 2rem;
    }

    & p {
        margin-bottom: 2rem;
        letter-spacing: 1px;
    }
`;

export const ModalHeader = styled.div`
    background: ${(props) => props.theme.modalBg};
    padding: 1rem 3rem 1rem 10rem;

    & .modal-close {
        font-size: 3rem;
        align-self: center;
        & svg {
            color: ${(props) => props.theme.closeModal};
        }
    }
    & h2 {
        background-image: linear-gradient(0deg, #3563e9, #ffbe62 0);
        background-repeat: no-repeat;
        background-size: 100% 25%;
        background-position: left 70% top 90%;
        color: ${(props) => props.theme.text};
        display: inline-block;
        text-align: center;
        font-size: 34px;
        text-transform: capitalize;
        margin-bottom: 3rem;
    }

    & hr {
        margin-bottom: 2rem;
    }

    & div {
        display: flex;
        justify-content: space-between;
        & button {
            align-self: flex-start;
            background: none;
            border: none;
            cursor: pointer;
            font-size: 2rem;

            @media (min-width: 992px) {
                align-self: flex-start;
            }
        }
    }

    & p {
        /* text-align: center; */
        color: ${(props) => props.theme.headerP};
        letter-spacing: 1px;
        text-transform: capitalize;
        margin-bottom: 0.5rem;
    }
`;

export const FlexDiv1 = styled.section`
    display: flex;

    flex-direction: column;
    gap: 2rem;

    @media (min-width: 992px) {
        flex-direction: row-reverse;
        justify-content: space-between;
        padding: 0 8rem;

        & article {
            flex: 50% 1;
        }
    }
`;

export const Article1 = styled.article`
    label {
        display: block;
        margin-bottom: 8px;
        color: ${(props) => props.theme.serviceText};
        letter-spacing: 1px;
        text-transform: capitalize;
    }

    & .div {
        margin-bottom: 1.7rem;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.7rem;
        border-radius: 5px;
        border: 1px solid #cce1ff;
        background: #f3f8ff;
    }

    form {
        padding: 1rem;
        position: relative;
    }

    textarea {
        height: 10rem;
    }

    input[type='text']::placeholder,
    input[type='email']::placeholder,
    textarea::placeholder {
        text-transform: capitalize;
        letter-spacing: 1px;
    }

    textarea:focus {
        outline: 1.5px solid #9d9d9d;
        border: none;
    }

    input[type='text']:focus,
    input[type='email']:focus {
        outline: 1px solid #9d9d9d;
        border: none;
    }

    input[type='submit'] {
        background: #0252cd;

        border: none;
        border-radius: 20px;
        color: #fff;
        letter-spacing: 1.1px;
        padding: 1.5rem;
        text-transform: capitalize;
        cursor: pointer;
        transition: 0.3s linear all;

        &:hover {
            background: #3575d7;
        }

        @media (min-width: 992px) {
            width: auto;
            position: absolute;
            right: 9px;
            padding: 1rem 3rem;
        }
    }
`;

export const Article2 = styled.article`
    padding: 3rem 2rem;
    & div {
        display: flex;
        margin-bottom: 3rem;

        & ul {
            padding-left: 0;
            & li {
                margin-right: 2rem;
                color: ${(props) => props.theme.headerP};
            }
        }
    }
    & h3 {
        text-transform: capitalize;
        letter-spacing: 1px;
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.headerP};
    }

    & h4 {
        color: ${(props) => props.theme.headerP};
        letter-spacing: 1px;
    }

    & .div1 {
        & span {
            padding: 3px 5px 0 0;
            color: ${(props) => props.theme.headerP};
        }
    }
`;

export const Li = styled.li`
    align-self: flex-start;
    display: flex;
    align-items: center;
    margin-top: 2px;

    & .link,
    svg {
        color: ${(props) => props.theme.downLoadText};
        margin-bottom: -3px;
    }

    & span {
        font-size: 2rem;
        margin-right: 1px;
    }
`;

export const ChallengeDiv = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 4rem;
`;
