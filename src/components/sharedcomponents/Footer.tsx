import { styled } from 'styled-components';
import { Link } from 'react-router';

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
                <p>All Rights Reserved by Vincent Lin <Link to="/credits">Credits</Link>&copy;</p>
            </StyledFooter>
        </>
    );

}

