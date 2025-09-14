# מדריך אינטראקטיבי - בוילר פלייט

זהו בוילר-פלייט למדריך אינטראקטיבי בנוי עם React, המיועד לפריסה ב-GitHub Pages ולהטמעה ב-Monday.com.

## 🚀 תכונות

- **ניווט אינטראקטיבי** עם פרקים מתקפלים
- **עיצוב רספונסיבי** לכל הגדלי המסכים
- **תמיכה בעברית** (RTL)
- **אופטימיזציה ל-GitHub Pages** עם HashRouter

## 📁 מבנה הפרויקט

```
src/
├── components/
│   ├── GuideSection/          # רכיב בסיסי לכל סעיף
│   ├── Navigation/            # תפריט ניווט
│   ├── InteractiveDemo/       # רכיבים אינטראקטיביים (אופציונלי)
│   └── ...
├── pages/
│   ├── Home/                  # דף הבית
│   └── Chapter[1..N]/         # פרקים דינמיים, נבנים לפי GUIDE_CONTENT (ChapterIndex + Section[1..M])
└── styles/
    ├── variables.css          # משתני CSS
    ├── globals.css            # סגנונות גלובליים
    └── utilities.css          # כלי עזר CSS
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

> ראה/י גם: `docs/README.md` ו-`docs/CONTENT_TEMPLATE.md` לעריכת תוכן עם Markdown.

### שינוי כותרות הפרקים (אופציונלי)
ברירת המחדל היא לעדכן דרך `docs/GUIDE_CONTENT.md`. ניתן גם לערוך ידנית ישירות ב־`Navigation.jsx` ו־`Home.jsx` אם מעוניינים.

### עריכת תוכן הפרקים

כל פרק נמצא בתיקייה `src/pages/Chapter[מספר]/`:

- **`ChapterIndex.jsx`** - עמוד הפרק הראשי עם רשימת הסעיפים
- **`Section1.jsx` - `Section4.jsx`** - 4 הסעיפים של הפרק

#### דוגמה לעריכת סעיף (ללא קוד):

```jsx
import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

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

      <blockquote>
        <strong>שימו לב:</strong> הערה חשובה
      </blockquote>
    </GuideSection>
  );
};

export default Section1;
```

### הוספת תמונות למדריך

- שים/י את קבצי התמונות בתיקייה `public/images/`.
- בתוכן (Markdown):
  - שימוש רגיל: `![כיתוב לתמונה](/images/example.png)`
  - שימוש מתקדם: `[image]: /images/example.png | כיתוב לתמונה | 720px`
- בצד ה-UI נעשה שימוש ברכיב רספונסיבי עם כיתוב (ImageFigure) בעת היישום.

## 📘 יצירת מדריך חדש – צעד אחר צעד

1) העתקת התבנית למסמך התוכן

```bash
cp docs/CONTENT_TEMPLATE.md docs/GUIDE_CONTENT.md
```

2) מילוי המסמך `docs/GUIDE_CONTENT.md`
- מלא/י את הכותרות ב-[META] וב-[NAVIGATION].
- לכל פרק/סעיף מלא/י את הטקסטים (אין צורך בדוגמאות קוד).
- תמונות: שים/י קבצים תחת `public/images/` והשתמש/י באחד מהפורמטים:
  - Markdown רגיל: `![כיתוב](/images/my-image.png)`
  - או שורה מובנית: `שם: my-image.png | מלל: כיתוב לתמונה | רוחב: 720px`

3) הפעלת הסוכן לעדכון הקוד
- הפעלה מהצ'אט: "עדכן תוכן מהקובץ docs/GUIDE_CONTENT.md".
- או מהטרמינל (טריגר קצר):

```bash
npm run apply-content
```

הסוכן יבצע עבורכם:
- ייצור/עדכון/מחיקה של תיקיות וקבצים תחת `src/pages/ChapterX/` לפי מספר הפרקים והסעיפים במסמך.
- עדכון `src/App.js` (imports + routes) בהתאמה למבנה בפועל.
- עדכון הניווט והעמוד הראשי: `src/components/Navigation/Navigation.jsx`, `src/pages/Home/Home.jsx`.
- הוספת תמונות לכל סעיף כרכיב `ImageFigure` עם הנתיב `/images/<file>`.

4) בדיקה מקומית

```bash
npm start
```
בדקו ניווט בין פרקים/סעיפים והתצוגה של תמונות/הערות.

5) עדכונים חוזרים
- ערכו שוב את `docs/GUIDE_CONTENT.md` לפי הצורך והריצו את שלב 3.

הערות חשובות
- מספר הפרקים והסעיפים דינמי ונקבע מהמסמך – קבצים מיותרים יימחקו אוטומטית.
- אין תמיכה בדוגמאות קוד; התוכן מורכב מטקסט, תמונות והערות.

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

## 🎨 התאמה אישית

### שינוי צבעים

ערכו את הקובץ `src/styles/variables.css`:

```css
:root {
  --primary-color: #0073ea;    /* צבע ראשי */
  --secondary-text-color: #676879;  /* טקסט משני */
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
- **clsx** - ניהול classes דינמי
- **gh-pages** - פריסה ל-GitHub Pages

## 📄 רישיון

פרויקט זה זמין תחת רישיון MIT. ראו קובץ LICENSE לפרטים נוספים.

---

**צריכים עזרה?** פתחו Issue ב-GitHub או צרו קשר עם המפתחים.