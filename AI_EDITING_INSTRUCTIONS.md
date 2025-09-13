# הוראות עריכה לסוכן AI - מדריך אינטראקטיבי

## מבנה הפרויקט וקבצים לעריכה

### קבצים ראשיים לעדכון כותרות:

1. **`src/components/Navigation/Navigation.jsx`** - שורות 23-32
2. **`src/pages/Home/Home.jsx`** - שורות 7-16

### מיקום תוכן הפרקים:
- **פרק X:** `src/pages/ChapterX/`
  - `ChapterIndex.jsx` - עמוד הפרק הראשי
  - `Section1.jsx` - סעיף 1
  - `Section2.jsx` - סעיף 2  
  - `Section3.jsx` - סעיף 3
  - `Section4.jsx` - סעיף 4

## הוראות עריכה מדויקות

### 1. שינוי כותרות פרקים

#### קובץ: `src/components/Navigation/Navigation.jsx`
**מיקום:** שורות 23-32
**חפש את:**
```javascript
const chapters = [
  { num: 1, title: "כותרת פרק 1" },
  { num: 2, title: "כותרת פרק 2" },
  // ... עד פרק 8
];
```

**החלף ל:**
```javascript
const chapters = [
  { num: 1, title: "הכותרת החדשה לפרק 1" },
  { num: 2, title: "הכותרת החדשה לפרק 2" },
  // ... עד פרק 8
];
```

#### קובץ: `src/pages/Home/Home.jsx`
**מיקום:** שורות 7-16
**חפש את:**
```javascript
const chapters = [
  { num: 1, title: "כותרת הפרק הראשון", description: "מבוא ויסודות בסיסיים" },
  { num: 2, title: "כותרת הפרק השני", description: "נושאים מתקדמים יותר" },
  // ... עד פרק 8
];
```

**החלף ל:**
```javascript
const chapters = [
  { num: 1, title: "הכותרת החדשה", description: "התיאור החדש" },
  { num: 2, title: "הכותרת החדשה", description: "התיאור החדש" },
  // ... עד פרק 8
];
```

### 2. עריכת עמוד פרק (ChapterIndex.jsx)

#### מבנה הקובץ:
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from '../../components/GuideSection/GuideSection';

const ChapterIndex = () => {
  return (
    <GuideSection 
      title="פרק X: כותרת הפרק"
      nextPath="/chapterX/section1"
      nextTitle="סעיף 1"
      prevPath={/* נתיב הפרק הקודם או "/" לפרק 1 */}
      prevTitle={/* כותרת הפרק הקודם או "בית" לפרק 1 */}
      chapterNumber={X}
    >
      {/* התוכן כאן */}
    </GuideSection>
  );
};

export default ChapterIndex;
```

#### אזורי עריכה בעמוד הפרק:

1. **כותרת הפרק (שורה 7):**
   ```javascript
   title="פרק X: הכותרת החדשה שלכם"
   ```

2. **מבוא לפרק (שורה 15):**
   ```jsx
   <p>
     התוכן המבואי החדש לפרק...
   </p>
   ```

3. **רשימת נושאים (שורות 17-22):**
   ```jsx
   <h2>מה נלמד בפרק זה?</h2>
   <ul>
     <li>נושא ראשון - תיאור</li>
     <li>נושא שני - תיאור</li>
     <li>נושא שלישי - תיאור</li>
     <li>נושא רביעי - תיאור</li>
   </ul>
   ```

4. **כותרות וסעיפי הפרק (שורות 25-44):**
   ```jsx
   <Link to="/chapterX/section1" className="section-link">
     <h3>סעיף X.1: הכותרת החדשה</h3>
     <p>התיאור החדש</p>
   </Link>
   ```

### 3. עריכת סעיף (Section.jsx)

#### מבנה הקובץ:
```javascript
import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const SectionY = () => {
  return (
    <GuideSection 
      title="סעיף X.Y: כותרת הסעיף"
      nextPath="/chapterX/sectionZ" // או הפרק הבא
      nextTitle="סעיף X.Z" // או "פרק Y"
      prevPath="/chapterX/sectionW" // או עמוד הפרק
      prevTitle="סעיף X.W" // או "פרק X"
      chapterNumber={X}
      sectionNumber={Y}
    >
      {/* התוכן כאן */}
    </GuideSection>
  );
};

