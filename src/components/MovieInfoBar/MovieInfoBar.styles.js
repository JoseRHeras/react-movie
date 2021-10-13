import styled from "styled-components";

export const Wrapper = styled.div `
    width: 100%;
    background: var(--darkGrey);
    min-width: 100%;

    display: flex;
    align-items: center;
    padding: 0px 20px;
`;

export const Content = styled.div `
    display: flex;
    max-width: var(--maxWidth);
    width: 100%;
    margin: 0 auto;

    .column {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--medGrey);
        border-radius: 10px;
        margin: 15px 20px;
        flex: 1;

        :first-child {
            margin-left: 0;
        }

        :last-child {
            margin-right: 0;
        }
    }

    @media screen and (max-width: 768px) {
        display: block;

        .column {
            margin: 20px 0;
        }
    }
`;