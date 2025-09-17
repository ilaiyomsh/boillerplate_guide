import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import ImageFigure from '../../components/InteractiveDemo/ImageFigure';

const Section1 = () => {
  return (
    <GuideSection 
      title="סעיף 1.1: כותרת הסעיף הראשון"
      nextPath="/chapter1/section2"
      nextTitle="סעיף 1.2"
      prevPath="/chapter1"
      prevTitle="פרק 1"
      chapterNumber={1}
      sectionNumber={1}
    >
      <p>
        זהו הסעיף הראשון בפרק הראשון. כאן תוכלו למצוא הסבר מפורט על הנושא הראשון.
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

      {/* דוגמה לשימוש בתמונה - החלף את example.jpg בשם הקובץ בפועל */}
      {/* <ImageFigure 
        imageName="chapter1/example.jpg" 
        alt="תיאור התמונה" 
        caption="כיתוב התמונה"
        aspectRatio="16 / 9"
        objectFit="contain"
      /> */}

      <blockquote>
        <strong>שימו לב:</strong> זוהי דוגמה בסיסית. בסעיפים הבאים נרחיב ונעמיק יותר.
      </blockquote>

      <h2>תרגול</h2>
      <p>
        חשבו על שימושים מעשיים לרעיון שהוצג ונסו לתאר אותם במילים.
      </p>
    </GuideSection>
  );
};

export default Section1;
