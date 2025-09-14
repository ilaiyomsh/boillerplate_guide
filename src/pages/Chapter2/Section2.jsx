import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section2 = () => {
  return (
    <GuideSection 
      title="סעיף 2.2: כותרת הסעיף ה-2"
      nextPath="/chapter2/section3"
      nextTitle="סעיף 2.3"
      prevPath="/chapter2/section1"
      prevTitle="סעיף 2.1"
      chapterNumber={2}
      sectionNumber={2}
    >
      <p>
        זהו הסעיף ה-2 בפרק ה-2. כאן תוכלו למצוא הסבר מפורט על הנושא.
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
