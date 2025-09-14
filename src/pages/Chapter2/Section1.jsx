import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section1 = () => {
  return (
    <GuideSection 
      title="סעיף 2.1: כותרת הסעיף ה-1"
      nextPath="/chapter2/section2"
      nextTitle="סעיף 2.2"
      prevPath="/chapter2"
      prevTitle="פרק 2"
      chapterNumber={2}
      sectionNumber={1}
    >
      <p>
        זהו הסעיף ה-1 בפרק ה-2. כאן תוכלו למצוא הסבר מפורט על הנושא.
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

export default Section1;
