import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section2 = () => {
  return (
    <GuideSection 
      title="סעיף 7.2: כותרת הסעיף ה-2"
      nextPath="/chapter7/section3"
      nextTitle="סעיף 7.3"
      prevPath="/chapter7/section1"
      prevTitle="סעיף 7.1"
      chapterNumber={7}
      sectionNumber={2}
    >
      <p>
        זהו הסעיף ה-2 בפרק ה-7. כאן תוכלו למצוא הסבר מפורט על הנושא.
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

export default Section2;
