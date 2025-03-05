import { styled } from 'styled-components';

const StyledFooter = styled.p `
    background-color: #222222;
    color: white;
    padding: 1vh 1vw;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    a {
        color: white;
        text-decoration: none;
        
        &:hover {
            text-decoration: underline;
        }
    }
`;

export default function Footer() {
    return (
        <>
            <StyledFooter>
                <p>All Rights Reserved by Vincent Lin <a href="/credits">Credits</a>&copy;</p>
            </StyledFooter>
        </>
    );

}

