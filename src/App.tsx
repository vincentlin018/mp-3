import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { styled } from 'styled-components';

import GlobalStyles from './components/stylesandhtmlcomponents/GlobalStyles.tsx';
import Header from './components/sharedcomponents/Header.tsx';
import Navigation from './components/sharedcomponents/Navigation.tsx';
import Footer from './components/sharedcomponents/Footer.tsx';
import Home from './components/pages/Home.tsx';
import Experience from './components/pages/Experience.tsx';
import Skills from './components/pages/Skills.tsx';
import Education from './components/pages/Education.tsx';
import References from './components/pages/References.tsx';
import Achievements from './components/pages/Achievements.tsx';
import Projects from './components/pages/Projects.tsx';
import Credits from './components/pages/Credits.tsx';

const StyledContent = styled.div`
    width: 80%;
    margin: 0 auto;
    
    
`;

const StyledSplitContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #334464;

    @media (max-width: 900px) {
        width: 100%;
        min-height: 100vh;
        flex-direction: column;
        align-items: center;
        margin: auto;
    }
`;

function Root () {
  return (
      <StyledContent>
            <GlobalStyles />
            <Header />
            <StyledSplitContent>
            <Navigation />

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/experience" element={<Experience />}/>
                <Route path="/skills" element={<Skills />}/>
                <Route path="/education" element={<Education />}/>
                <Route path="/references" element={<References />} />
                <Route path="/achievements" element={<Achievements />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/credits" element={<Credits/>} />

            </Routes>
            </StyledSplitContent>
            <Footer />
      </StyledContent>
  )
}

const router = createBrowserRouter(
    [{path:'*', Component: Root}]
);



export default function App() {
  return <RouterProvider router={router}/>
}