import styled from "styled-components";

export const StyledH3 = styled.h3`
    margin: 2vw;
    text-align: center;
    font-size: calc(6px + 2vw);
    color: white;
`;

export const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    width: 70%;
    background-color: #334464;
    padding: 3vw;
    color: white;

    @media (max-width: 900px) {
        width: 100%;
        padding: 1vw;
    }    
`;

export const StyledMainText = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;

    @media (max-width: 900px) {
        font-size: calc(2px + 1vw);
    }
`;