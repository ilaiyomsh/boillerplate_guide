import React, { createContext, useState, useContext, useCallback } from 'react';

const ProgressContext = createContext();

export const useProgress = () => useContext(ProgressContext);

// Total sections: 8 chapters × 4 sections each = 32 sections
const TOTAL_SECTIONS = 32;

export const ProgressProvider = ({ children }) => {
    const [visited, setVisited] = useState(new Set());
    const [completed, setCompleted] = useState(new Set());

    const markAsVisited = useCallback((path) => {
        // Track all pages except home
        if (path !== '/' && path !== '') {
             setVisited((prevVisited) => {
                if (prevVisited.has(path)) {
                    return prevVisited; // No change needed
                }
                const newVisited = new Set(prevVisited);
                newVisited.add(path);
                return newVisited;
            });
        }
    }, []);

    const markAsCompleted = useCallback((path) => {
        if (path !== '/' && path !== '') {
            setCompleted((prevCompleted) => {
                if (prevCompleted.has(path)) {
                    return prevCompleted; // No change needed
                }
                const newCompleted = new Set(prevCompleted);
                newCompleted.add(path);
                return newCompleted;
            });
            // Also mark as visited
            markAsVisited(path);
        }
    }, [markAsVisited]);

    const progress = Math.round((completed.size / TOTAL_SECTIONS) * 100);
    const visitProgress = Math.round((visited.size / TOTAL_SECTIONS) * 100);

    const value = {
        visited,
        completed,
        markAsVisited,
        markAsCompleted,
        progress,
        visitProgress,
        totalSections: TOTAL_SECTIONS
    };

    return (
        <ProgressContext.Provider value={value}>
            {children}
        </ProgressContext.Provider>
    );
};
