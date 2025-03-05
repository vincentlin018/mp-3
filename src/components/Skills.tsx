import { styled } from 'styled-components';
import { StyledMain, StyledH3 } from "./SharedStyles.tsx";


const StyledGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
    
    width: 100%;
`;

const StyledListTitle = styled.h3`
    color: #FFF5EE;
    text-align: center;
    margin-bottom: 2vh;
    
`;

const StyledGridItem = styled.div`
    background-color: #445577;
    padding: 1rem;
    border-radius: 20px;
    margin: 5%;
`;

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
    return (
        <StyledMain>
            <StyledH3>Skills</StyledH3>

            <StyledGrid>

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

                <StyledGridItem>
                    <StyledListTitle>Frameworks:</StyledListTitle>
                    <StyledList>
                        <li>React</li>
                        <li>Node.js</li>
                        <li>Flask</li>
                    </StyledList>
                </StyledGridItem>

                {/* Second Row */}
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

                <StyledGridItem>
                    <StyledListTitle>Libraries:</StyledListTitle>
                    <StyledList>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>NumPy</li>
                        <li>SciKit-learn</li>
                    </StyledList>
                </StyledGridItem>
            </StyledGrid>
        </StyledMain>
    );
}