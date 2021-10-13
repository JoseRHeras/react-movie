import styled from "styled-components";

// Config
import {BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";


export const Wrapper = styled.div`
    background: ${({backdrop}) => 
    backdrop 
    ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})`
    : backdrop
    };

    background-size: cover;
    background-position: center;
    padding: 40px 20px;
    animation: animateMovieInfo 1s;

    @keyframes animateMovieInfo {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    
`;

export const Content = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    display: flex; 
    @media screen and (max-width: 768px) {
        display: block;
        max-height: none;
    }
`;

export const Text = styled.div`
    color: var(--white);
    padding: 20px 40px;
    width: 100%;
    overflow: hidden;

    .rating-directors {
        display: flex;
        justify-content: flex-start;
    }

    .rating {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 35px;
        height: 35px;
        background: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
    }

    .directors {
        margin-left: 40px;

        p {
            margin: 0;
        }
    }

    h1 {
        @media screen and (max-width: 768px) {
            font-size: var(--fontBig);
        }
    }
`;