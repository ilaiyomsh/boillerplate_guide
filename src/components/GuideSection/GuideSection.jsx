import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GuideSection.module.css';

const GuideSection = ({ 
  title, 
  children, 
  nextPath, 
  nextTitle, 
  prevPath, 
  prevTitle,
  chapterNumber,
  sectionNumber 
}) => {

  return (
    <div className={styles.section}>
      <header className={styles.header}>
        {chapterNumber && sectionNumber && (
          <div className={styles.breadcrumb}>
            פרק {chapterNumber} • סעיף {sectionNumber}
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
      </header>

      <main className={styles.content}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className={styles.navigation}>
          {prevPath && (
            <Link to={prevPath} className={styles.navButton}>
              ← {prevTitle}
            </Link>
          )}
          
          {nextPath && (
            <Link to={nextPath} className={styles.navButton}>
              {nextTitle} →
            </Link>
          )}
        </div>
      </footer>
    </div>
  );
};

export default GuideSection;
