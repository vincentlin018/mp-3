import { useEffect } from 'react';
import { useParams } from 'react-router'; // Imports the useParams hook for accessing route parameters.

import Home from './pages/Home'; // Imports the Home component.
import Experience from './pages/Experience'; // Imports the Experience component.
import Skills from './pages/Skills'; // Imports the Skills component.
import Education from './pages/Education'; // Imports the Education component.
import References from './pages/References'; // Imports the References component.
import Achievements from './pages/Achievements'; // Imports the Achievements component.
import Projects from './pages/Projects'; // Imports the Projects component.
import Credits from './pages/Credits';

export const DynamicPage = () => {
    const { page } = useParams<{ page?: string }>(); // Extracts the 'page' parameter from the URL using useParams.

    useEffect(() => {
        // Updates the document title based on the 'page' parameter.
        const pageTitle = page ? page.charAt(0).toUpperCase() + page.slice(1) : 'Home';
        document.title = `${pageTitle} | Resume`;
    }, [page]);

    // Renders the appropriate component based on the 'page' parameter.
    if (!page) {
        return <Home />;
    } else if (page === 'experience') {
        return <Experience />;
    } else if (page === 'skills') {
        return <Skills />;
    } else if (page === 'education') {
        return <Education />;
    } else if (page === 'references') {
        return <References />;
    } else if (page === 'achievements') {
        return <Achievements />;
    } else if (page === 'projects') {
        return <Projects />;
    } else {
        return <Credits />;
    }
};
