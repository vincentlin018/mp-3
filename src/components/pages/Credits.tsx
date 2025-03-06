import {UseDocumentTitle, UseMetaContent} from "../stylesandhtmlcomponents/HTMLComponents.tsx";
import {StyledMain, StyledH3, StyledMainText} from "../stylesandhtmlcomponents/SharedStyles.tsx";

export default function Credits() {
    UseDocumentTitle('Credits | Resume');
    UseMetaContent("Credits page for Vincent's online resume");
    return (
        <>
        <StyledMain>
            <StyledH3>Credits</StyledH3>

            <StyledMainText>
                Welcome to the Credits! Currently it is a work in progress...
            </StyledMainText>
        </StyledMain>

        </>
    );
}