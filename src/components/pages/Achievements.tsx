import { styled } from 'styled-components';
import { StyledMain, StyledH3 } from "../stylesandhtmlcomponents/SharedStyles.tsx";
import { UseDocumentTitle, UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";

const StyledDean = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 2vh;
    color: white;
    font-size: calc(2px + 1vw);
`;

const StyledDeanTitle = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: calc(10px + 1vw);
    margin: 3vh;
    color: white;
`;

export default function Achievements() {
    UseDocumentTitle('Achievements | Resume');
    UseMetaContent("A website that display's Vincent's achievements");

    return (
        <>
            <StyledMain>
                <StyledH3>Achievements</StyledH3>

                <StyledDeanTitle>Dean's List</StyledDeanTitle>
                <StyledDean>
                    <p>Boston University Dean's List</p>
                    <p><em>Fall Semester 2024</em></p>
                </StyledDean>
                <StyledDean>
                    <p>Boston University Dean's List</p>
                    <p><em>Fall Semester 2023</em></p>
                </StyledDean>

                <StyledDean>
                    <p>Boston University Dean's List</p>
                    <p><em>Fall Semester 2022</em></p>
                </StyledDean>

            </StyledMain>
        </>
    );
}