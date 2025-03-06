import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router';
import styled from 'styled-components';

import GlobalStyles from './components/stylesandhtmlcomponents/GlobalStyles.tsx';
import Header from './components/sharedcomponents/Header.tsx';
import Navigation from './components/sharedcomponents/Navigation.tsx';
import Footer from './components/sharedcomponents/Footer.tsx';
import {DynamicPage} from "./components/DynamicPage.tsx";

// Styled component for the main content area
const StyledContent = styled.div`
    width: 80%; // Occupies 80% of the parent container's width
    margin: 0 auto; // Centers the content horizontally
`;

// Styled component for splitting the content into two sections
const StyledSplitContent = styled.div`
    width: 100%; // Occupies full width of its parent
    display: flex; // Enables flexbox layout
    flex-direction: row; // Arranges items in a row
    background-color: #334464; // Sets background color to a dark blue-gray

    // Media query for screens smaller than 900px
    @media (max-width: 900px) {
        width: 100%; // Occupies full width
        min-height: 100vh; // Minimum height is the full viewport height
        flex-direction: column; // Arranges items in a column
        align-items: center; // Centers items horizontally
        margin: auto; // Centers the component
    }
`;

// Root component that contains the basic layout
function Root() {
    return (
        <StyledContent>
            <GlobalStyles /> {/* Applies global styles */}
            <Header /> {/* Renders the header component */}
            <StyledSplitContent>
                <Navigation /> {/* Renders the navigation component */}
                <Routes>
                    {/* Route for the home page.  The DynamicPage component will handle rendering the Home component when the path is "/" */}
                    <Route path="/" element={<DynamicPage />} />
                    {/* Route for dynamic pages.  The DynamicPage component will handle rendering different content based on the ":page" parameter */}
                    <Route path="/:page" element={<DynamicPage />} />
                </Routes>
            </StyledSplitContent>
            <Footer /> {/* Renders the footer component */}
        </StyledContent>
    );
}

// Creates a browser router instance.  All routes are handled by the Root component.
const router = createBrowserRouter(
    [{ path: '*', Component: Root }] // '*' matches any route, ensuring the Root component handles all navigation
);

// Main App component that uses RouterProvider to enable routing
export default function App() {
    return <RouterProvider router={router} />; // Provides the router to the application
}
