import styled from 'styled-components';

export const Main = styled.main`
    padding: 3rem 4rem;
    background: ${(props) => props.theme.contactBg};
    display: flex;
    flex-direction: column;
    text-align: center;
    & h3 {
        margin-bottom: 2.5rem;
        text-transform: capitalize;
        color: ${(props) => props.theme.textColor};
    }

    @media (min-width: 992px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 3rem 2.5rem;
    }
`;

export const Div1 = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 992px) {
        justify-content: flex-end;
    }
    & li {
        margin-right: 24px;
        font-size: 2rem;
        color: ${(props) => props.theme.textColor};
    }
`;