export default SectionY;
```

#### אזורי עריכה בסעיף:

1. **כותרת הסעיף (שורה 7):**
   ```javascript
   title="סעיף X.Y: הכותרת החדשה"
   ```

2. **תוכן הסעיף (החל משורה 15):**
   ```jsx
   <p>התוכן החדש...</p>
   
   <h2>כותרת משנה</h2>
   <p>עוד תוכן...</p>
   
   <ul>
     <li>פריט ברשימה</li>
   </ul>
   ```

3. **דוגמת קוד:**
   ```jsx
   <CodeExample language="javascript">
   {`// הקוד שלכם כאן
   console.log("דוגמה");`}
   </CodeExample>
   ```

4. **הערות חשובות:**
   ```jsx
   <blockquote>
     <strong>שימו לב:</strong> ההערה שלכם
   </blockquote>
   ```

### 4. הוספת פרק חדש (פרק 9 ומעלה)

#### שלב 1: יצירת תיקייה וקבצים
```bash
mkdir src/pages/Chapter9
```

יצרו 5 קבצים:
- `ChapterIndex.jsx`
- `Section1.jsx`
- `Section2.jsx` 
- `Section3.jsx`
- `Section4.jsx`

#### שלב 2: עדכון App.js
**קובץ:** `src/App.js`

**הוסיפו import (אחרי שורה 47):**
```javascript
// Chapter 9
import Chapter9Index from './pages/Chapter9/ChapterIndex';
import Chapter9Section1 from './pages/Chapter9/Section1';
import Chapter9Section2 from './pages/Chapter9/Section2';
import Chapter9Section3 from './pages/Chapter9/Section3';
import Chapter9Section4 from './pages/Chapter9/Section4';
```

**הוסיפו routes (אחרי שורה 127):**
```javascript
{/* Chapter 9 */}
<Route path="/chapter9" element={<Chapter9Index />} />
<Route path="/chapter9/section1" element={<Chapter9Section1 />} />
<Route path="/chapter9/section2" element={<Chapter9Section2 />} />
<Route path="/chapter9/section3" element={<Chapter9Section3 />} />
<Route path="/chapter9/section4" element={<Chapter9Section4 />} />
```

#### שלב 3: עדכון ProgressContext.js
**קובץ:** `src/context/ProgressContext.js`
**שורה 8:** עדכנו את המספר:
```javascript
const TOTAL_SECTIONS = 37; // 9 פרקים × 4 סעיפים + 1 עמוד לכל פרק = 45, פחות דף הבית = 44
```

#### שלב 4: עדכון הניווט
**קובץ:** `src/components/Navigation/Navigation.jsx`
**הוסיפו לarray chapters (שורה 33):**
```javascript
{ num: 9, title: "כותרת פרק 9" },
```

#### שלב 5: עדכון דף הבית
**קובץ:** `src/pages/Home/Home.jsx`
**הוסיפו לarray chapters (שורה 17):**
```javascript
{ num: 9, title: "כותרת הפרק התשיעי", description: "תיאור הפרק" },
```

### 5. הסרת פרק

#### שלב 1: מחיקת התיקייה
```bash
rm -rf src/pages/ChapterX
```

#### שלב 2: הסרה מ-App.js
- הסירו את כל ה-imports של הפרק
- הסירו את כל ה-routes של הפרק

#### שלב 3: עדכון ProgressContext.js
עדכנו את `TOTAL_SECTIONS` בהתאם

#### שלב 4: הסרה מהניווט ודף הבית
הסירו את הפרק מה-arrays ב-Navigation.jsx ו-Home.jsx

### 6. שפות נתמכות בקוד

```javascript
// שפות זמינות ל-CodeExample:
"javascript", "jsx", "typescript", "tsx", "html", "css", "scss", 
"json", "markdown", "bash", "shell", "python", "java", "csharp", 
"php", "sql", "xml", "yaml", "dockerfile", "nginx", "apache"
```

### 7. רכיבי HTML נתמכים

```jsx
// רכיבים בסיסיים:
<p>, <h1>-<h6>, <ul>, <ol>, <li>, <strong>, <em>, <code>

// טבלאות:
<table>
  <thead>
    <tr><th>כותרת</th></tr>
  </thead>
  <tbody>
    <tr><td>תוכן</td></tr>
  </tbody>
</table>

// הערות:
<blockquote>
  <strong>סוג הערה:</strong> התוכן
</blockquote>

// קישורים חיצוניים:
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  טקסט הקישור
</a>
```

### 8. חישוב נתיבי ניווט

#### לסעיף ראשון בפרק:
- **prevPath:** `/chapterX` (עמוד הפרק)
- **nextPath:** `/chapterX/section2`

#### לסעיפים אמצעיים (2-3):
- **prevPath:** `/chapterX/section[Y-1]`
- **nextPath:** `/chapterX/section[Y+1]`

#### לסעיף אחרון בפרק (4):
- **prevPath:** `/chapterX/section3`
- **nextPath:** `/chapter[X+1]` (הפרק הבא) או `/` (אם זה הפרק האחרון)

#### לעמוד פרק:
- **prevPath:** `/chapter[X-1]/section4` (הסעיף האחרון של הפרק הקודם) או `/` (לפרק 1)
- **nextPath:** `/chapterX/section1`

### 9. בדיקות לביצוע אחרי עריכה

1. **וודאו שהפרויקט עובר build:**
   ```bash
   npm run build
   ```

2. **בדקו שאין שגיאות lint:**
   ```bash
   npm start
   ```

3. **בדקו ניווט:** כל הקישורים עובדים
4. **בדקו התקדמות:** מעקב הסעיפים עובד
5. **בדקו responsive:** העיצוב עובד במובייל

### 10. דוגמאות מלאות לקבצים

#### דוגמה: ChapterIndex.jsx
```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from '../../components/GuideSection/GuideSection';

