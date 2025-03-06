import { useEffect } from 'react';

export const UseDocumentTitle = (title: string) => {
    useEffect(() => {
        document.title = title;

        // Cleanup function to reset the title when the component unmounts
        return () => {
            document.title = 'Home | Resume'; // Replace with your default title
        };
    }, [title]); // Only run when the title changes
};

export const UseMetaContent = (content: string) => {
    useEffect(() => {
        const metaTag = document.querySelector('meta[name="description"]');

        if (metaTag) {
            metaTag.setAttribute('content', content);
        }

        // Cleanup function to reset the meta content when the component unmounts
        return () => {
            const metaTag = document.querySelector('meta[name="description"]');
            if (metaTag) {
                metaTag.setAttribute('content', 'My Default Description'); // Replace with your default description
            }
        };
    }, [content]); // Only run when the content changes
};

