import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const Section4 = () => {
  return (
    <GuideSection 
      title="סעיף 6.4: כותרת הסעיף ה-4"
      nextPath="/chapter7"
      nextTitle="פרק 7"
      prevPath="/chapter6/section3"
      prevTitle="סעיף 6.3"
      chapterNumber={6}
      sectionNumber={4}
    >
      <p>
        זהו הסעיף ה-4 בפרק ה-6. כאן תוכלו למצוא הסבר מפורט על הנושא.
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

      <h2>דוגמת קוד</h2>
      <p>הנה דוגמה להמחשה:</p>

      <CodeExample language="javascript">
{`// דוגמה לפרק 6, סעיף 4
function exampleFunction() {
  console.log('זוהי דוגמה לפרק 6, סעיף 4');
  return 'תוצאה מהדוגמה';
}

// שימוש בפונקציה
const result = exampleFunction();
console.log(result);`}
      </CodeExample>

      <h2>הסבר הקוד</h2>
      <p>
        בדוגמה לעיל אנחנו רואים דוגמה בסיסית שמתאימה לסעיף זה.
      </p>

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