const ChapterIndex = () => {
  return (
    <GuideSection 
      title="פרק 1: יסודות React"
      nextPath="/chapter1/section1"
      nextTitle="סעיף 1"
      prevPath="/"
      prevTitle="בית"
      chapterNumber={1}
    >
      <p>
        ברוכים הבאים לפרק הראשון שעוסק ביסודות React. 
        בפרק זה נלמד את המושגים הבסיסיים הנדרשים לפיתוח.
      </p>

      <h2>מה נלמד בפרק זה?</h2>
      <ul>
        <li>מושג הרכיב (Component)</li>
        <li>JSX ותחביר בסיסי</li>
        <li>Props ו-State</li>
        <li>Event Handling</li>
      </ul>

      <h2>סעיפי הפרק</h2>
      <div className="chapter-sections">
        <Link to="/chapter1/section1" className="section-link">
          <h3>סעיף 1.1: מבוא לרכיבים</h3>
          <p>למידת המושג הבסיסי של רכיב ב-React</p>
        </Link>

        <Link to="/chapter1/section2" className="section-link">
          <h3>סעיף 1.2: JSX - תחביר הכתיבה</h3>
          <p>איך לכתוב HTML בתוך JavaScript</p>
        </Link>

        <Link to="/chapter1/section3" className="section-link">
          <h3>סעיף 1.3: Props - העברת נתונים</h3>
          <p>איך להעביר מידע בין רכיבים</p>
        </Link>

        <Link to="/chapter1/section4" className="section-link">
          <h3>סעיף 1.4: State - ניהול מצב</h3>
          <p>איך לנהל מצב פנימי ברכיב</p>
        </Link>
      </div>

      <blockquote>
        <strong>טיפ:</strong> מומלץ לעבור על הסעיפים בסדר ולתרגל כל נושא.
      </blockquote>
    </GuideSection>
  );
};

export default ChapterIndex;
```

#### דוגמה: Section1.jsx
```javascript
import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const Section1 = () => {
  return (
    <GuideSection 
      title="סעיף 1.1: מבוא לרכיבים"
      nextPath="/chapter1/section2"
      nextTitle="סעיף 1.2"
      prevPath="/chapter1"
      prevTitle="פרק 1"
      chapterNumber={1}
      sectionNumber={1}
    >
      <p>
        רכיב (Component) הוא אבן הבניין הבסיסית ב-React. 
        רכיב מאפשר לנו לחלק את ממשק המשתמש לחלקים קטנים ועצמאיים.
      </p>

      <h2>מהו רכיב?</h2>
      <p>
        רכיב הוא פונקציה JavaScript שמחזירה JSX ומתארת איך חלק מהממשק צריך להיראות.
      </p>

      <h2>דוגמה בסיסית</h2>
      <p>הנה דוגמה לרכיב פשוט:</p>

      <CodeExample language="jsx">
{`// רכיב פשוט שמציג הודעת ברכה
function Welcome() {
  return <h1>שלום עולם!</h1>;
}

// שימוש ברכיב
function App() {
  return (
    <div>
      <Welcome />
    </div>
  );
}`}
      </CodeExample>

      <h2>הסבר הקוד</h2>
      <p>
        בדוגמה לעיל יצרנו רכיב בשם <code>Welcome</code> שמחזיר JSX. 
        לאחר מכן השתמשנו ברכיב בתוך רכיב <code>App</code>.
      </p>

      <blockquote>
        <strong>שימו לב:</strong> שמות רכיבים ב-React חייבים להתחיל באות גדולה.
      </blockquote>

      <h2>תרגיל</h2>
      <p>
        נסו ליצור רכיב בשם <code>Greeting</code> שמציג הודעה אישית.
      </p>
    </GuideSection>
  );
};

export default Section1;
```

---

## סיכום לסוכן AI

עקבו אחר ההוראות הללו בדיוק:
1. **זהו קבצים לפי נתיב מדויק**
2. **חפשו טקסט בשורות המצוינות**
3. **החליפו רק את החלקים הנדרשים**
4. **שמרו על מבנה הקוד והזחות**
5. **בדקו שהניווט עובד אחרי שינויים**
6. **עדכנו את כל הקבצים הרלוונטיים יחד**

זכרו: כל שינוי בכותרת פרק דורש עדכון ב-3 מקומות:
- Navigation.jsx
- Home.jsx  
- החלק הרלוונטי בפרק עצמו
