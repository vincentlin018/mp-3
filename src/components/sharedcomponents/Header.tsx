import { styled } from 'styled-components';

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

export default function Header() {
    return (
        <StyledHeader>
            <h1>Vincent Lin</h1>
            <p><em>My Online Resume</em></p>
        </StyledHeader>

    );
}