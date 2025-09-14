import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section4 = () => {
  return (
    <GuideSection 
      title="סעיף 1.4: כותרת הסעיף ה-4"
      nextPath="/chapter2"
      nextTitle="פרק 2"
      prevPath="/chapter1/section3"
      prevTitle="סעיף 1.3"
      chapterNumber={1}
      sectionNumber={4}
    >
      <p>
        זהו הסעיף ה-4 בפרק ה-1. כאן תוכלו למצוא הסבר מפורט על הנושא.
      </p>

      <h2>מושגי יסוד</h2>
      <p>
        לפני שנתחיל, חשוב להבין את המושגים הבסיסיים:
      </p>
      <ul>
        <li><strong>מושג ראשון:</strong> הסבר קצר על המושג</li>
        <li><strong>מושג שני:</strong> הסבר קצר על המושג</li>
        <li><strong>מושג שלישי:</strong> הסבר קצר על המושג</li>
      </ul>

      <blockquote>
        <strong>שימו לב:</strong> זוהי דוגמה להמחשה. התאימו את התוכן לצרכים שלכם.
      </blockquote>

      <h2>תרגיל</h2>
      <p>
        נסו ליישם את מה שלמדתם בסעיף זה.
      </p>
    </GuideSection>
  );
};

export default Section4;
