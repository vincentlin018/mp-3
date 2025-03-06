import { styled } from 'styled-components';
import { StyledMain, StyledH3 } from '../stylesandhtmlcomponents/SharedStyles.tsx';
import { UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";
import Calculator from '../calculator/Calculator.tsx';

// Styled component for project title and date row
const StyledRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-left: #ddd8ce 4px solid;
    padding-left: 1vw;
    margin-top: 1vh;
`;

// Styled component for project description list
const StyledDescription = styled.ul`
    padding: 2vw;
`;

// Styled component for calculator container
const StyledCalc = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 2vh;
`;

export default function Projects() {
    // Set meta description for SEO
    UseMetaContent("A website that display's Vincent's projects");

    return(
        <>
            <StyledMain>
                <StyledH3>Projects</StyledH3>

                {/* React Calculator Project */}
                <StyledRow>
                    <p>React Calculator | <em>React, TypeScript, Styled Components</em></p>
                    <p><em>Feb. 2025 - Present</em></p>
                </StyledRow>
                <StyledDescription>
                    <li>Developed a functional calculator application using React and TypeScript</li>
                    <li>Implemented reusable components and hooks for efficient state management</li>
                    <li>Utilized Styled Components for consistent and maintainable styling</li>
                </StyledDescription>

                {/* Embedding the Calculator component */}
                <StyledCalc>
                    <Calculator />
                </StyledCalc>

                {/* React App Project */}
                <StyledRow>
                    <p>React App | <em>React, TypeScript, Vite, Git, Vercel</em></p>
                    <p><em>Feb. 2025 - Present</em></p>
                </StyledRow>
                <StyledDescription>
                    <li>Developed a modern web application using React 18 with TypeScript, leveraging Vite for fast build times and
                        optimized production bundles</li>
                    <li>Retrieved information from a API to be displayed in components, minimizing code verbosity</li>
                    <li>Leveraged Git for version control and deployed the website using Vercel</li>
                </StyledDescription>

                {/* Online Resume Project */}
                <StyledRow>
                    <p>Online Resume | <em>HTML, CSS, JavaScript, Git, Vercel</em></p>
                    <p><em>Jan. 2025 - Feb. 2025</em></p>
                </StyledRow>
                <StyledDescription>
                    <li>Designed and developed a responsive personal portfolio website using HTML5, CSS3, and vanilla JavaScript,
                        showcasing projects and skills with an intuitive user interface</li>
                    <li>Implemented a modular and maintainable code structure, organizing content into separate sections for
                        achievements, certifications, education, and experiences</li>
                    <li>Leveraged Git for version control and deployed the website using Vercel</li>
                    <li>Implemented mobile-first responsive design using CSS media queries and flexbox, ensuring optimal viewing across
                        devices, and applied SEO best practices including meta tags and semantic HTML</li>
                </StyledDescription>

                {/* Simple Connect 4 Project */}
                <StyledRow>
                    <p>Simple Connect 4 | <em>Python</em></p>
                    <p><em>Nov. 2022 - Dec. 2022</em></p>
                </StyledRow>
                <StyledDescription>
                    <li>Developed a Python-based Connect 4 game featuring an intelligent computer opponent</li>
                    <li>Implemented an advanced look-ahead algorithm enabling the Opponent to calculate multiple future moves for
                        optimal decision-making</li>
                    <li>Utilized game theory principles to enhance the AI's strategic gameplay and challenge human players</li>
                </StyledDescription>
            </StyledMain>
        </>
    );
}
