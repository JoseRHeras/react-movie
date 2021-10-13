import styled from "styled-components";

export const Wrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    color: var(--white);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    border: 0;
    font: var(--fontBig);
    margin: 20px auto;
    transition: opacity 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;