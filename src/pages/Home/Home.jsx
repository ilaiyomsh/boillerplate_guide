import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import { useProgress } from '../../context/ProgressContext';

const Home = () => {
  const { progress, visited, completed } = useProgress();

  const chapters = [
    { num: 1, title: "כותרת הפרק הראשון", description: "מבוא ויסודות בסיסיים" },
    { num: 2, title: "כותרת הפרק השני", description: "נושאים מתקדמים יותר" },
    { num: 3, title: "כותרת הפרק השלישי", description: "יישומים מעשיים" },
    { num: 4, title: "כותרת הפרק הרביעי", description: "טכניקות מתקדמות" },
    { num: 5, title: "כותרת הפרק החמישי", description: "אופטימיזציה וביצועים" },
    { num: 6, title: "כותרת הפרק השישי", description: "בדיקות ואבטחה" },
    { num: 7, title: "כותרת הפרק השביעי", description: "פריסה והטמעה" },
    { num: 8, title: "כותרת הפרק השמיני", description: "סיכום ומסקנות" },
  ];

  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <h1 className={styles.title}>ברוכים הבאים למדריך האינטראקטיבי</h1>
        <p className={styles.subtitle}>
          מדריך מקיף ואינטראקטיבי שילמד אתכם את כל מה שצריך לדעת בצורה מעשית ונגישה
        </p>
        
        {(visited.size > 0 || completed.size > 0) && (
          <div className={styles.progressSummary}>
            <h3>ההתקדמות שלכם</h3>
            <div className={styles.statsGrid}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{visited.size}</span>
                <span className={styles.statLabel}>סעיפים נצפו</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{completed.size}</span>
                <span className={styles.statLabel}>סעיפים הושלמו</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{progress}%</span>
                <span className={styles.statLabel}>השלמת המדריך</span>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className={styles.chaptersGrid}>
        <h2 className={styles.sectionTitle}>תוכן המדריך</h2>
        <div className={styles.grid}>
          {chapters.map(chapter => (
            <Link 
              key={chapter.num} 
              to={`/chapter${chapter.num}`}
              className={styles.chapterCard}
            >
              <div className={styles.chapterNumber}>פרק {chapter.num}</div>
              <h3 className={styles.chapterTitle}>{chapter.title}</h3>
              <p className={styles.chapterDescription}>{chapter.description}</p>
              <div className={styles.chapterProgress}>
                {/* Calculate progress for this chapter */}
                {(() => {
                  const chapterSections = [
                    `/chapter${chapter.num}`,
                    `/chapter${chapter.num}/section1`,
                    `/chapter${chapter.num}/section2`,
                    `/chapter${chapter.num}/section3`,
                    `/chapter${chapter.num}/section4`,
                  ];
                  const completedInChapter = chapterSections.filter(path => completed.has(path)).length;
                  const visitedInChapter = chapterSections.filter(path => visited.has(path)).length;
                  
                  return (
                    <div className={styles.progressInfo}>
                      <span>הושלמו: {completedInChapter}/5</span>
                      <span>נצפו: {visitedInChapter}/5</span>
                    </div>
                  );
                })()}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.gettingStarted}>
        <h2 className={styles.sectionTitle}>איך להתחיל?</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.stepNumber}>1</div>
            <div className={styles.stepContent}>
              <h3>התחילו מהפרק הראשון</h3>
              <p>מומלץ להתחיל מהפרק הראשון ולהמשיך בסדר</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>2</div>
            <div className={styles.stepContent}>
              <h3>עברו על כל הסעיפים</h3>
              <p>כל פרק מחולק ל-4 סעיפים שבונים אחד על השני</p>
            </div>
          </div>
          <div className={styles.step}>
            <div className={styles.stepNumber}>3</div>
            <div className={styles.stepContent}>
              <h3>תרגלו ויישמו</h3>
              <p>השתמשו בדוגמאות הקוד ובתרגילים לתרגול</p>
            </div>
          </div>
        </div>

        <div className={styles.startButton}>
          <Link to="/chapter1" className={styles.ctaButton}>
            התחילו עכשיו! →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
