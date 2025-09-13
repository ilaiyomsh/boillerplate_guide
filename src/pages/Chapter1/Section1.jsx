import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

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

      <h2>דוגמת קוד</h2>
      <p>הנה דוגמה פשוטה להמחשה:</p>

      <CodeExample language="javascript">
{`// דוגמה בסיסית
function greetUser(name) {
  return \`שלום \${name}! ברוך הבא למדריך\`;
}

// שימוש בפונקציה
const message = greetUser("יוסי");
console.log(message);`}
      </CodeExample>

      <h2>הסבר הקוד</h2>
      <p>
        בדוגמה לעיל אנחנו רואים איך ליצור פונקציה פשוטה שמקבלת פרמטר ומחזירה הודעה.
      </p>

      <blockquote>
        <strong>שימו לב:</strong> זוהי דוגמה בסיסית. בסעיפים הבאים נרחיב ונעמיק יותר.
      </blockquote>

      <h2>תרגיל</h2>
      <p>
        נסו ליצור פונקציה דומה שמקבלת שם ומחזירה הודעת פרידה.
      </p>
    </GuideSection>
  );
};

export default Section1;
