import {UseDocumentTitle, UseMetaContent} from "../stylesandhtmlcomponents/HTMLComponents.tsx";
import {StyledMain, StyledH3} from "../stylesandhtmlcomponents/SharedStyles.tsx";
import {styled} from "styled-components";

const StyledText = styled.p `
    text-align: center;
`;

export default function Credits() {
    UseDocumentTitle('Credits | Resume');
    UseMetaContent("Credits page for Vincent's online resume");
    return (
        <>
        <StyledMain>
            <StyledH3>Credits</StyledH3>

            <StyledText>
                Welcome to the Credits! Currently it is a work in progress...
            </StyledText>
        </StyledMain>

        </>
    );
}