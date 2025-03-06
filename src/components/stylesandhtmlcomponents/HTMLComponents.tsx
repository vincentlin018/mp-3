import { useEffect } from 'react';

// Custom hook to update the meta description content
export const UseMetaContent = (content: string) => {
    useEffect(() => {
        // Find the meta tag with name="description" in the document
        const metaTag = document.querySelector('meta[name="description"]');

        // If the meta tag exists, update its content attribute
        if (metaTag) {
            metaTag.setAttribute('content', content);
        }

        // Cleanup function to reset the meta content when the component unmounts
        return () => {
            // Re-query the meta tag (in case it changed)
            const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) {
                // Reset the content to a default value
                metaTag.setAttribute('content', "A website of Vincent Lin's resume"); // Replace with your default description
            }
        };
    }, [content]); // Dependency array: effect runs when 'content' changes
};

