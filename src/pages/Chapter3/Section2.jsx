import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section2 = () => {
  return (
    <GuideSection 
      title="סעיף 3.2: כותרת הסעיף ה-2"
      nextPath="/chapter3/section3"
      nextTitle="סעיף 3.3"
      prevPath="/chapter3/section1"
      prevTitle="סעיף 3.1"
      chapterNumber={3}
      sectionNumber={2}
    >
      <p>
        זהו הסעיף ה-2 בפרק ה-3. כאן תוכלו למצוא הסבר מפורט על הנושא.
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

      <h2>המחשה</h2>
      <p>
        כאן ניתן לשלב תמונה או תרשים שממחישים את הרעיון המרכזי של הסעיף.
      </p>

      <blockquote>
        <strong>שימו לב:</strong> זוהי דוגמה להמחשה. התאימו את התוכן לצרכים שלכם.
      </blockquote>

      <h2>תרגול</h2>
      <p>
        חשבו על שימושים מעשיים לרעיון שהוצג ונסו לתאר אותם במילים.
      </p>
    </GuideSection>
  );
};

export default Section2;
