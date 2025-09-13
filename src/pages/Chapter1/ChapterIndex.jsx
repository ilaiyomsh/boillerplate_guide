import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from '../../components/GuideSection/GuideSection';

const ChapterIndex = () => {
  return (
    <GuideSection 
      title="פרק 1: כותרת הפרק הראשון"
      nextPath="/chapter1/section1"
      nextTitle="סעיף 1"
      prevPath="/"
      prevTitle="בית"
      chapterNumber={1}
    >
      <p>
        ברוכים הבאים לפרק הראשון של המדריך. כאן תוכלו למצוא מבוא כללי לנושא הפרק 
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
        <Link to="/chapter1/section1" className="section-link">
          <h3>סעיף 1.1: כותרת הסעיף הראשון</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>

        <Link to="/chapter1/section2" className="section-link">
          <h3>סעיף 1.2: כותרת הסעיף השני</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>

        <Link to="/chapter1/section3" className="section-link">
          <h3>סעיף 1.3: כותרת הסעיף השלישי</h3>
          <p>תיאור קצר של מה שנלמד בסעיף זה</p>
        </Link>

        <Link to="/chapter1/section4" className="section-link">
          <h3>סעיף 1.4: כותרת הסעיף הרביעי</h3>
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
