import styled from 'styled-components';
import { UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";
import { StyledH3, StyledMain, StyledMainText } from "../stylesandhtmlcomponents/SharedStyles.tsx";

// Styled component for the profile image container
const StyledImage = styled.div`
    width: 40%;
    margin: auto;
    border: 4px solid white;

    img {
        max-width: 100%; // Ensures the image is responsive
    }
`;

// Styled component for the main text content
const StyledText = styled.div`
    align-self: center;
    text-align: center;
    width: 60%;
    margin: 1vh 1vw;
    font-size: calc(10px + 1vw); // Responsive font size
    color: white;
`;

// Styled component for the paragraph at the bottom
const StyledParagraph = styled.p`
    align-self: center;
    text-align: center;
    margin: 1vh 1vw;
    font-size: calc(10px + 1vw); // Responsive font size
    color: white;
`;

export default function Home() {
    // Set meta description for SEO
    UseMetaContent("Welcome to Vincent Lin's online resume! Explore Vincent's profile and learn more about his skills and experiences.");

    return (
        <StyledMain>
            <StyledH3>Home</StyledH3>
            <StyledMainText>
                {/* Profile image section */}
                <StyledImage>
                    <img src='/profile.JPG' alt="Vincent Lin's profile picture" />
                </StyledImage>
                {/* Main introduction text */}
                <StyledText>
                    My name is Vincent Lin, and I am a full-time student at Boston University.
                    I am currently working on my Bachelor's Degree in Computer Science and I would like
                    to further my knowledge in Computer Science with hands-on experience through internships.
                    I am interested in software development, machine learning, and data science.
                </StyledText>
            </StyledMainText>
            {/* Additional information about the resume */}
            <StyledParagraph>
                Welcome to my website, here you will find my online resume. My resume includes information about my
                <strong><em><u>Educational</u></em></strong> and <strong><em><u>Employment</u></em></strong> history.
                Furthermore, you can also find information about my <strong><em><u>Certifications</u></em></strong> as well as
                other information that might be of use to you.
            </StyledParagraph>
        </StyledMain>
    );
}
