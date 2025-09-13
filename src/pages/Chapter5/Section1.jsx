import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const Section1 = () => {
  return (
    <GuideSection 
      title="סעיף 5.1: כותרת הסעיף ה-1"
      nextPath="/chapter5/section2"
      nextTitle="סעיף 5.2"
      prevPath="/chapter5"
      prevTitle="פרק 5"
      chapterNumber={5}
      sectionNumber={1}
    >
      <p>
        זהו הסעיף ה-1 בפרק ה-5. כאן תוכלו למצוא הסבר מפורט על הנושא.
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
{`// דוגמה לפרק 5, סעיף 1
function exampleFunction() {
  console.log('זוהי דוגמה לפרק 5, סעיף 1');
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

export default Section1;
