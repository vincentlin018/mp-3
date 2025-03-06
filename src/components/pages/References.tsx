import { styled } from 'styled-components';
import {StyledMain, StyledH3} from "../stylesandhtmlcomponents/SharedStyles.tsx";
import { UseDocumentTitle, UseMetaContent } from "../stylesandhtmlcomponents/HTMLComponents.tsx";

const StyledP = styled.p `
    text-align: center;
    font-size: calc(10px + 1vw);
`;

const StyledProfessional = styled.div`
    /* Use CSS Grid for layout */
    display: grid;
    /* Create 3 equal-width columns */
    grid-template-columns: repeat(3, 1fr);
    /* Add 10px gap between grid items */
    gap: 10px;
    /* Add vertical margin for spacing */
    margin: 20px 0;

    p {
        padding: 15px;
        border: 2px solid black;
        border-radius: 4px;
        background: #f8f9fa;
        margin: 0;
        color: black;
        text-align: center;
    }
`;

const StyledPersonal = styled.div`
    /* Use CSS Grid for layout */
    display: grid;
    /* Create 3 equal-width columns */
    grid-template-columns: repeat(3, 1fr);
    /* Add 10px gap between grid items */
    gap: 10px;
    /* Add vertical margin for spacing */
    margin: 20px 0;

    p {
        padding: 15px;
        border: 2px solid black;
        border-radius: 4px;
        background: #f8f9fa;
        margin: 0;
        color: black;
        text-align: center;
    }
`;

const StyledH5 = styled.h5`
    grid-column: 1 / -1;
    text-align: center;
    border-bottom: 2px solid #ddd8ce;
    padding-bottom: 1vh;
    margin-bottom: 1vh;
    color: white;
`;

export default function References() {
    UseDocumentTitle('References | Resume');
    UseMetaContent("A website that display's Vincent's references");

    return (
        <>
            <StyledMain>
                <StyledH3>References</StyledH3>

                <StyledH5>Professional</StyledH5>

                <StyledProfessional>
                    <StyledP>Name</StyledP>
                    <StyledP>Position</StyledP>
                    <StyledP>Contact</StyledP>
                    <p>Dr. Tyler Gu, Ph.D</p>
                    <p>Partner of Alpha Bull LP</p>
                    <p>(617)-999-6587</p>
                    <p>Than Pham</p>
                    <p>Vice President for Technology, Mission Support, and Registrar | Quincy College</p>
                    <p>(617) 984-1691</p>
                    <p>Vincent Pham</p>
                    <p>IT Security Analyst | Quincy College</p>
                    <p>(617) 984 - 1697</p>
                </StyledProfessional>

                <StyledH5>Personal</StyledH5>
                <StyledPersonal>
                    <StyledP>Name</StyledP>
                    <StyledP>Relation</StyledP>
                    <StyledP>Contact</StyledP>
                    <p>You Lin</p>
                    <p>Dad</p>
                    <p>917-345-6090</p>
                    <p>Jenny Zou</p>
                    <p>Mom</p>
                    <p>917-302-1115</p>
                    <p>Michelle Lin</p>
                    <p>Sister</p>
                    <p>617-768-7179</p>
                </StyledPersonal>
            </StyledMain>
        </>
    );
}