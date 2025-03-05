import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import { styled } from 'styled-components';

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

import GlobalStyles from './components/GlobalStyles';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';
import Skills from './components/Skills';

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