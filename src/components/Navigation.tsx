import { Link } from 'react-router';
import { styled } from 'styled-components';

const StyledNav = styled.nav`
    width: 30%;
    background-color: #312f36;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        background-color: #312f36;
        font-size: calc(2px + 2vw);
        text-align: center;
        list-style: none;
        padding-left: 0;
    }

    li {
        font-size: calc(2px + 2vw);
        width: 90%;
        background-color: white;
        padding: 2vh 0;
        margin: 5vh auto;
    }

    a {
        text-decoration: none;
        color: black;

        &:hover {
            color: #312f36;
        }
    }

    @media (max-width: 900px) {
        width: 100%;
        ul {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            background-color: #312f36;
            list-style: none;
            padding-left: 0;
        }

        li {
            font-size: calc(2px + 1.5vw);
            background-color: white;
            padding: 1% .5%;
            margin: 1% .5%;
        }
    }
`;

export default function Navigation() {
    return(
        <StyledNav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/education">Education</Link></li>
                <li><Link to="/experience">Experience</Link></li>
                <li><Link to="/skills">Skills</Link></li>
                <li><Link to="/references">References</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/projects">Projects</Link></li>
            </ul>
        </StyledNav>
    );
}