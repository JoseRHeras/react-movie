import styled from "styled-components";

export const Wrapper = styled.div`
    background: var(--medGrey);
    color: var(--white);
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;
 `;

export const Content = styled.div`
    max-width: var(--maxWidth);
    width: 100%;
    margin-left: 1.5rem;
    font-size: var(--fontSmall);
    
    span {
        margin-left: 0.5rem;
    }

    a {
        color: inherit;
        text-decoration: none;
        transition: opacity 0.15s ease-in-out;

        :hover {
            opacity: 0.5;
        }
    }

    @media (min-width:500px) {
        font-size: var(--fontMed);
    }

    @media (min-width: 1280px) {
        margin-left: 0;
    }
`;