import styled from 'styled-components';

import { UseDocumentTitle, UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";
import { StyledH3, StyledMain, StyledMainText } from "../stylesandhtmlcomponents/SharedStyles.tsx";

const StyledImage = styled.div`
    width: 40%;
    margin: auto;

    img {
        max-width: 100%;
    }
`;

const StyledText = styled.div`
    align-self: center;
    text-align: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(10px + 1vw);
    color: white;
`;

const StyledParagraph = styled.p`
    align-self: center;
    text-align: center;
    margin: 1vh 1vw;
    font-size: calc(10px + 1vw);
    color: white;
`;

export default function Home() {
    UseDocumentTitle('Home | Resume');
    UseMetaContent("Welcome to Vincent Lin's online resume! Explore Vincent's profile and learn more about his skills and experiences.");

    return (
        <StyledMain>
            <StyledH3>Home</StyledH3>
            <StyledMainText>
                <StyledImage>
                    <img src='/profile.JPG' alt="Vincent Lin's profile picture" />
                </StyledImage>
                <StyledText>
                    My name is Vincent Lin, and I am a full-time student at Boston University.
                    I am currently working on my Bachelor's Degree in Computer Science and I would like
                    to further my knowledge in Computer Science with hands-on experience through internships.
                    I am interested in software development, machine learning, and data science.
                </StyledText>
            </StyledMainText>
            <StyledParagraph>
                Welcome to my website, here you will find my online resume. My resume includes information about my
                <strong><em><u>Educational</u></em></strong> and <strong><em><u>Employment</u></em></strong> history.
                Furthermore, you can also find information about my <strong><em><u>Certifications</u></em></strong> as well as
                other information that might be of use to you.
            </StyledParagraph>
        </StyledMain>
    );
}