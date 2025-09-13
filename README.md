# מדריך אינטראקטיבי - בוילר פלייט

זהו בוילר-פלייט למדריך אינטראקטיבי בנוי עם React, המיועד לפריסה ב-GitHub Pages ולהטמעה ב-Monday.com.

## 🚀 תכונות

- **8 פרקים** עם 4 סעיפים לכל פרק (סה"כ 32 סעיפים + דף בית)
- **ניווט אינטראקטיבי** עם פרקים מתקפלים
- **מעקב התקדמות** - מעקב אחר סעיפים שנצפו והושלמו
- **רכיב קוד אינטראקטיבי** עם הדגשת תחביר וכפתור העתקה
- **עיצוב רספונסיבי** לכל הגדלי המסכים
- **תמיכה בעברית** (RTL)
- **אופטימיזציה ל-GitHub Pages** עם HashRouter

## 📁 מבנה הפרויקט

```
src/
├── components/
│   ├── GuideSection/          # רכיב בסיסי לכל סעיף
│   ├── Navigation/           # תפריט ניווט
│   ├── CodeExample/          # הצגת קוד עם הדגשה
│   ├── ProgressBar/          # סרגל התקדמות
│   └── InteractiveDemo/      # רכיבים אינטראקטיביים
├── pages/
│   ├── Home/                 # דף הבית
│   └── Chapter[1-8]/         # 8 פרקים עם ChapterIndex ו-4 Section
├── context/
│   └── ProgressContext.js    # ניהול מצב התקדמות גלובלי
└── styles/
    ├── variables.css         # משתני CSS
    ├── globals.css           # סגנונות גלובליים
    └── utilities.css         # כלי עזר CSS
```

## 🛠️ התקנה ופיתוח

### דרישות מקדימות

- Node.js (גרסה 16 ומעלה)
- npm או yarn
- חשבון GitHub

### הקמה מקומית

1. **שכפול הפרויקט:**
   ```bash
   git clone <repository-url>
   cd interactive-guide-boilerplate
   ```

2. **התקנת חבילות:**
   ```bash
   npm install
   ```

3. **הרצה מקומית:**
   ```bash
   npm start
   ```
   הפרויקט יפתח בדפדפן בכתובת: `http://localhost:3000`

4. **בנייה לפרודקשן:**
   ```bash
   npm run build
   ```

## 📝 עריכת התוכן

> **לסוכני AI:** ראו את הקבצים `AI_EDITING_INSTRUCTIONS.md`, `AI_CONTENT_SCHEMA.json` ו-`AI_HELPER_SCRIPT.js` להוראות מפורטות לעריכה אוטומטית.

### שינוי כותרות הפרקים

1. **בקובץ `src/components/Navigation/Navigation.jsx`:**
   ```javascript
   const chapters = [
     { num: 1, title: "כותרת פרק 1 החדשה" },
     { num: 2, title: "כותרת פרק 2 החדשה" },
     // ...
   ];
   ```

2. **בקובץ `src/pages/Home/Home.jsx`:**
   ```javascript
   const chapters = [
     { num: 1, title: "כותרת הפרק הראשון", description: "תיאור חדש" },
     // ...
   ];
   ```

### עריכת תוכן הפרקים

כל פרק נמצא בתיקייה `src/pages/Chapter[מספר]/`:

- **`ChapterIndex.jsx`** - עמוד הפרק הראשי עם רשימת הסעיפים
- **`Section1.jsx` - `Section4.jsx`** - 4 הסעיפים של הפרק

#### דוגמה לעריכת סעיף:

```jsx
import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const Section1 = () => {
  return (
    <GuideSection 
      title="כותרת הסעיף החדשה"
      nextPath="/chapter1/section2"
      nextTitle="סעיף 1.2"
      prevPath="/chapter1"
      prevTitle="פרק 1"
      chapterNumber={1}
      sectionNumber={1}
    >
      <p>התוכן שלכם כאן...</p>

      <h2>כותרת משנה</h2>
      <p>עוד תוכן...</p>

      <CodeExample language="javascript">
{`// דוגמת קוד
console.log("שלום עולם!");`}
      </CodeExample>

      <blockquote>
        <strong>שימו לב:</strong> הערה חשובה
      </blockquote>
    </GuideSection>
  );
};

export default Section1;
```

### הוספת רכיבים אינטראקטיביים

ניתן ליצור רכיבים אינטראקטיביים בתיקייה `src/components/InteractiveDemo/`:

```jsx
import React, { useState } from 'react';
import styles from './MyDemo.module.css';

const MyDemo = () => {
  const [value, setValue] = useState('');

  return (
    <div className={styles.demo}>
      <input 
        value={value} 
        onChange={(e) => setValue(e.target.value)}
        placeholder="הזינו טקסט..."
      />
      <p>הטקסט שלכם: {value}</p>
    </div>
  );
};

export default MyDemo;
```

## 🌐 פריסה ל-GitHub Pages

### הכנה לפריסה

1. **יצירת Repository ב-GitHub:**
   - צרו repository חדש ב-GitHub
   - העלו את הקוד לrepo

2. **עדכון כתובת האתר בpackage.json:**
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME"
   }
   ```

### פריסה

```bash
# פריסה ראשונית
npm run deploy
```

הפקודה תבנה את הפרויקט ותעלה אותו לbranch `gh-pages` ב-GitHub.

### הפעלת GitHub Pages

1. עברו לעמוד הrepo ב-GitHub
2. לחצו על **Settings**
3. גללו למטה ל**Pages**
4. תחת **Source** בחרו **Deploy from a branch**
5. בחרו **Branch: gh-pages** ו**/ (root)**
6. לחצו **Save**

האתר יהיה זמין תוך מספר דקות בכתובת: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

## 📱 הטמעה ב-Monday.com

1. **פתחו את Monday.com**
2. **הוסיפו Widget חדש:**
   - לחצו על **+ Add Widget**
   - בחרו **Embed Everything**

3. **הזינו את כתובת האתר:**
   - הדביקו את כתובת האתר מGitHub Pages
   - לחצו **Add to Board**

4. **התאמת גודל:**
   - גררו את פינות הwidget להתאמת הגודל
   - מומלץ: רוחב מלא, גובה 600-800px

## 🎨 התאמה אישית

### שינוי צבעים

ערכו את הקובץ `src/styles/variables.css`:

```css
:root {
  --primary-color: #007bff;    /* צבע ראשי */
  --secondary-color: #6c757d;  /* צבע משני */
  --success-color: #28a745;    /* צבע הצלחה */
  /* ... */
}
```

### הוספת פונטים

1. הוסיפו לינק לפונט ב`public/index.html`
2. עדכנו את המשתנה `--font-family-sans-serif` ב`variables.css`

### עריכת סגנונות

כל רכיב משתמש ב-CSS Modules:
- `Component.module.css` - סגנונות ספציפיים לרכיב
- `src/styles/globals.css` - סגנונות גלובליים
- `src/styles/utilities.css` - כלי עזר CSS

## 🔧 פתרון בעיות נפוצות

### בעיה: הדף לא נטען ב-GitHub Pages
**פתרון:** וודאו ש:
- השתמשתם ב-`HashRouter` במקום `BrowserRouter`
- הכתובת ב`package.json` נכונה
- הbranch `gh-pages` קיים

### בעיה: סגנונות לא נטענים
**פתרון:** וודאו ש:
- כל קבצי ה-CSS מיובאים ב`index.css`
- נתיב הקבצים נכון
- השתמשתם במשתני CSS

### בעיה: ניווט לא עובד
**פתרון:** וודאו ש:
- כל הroutes מוגדרים ב`App.js`
- שמות הרכיבים תואמים לimports
- השתמשתם ב-`HashRouter`

## 📚 טכנולוגיות בשימוש

- **React** - ספריית JavaScript לבניית ממשקי משתמש
- **React Router** - ניווט client-side
- **CSS Modules** - סגנונות מקומיים לרכיבים
- **react-syntax-highlighter** - הדגשת תחביר לקוד
- **clsx** - ניהול classes דינמי
- **gh-pages** - פריסה ל-GitHub Pages

## 📄 רישיון

פרויקט זה זמין תחת רישיון MIT. ראו קובץ LICENSE לפרטים נוספים.

---

**צריכים עזרה?** פתחו Issue ב-GitHub או צרו קשר עם המפתחים.