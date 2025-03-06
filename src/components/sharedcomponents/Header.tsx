import { styled } from 'styled-components';

// Styled component for the header
const StyledHeader = styled.header`
    display: flex;
    flex-direction: column;
    padding: 1vh 1vw;
    background-color: #222222;
    color: white;
    align-items: flex-start;
    box-sizing: border-box;

    @media screen and (max-width: 900px) {
            align-items: center;
        }
    
    
`;

// Header component
export default function Header() {
    return (
        <StyledHeader>
            <h1>Vincent Lin</h1>
            <p><em>My Online Resume</em></p>
        </StyledHeader>

    );
}