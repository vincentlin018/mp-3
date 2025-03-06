import { styled } from 'styled-components';
import { StyledMain, StyledH3 } from "../stylesandhtmlcomponents/SharedStyles.tsx";
import { UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";

// Styled component for the first row of experience details (company and location)
const StyledRow1 = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-left: #ddd8ce 4px solid;
    padding-left: 1vw;
    margin-top: 5vh;
`;

// Styled component for the second row of experience details (position and date)
const StyledRow2 = styled.p`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-left: #ddd8ce 4px solid;
    padding-left: 1vw;
    margin-bottom: 1vh;
`;

// Styled component for the first experience description list
const StyledExperience1 = styled.ul`
    margin-bottom: 0.5vh;
    padding: 2vw;
`;

// Styled component for the second experience description list
const StyledExperience2 = styled.ul`
    margin-bottom: 0.5vh;
    padding: 2vw;
`;

// Styled component for company logos
const StyledImage = styled.div`
    width: 20%;
    margin: 0 auto;

    img {
        height: auto;
        display: block;
        max-width: 100%;
        object-fit: contain;
    }
`;

export default function Experience() {
    // Set meta description for SEO
    UseMetaContent("A website that display's Vincent's work experience");

    return (
        <>
            <StyledMain>
                <StyledH3>Experience</StyledH3>

                {/* Quincy College Experience */}
                <StyledRow1>
                    <p>Quincy College</p>
                    <p><em>Quincy, MA</em></p>
                </StyledRow1>
                <StyledRow2>
                    <p>Information Technology Intern</p>
                    <p><em>July 2023 - August 2023</em></p>
                </StyledRow2>
                <StyledExperience1>
                    {/* List of responsibilities and achievements at Quincy College */}
                    <li>Acquired and applied SQL skills to implement with Jenzabar; demonstrating rapid learning and
                        adaptability in database management</li>
                    <li>Conducted comprehensive hardware inventory, recording serial numbers, MAC and IP addresses for
                        improved asset management across 2 campuses</li>
                    <li>Configured software applications (CrowdStrike, VS Code, Microsoft 365 suite) and systems
                        administrative roles during setup of new computers</li>
                    <li>Detected and resolved potential network and system vulnerabilities on lab computers that were
                        incorrectly identified as being connected to the admin network without proper authorization</li>
                    <li>Optimized hardware performance through proactive software updates and hardware upgrades;
                        minimizing downtime, enhancing system reliability and maintaining system availability</li>
                    <li>Provided technical support, resolving computer and networking issues for administration and summer
                        classes</li>
                </StyledExperience1>
                <StyledImage>
                    <img src="/qc.png" alt="A picture of Quincy College's logo" />
                </StyledImage>

                {/* Quincy Public Schools Experience */}
                <StyledRow1>
                    <p>Quincy Public Schools</p>
                    <p><em>Quincy, MA</em></p>
                </StyledRow1>
                <StyledRow2>
                    <p>Information Technology Intern</p>
                    <p><em>July 2022 - August 2022</em></p>
                </StyledRow2>
                <StyledExperience2>
                    {/* List of responsibilities and achievements at Quincy Public Schools */}
                    <li>Coordinated with 7 colleagues to manage Chromebook inventory and maintenance across 18 schools
                        district-wide, ensuring optimal functionality for administrative, student, and teacher use</li>
                    <li>Delivered prompt and efficient technical support for a diverse range of IT issues, including computer
                        troubleshooting, printer maintenance, and network connectivity</li>
                </StyledExperience2>
                <StyledImage>
                    <img src="/qps.jpg" alt="A picture of Quincy Public Schools' logo"/>
                </StyledImage>
            </StyledMain>
        </>
    );
}
