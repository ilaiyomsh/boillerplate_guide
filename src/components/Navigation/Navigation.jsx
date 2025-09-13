import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useProgress } from '../../context/ProgressContext';
import ProgressBar from '../ProgressBar/ProgressBar';

const Navigation = () => {
  const { markAsVisited } = useProgress();
  const location = useLocation();
  const [expandedChapters, setExpandedChapters] = useState(new Set());

  useEffect(() => {
    // For HashRouter, use location.pathname (React Router handles this correctly)
    const currentPath = location.pathname;
    markAsVisited(currentPath);
    
    // Auto-expand current chapter
    const chapterMatch = currentPath.match(/\/chapter(\d+)/);
    if (chapterMatch) {
      const chapterNum = parseInt(chapterMatch[1]);
      setExpandedChapters(prev => {
        if (prev.has(chapterNum)) {
          return prev; // No change needed
        }
        return new Set([...prev, chapterNum]);
      });
    }
  }, [location.pathname, markAsVisited]);

  const toggleChapter = (chapterNum) => {
    setExpandedChapters(prev => {
      const newSet = new Set(prev);
      if (newSet.has(chapterNum)) {
        newSet.delete(chapterNum);
      } else {
        newSet.add(chapterNum);
      }
      return newSet;
    });
  };

  const chapters = [
    { num: 1, title: "כותרת פרק 1" },
    { num: 2, title: "כותרת פרק 2" },
    { num: 3, title: "כותרת פרק 3" },
    { num: 4, title: "כותרת פרק 4" },
    { num: 5, title: "כותרת פרק 5" },
    { num: 6, title: "כותרת פרק 6" },
    { num: 7, title: "כותרת פרק 7" },
    { num: 8, title: "כותרת פרק 8" },
  ];

  return (
    <nav className={styles.nav}>
      <div className={styles.header}>
        <h2>המדריך האינטראקטיבי</h2>
        <ProgressBar />
      </div>

      <div className={styles.navContent}>
        <NavLink to="/" end className={({ isActive }) => 
          `${styles.navLink} ${styles.homeLink} ${isActive ? styles.active : ''}`
        }>
          🏠 דף הבית
        </NavLink>

        <div className={styles.chaptersContainer}>
          {chapters.map(chapter => (
            <div key={chapter.num} className={styles.chapterGroup}>
              <div className={styles.chapterHeader}>
                <NavLink 
                  to={`/chapter${chapter.num}`}
                  className={({ isActive }) => 
                    `${styles.chapterLink} ${isActive ? styles.active : ''}`
                  }
                >
                  פרק {chapter.num}: {chapter.title}
                </NavLink>
                <button 
                  className={styles.expandButton}
                  onClick={() => toggleChapter(chapter.num)}
                  aria-label={expandedChapters.has(chapter.num) ? "כווץ פרק" : "הרחב פרק"}
                >
                  {expandedChapters.has(chapter.num) ? '▼' : '▶'}
                </button>
              </div>

              {expandedChapters.has(chapter.num) && (
                <div className={styles.sectionsContainer}>
                  {[1, 2, 3, 4].map(sectionNum => (
                    <NavLink 
                      key={sectionNum}
                      to={`/chapter${chapter.num}/section${sectionNum}`}
                      className={({ isActive }) => 
                        `${styles.sectionLink} ${isActive ? styles.active : ''}`
                      }
                    >
                      סעיף {chapter.num}.{sectionNum}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
