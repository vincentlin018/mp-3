import { styled } from 'styled-components';
import { StyledMain, StyledH3 } from "../stylesandhtmlcomponents/SharedStyles.tsx";
import { UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";

// Styled component for college education details
const StyledCollege = styled.div`
    display: flex;
    flex-direction: column;
    border-left: #ddd8ce 4px solid;
    margin: 2vh 4vw;
    padding-left: 2vh;
    font-size: calc(5px + 1vw); // Responsive font size
    color: white;
`;

// Styled component for high school education details
const StyledHighSchool = styled.div`
    display: flex;
    flex-direction: column;
    border-left: #ddd8ce 4px solid;
    margin: 2vh 4vw;
    padding-left: 2vh;
    font-size: calc(5px + 1vw); // Responsive font size
    color: white;
`;

// Styled component for education institution images
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
        border: 2px solid white;
    }
`;

export default function Education() {
    // Set meta description for SEO
    UseMetaContent("A website that display's Vincent's educational background");

    return (
        <>
            <StyledMain>
                <StyledH3>Education</StyledH3>

                {/* College education section */}
                <StyledCollege>
                    <p>Currently pursuing a B.A. in Computer Science | <em>Boston University, MA</em></p>
                    <p><em>September 2022 - May 2026</em></p>
                </StyledCollege>

                {/* Boston University image */}
                <StyledImage>
                    <img src="/bu.jpg" alt="A picture of Boston University"/>
                </StyledImage>

                {/* High school education section */}
                <StyledHighSchool>
                    <p>High School Diploma | <em>North Quincy High School, MA</em></p>
                    <p><em>September 2018 - June 2022</em></p>
                </StyledHighSchool>

                {/* North Quincy High School image */}
                <StyledImage>
                    <img src="/nqhs.jpg" alt="A picture of North Quincy High School"/>
                </StyledImage>

            </StyledMain>
        </>
    );
}
