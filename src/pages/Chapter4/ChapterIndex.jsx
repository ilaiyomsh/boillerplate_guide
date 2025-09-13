import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from '../../components/GuideSection/GuideSection';

const ChapterIndex = () => {
  const prevChapter = 3;
  
  return (
    <GuideSection 
      title="פרק 4: כותרת הפרק ה-4"
      nextPath="/chapter4/section1"
      nextTitle="סעיף 1"
      prevPath={prevChapter > 0 ? `/chapter${prevChapter}/section4` : "/"}
      prevTitle={prevChapter > 0 ? `סעיף ${prevChapter}.4` : "בית"}
      chapterNumber={4}
    >
      <p>
        ברוכים הבאים לפרק ה-4 של המדריך. כאן תוכלו למצוא מבוא כללי לנושא הפרק 
        והסבר על מה שתלמדו בסעיפים הבאים.
      </p>

      <h2>מה נלמד בפרק זה?</h2>
      <ul>
        <li>נושא ראשון - בסיסי וחשוב</li>
        <li>נושא שני - המשך טבעי</li>
        <li>נושא שלישי - מתקדם יותר</li>
        <li>נושא רביעי - סיכום ויישום</li>
      </ul>

      <h2>סעיפי הפרק</h2>
      <div className="chapter-sections">
        <Link to="/chapter4/section1" className="section-link">
          <h3>סעיף 4.1: כותרת הסעיף הראשון</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>

        <Link to="/chapter4/section2" className="section-link">
          <h3>סעיף 4.2: כותרת הסעיף השני</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>

        <Link to="/chapter4/section3" className="section-link">
          <h3>סעיף 4.3: כותרת הסעיף השלישי</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>

        <Link to="/chapter4/section4" className="section-link">
          <h3>סעיף 4.4: כותרת הסעיף הרביעי</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>
      </div>

      <blockquote>
        <strong>טip:</strong> מומלץ לעבור על הסעיפים בסדר, כיון שכל סעיף נשען על הידע מהסעיפים הקודמים.
      </blockquote>
    </GuideSection>
  );
};

export default ChapterIndex;
