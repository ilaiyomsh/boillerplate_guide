import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section1 = () => {
  return (
    <GuideSection 
      title="סעיף 8.1: כותרת הסעיף ה-1"
      nextPath="/chapter8/section2"
      nextTitle="סעיף 8.2"
      prevPath="/chapter8"
      prevTitle="פרק 8"
      chapterNumber={8}
      sectionNumber={1}
    >
      <p>
        זהו הסעיף ה-1 בפרק ה-8. כאן תוכלו למצוא הסבר מפורט על הנושא.
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

export default Section1;
