import { styled } from 'styled-components';
import {StyledMain, StyledH3} from "../stylesandhtmlcomponents/SharedStyles.tsx";
import {UseDocumentTitle, UseMetaContent} from "../stylesandhtmlcomponents/HTMLComponents.tsx";

const StyledCollege = styled.div`
    display: flex;
    flex-direction: column;
    border-left: #ddd8ce 4px solid;
    margin: 2vh 4vw;
    padding-left: 2vh;
    font-size: calc(5px + 1vw);
    color: white;
`;

const StyledHighSchool = styled.div`
    display: flex;
    flex-direction: column;
    border-left: #ddd8ce 4px solid;
    margin: 2vh 4vw;
    padding-left: 2vh;
    font-size: calc(5px + 1vw);
    color: white;
`;

const StyledImage = styled.div`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    padding: 1rem;
    
    img {
        width: 75%;
        height: auto;
        display: block;
        margin: auto;
        max-width: 100%;
        object-fit: contain;
        border-radius: 7%;
    }
`;

export default function Education() {
    UseDocumentTitle('Education | Resume');
    UseMetaContent("A website that display's Vincent's educational background");

    return (
        <>
            <StyledMain>
                <StyledH3>Education</StyledH3>

                <StyledCollege>
                    <p>Currently pursuing a B.A. in Computer Science | <em>Boston University, MA</em></p>
                    <p><em>September 2022 - May 2026</em></p>
                </StyledCollege>

                <StyledImage>
                    <img src="/bu.jpg" alt="A picture of Boston University"/>
                </StyledImage>

                <StyledHighSchool>
                    <p>High School Diploma | <em>North Quincy High School, MA</em></p>
                    <p><em>September 2018 - June 2022</em></p>
                </StyledHighSchool>

                <StyledImage>
                    <img src="/nqhs.jpg" alt="A picture of North Quincy High School"/>
                </StyledImage>

            </StyledMain>

        </>

    );
}