import { UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";
import { StyledMain, StyledH3 } from "../stylesandhtmlcomponents/SharedStyles.tsx";
import { styled } from "styled-components";

// Styled component for centered text
const StyledText = styled.p`
    text-align: center;
`;

export default function Credits() {
    // Set meta description for SEO
    UseMetaContent("Credits page for Vincent's online resume");

    return (
        <>
            <StyledMain>
                <StyledH3>Credits</StyledH3>

                {/* Placeholder text for the credits page */}
                <StyledText>
                    Welcome to the Credits! Currently it is a work in progress...
                </StyledText>
            </StyledMain>
        </>
    );
}
