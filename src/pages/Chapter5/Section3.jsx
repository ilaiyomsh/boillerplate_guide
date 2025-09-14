import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section3 = () => {
  return (
    <GuideSection 
      title="סעיף 5.3: כותרת הסעיף ה-3"
      nextPath="/chapter5/section4"
      nextTitle="סעיף 5.4"
      prevPath="/chapter5/section2"
      prevTitle="סעיף 5.2"
      chapterNumber={5}
      sectionNumber={3}
    >
      <p>
        זהו הסעיף ה-3 בפרק ה-5. כאן תוכלו למצוא הסבר מפורט על הנושא.
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

export default Section3;
