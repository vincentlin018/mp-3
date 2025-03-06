import { styled } from 'styled-components';
import { StyledMain, StyledH3 } from "../stylesandhtmlcomponents/SharedStyles.tsx";
import { UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";

// Grid container for organizing skills
const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    
    width: 100%;
`;

// Styling for the title of each skill category
const StyledListTitle = styled.h3`
    color: #FFF5EE;
    text-align: center;
    margin-bottom: 2vh;
    
`;

// Styling for each grid item (skill category)
const StyledGridItem = styled.div`
    background-color: #445577;
    padding: 1rem;
    border-radius: 20px;
    margin: 5%;
`;

// Styling for the list of skills
const StyledList = styled.ul`
  list-style-type: none; /* Remove default bullet points */
  padding-left: 0;

  li {
    font-size: calc(3px + 1vw);
    color: white;
    text-align: center;
    margin-bottom: 0.5rem;
  }
`;

export default function Skills() {
    // Set meta description for SEO
    UseMetaContent("A website that display's Vincent's skills");

    return (
        <StyledMain>
            <StyledH3>Skills</StyledH3>

            <StyledGrid>
                {/* Languages Grid Item */}
                <StyledGridItem>
                    <StyledListTitle>Languages:</StyledListTitle>
                    <StyledList>
                        <li>Java</li>
                        <li>Python</li>
                        <li>C/C++</li>
                        <li>SQL (Postgres)</li>
                        <li>XML</li>
                        <li>MongoDB</li>
                        <li>JavaScript/TypeScript</li>
                        <li>HTML/CSS</li>
                    </StyledList>
                </StyledGridItem>

                {/* Frameworks Grid Item */}
                <StyledGridItem>
                    <StyledListTitle>Frameworks:</StyledListTitle>
                    <StyledList>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Flask</li>
                    </StyledList>
                </StyledGridItem>

                {/* Developer Tools Grid Item */}
                <StyledGridItem>
                    <StyledListTitle>Developer Tools:</StyledListTitle>
                    <StyledList>
                        <li>Git</li>
                        <li>Docker</li>
                        <li>VS Code</li>
                        <li>Visual Studio</li>
                        <li>Webstorm</li>
                    </StyledList>
                </StyledGridItem>

                {/* Libraries Grid Item */}
                <StyledGridItem>
                    <StyledListTitle>Libraries:</StyledListTitle>
                    <StyledList>
                        <li>pandas</li>
                        <li>Matplotlib</li>
                        <li>NumPy</li>
                        <li>SciKit-learn</li>
                    </StyledList>
                </StyledGridItem>
            </StyledGrid>
        </StyledMain>
    );
}