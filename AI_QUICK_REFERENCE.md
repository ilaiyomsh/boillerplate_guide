# מדריך מהיר לסוכן AI - עריכת מדריך אינטראקטיבי

## עקרון על
- מקור האמת לתוכן: `docs/GUIDE_CONTENT.md` (נבנה לפי `docs/CONTENT_TEMPLATE.md`).
- מספר הפרקים והסעיפים נקבעים מהמסמך — יש ליצור/לעדכן/למחוק קבצים בהתאם.
- אין דוגמאות קוד. תמונות נטענות מ-`public/images/` ומוצגות כרכיב `ImageFigure`.

## קבצים חשובים
- `AI_EDITING_INSTRUCTIONS.md` — הוראות מלאות
- `AI_CONTENT_SCHEMA.json` — סכמת נתונים דינמית
- `AI_HELPER_SCRIPT.js` — פונקציות עזר (יצירה/ראוטינג/ניווט)

## זרימה מהירה
1) קרא/י את `docs/GUIDE_CONTENT.md` והפק/י:
   - רשימת פרקים ([NAVIGATION])
   - פרקים/סעיפים בפועל ([CHAPTER N] + [SECTION N.M])
   - רשומות תמונה לכל סעיף (שם קובץ/מלל/רוחב)
2) עדכן/י קוד:
   - צור/מחק תיקיות `src/pages/ChapterN/`
   - צור/עדכן `ChapterIndex.jsx` ו-`SectionM.jsx` לכל סעיף קיים
   - עדכן/י `src/App.js` — imports + routes רק עבור מה שקיים
   - עדכן/י `src/components/Navigation/Navigation.jsx` ו-`src/pages/Home/Home.jsx` לפי [NAVIGATION]
3) תמונות:
   - ודא/י שקבצים קיימים תחת `public/images/`
   - הוסף/הוסיפי לרכיבי הסעיפים שימוש ב-`ImageFigure` עם `src="/images/<file>"` ו-caption
4) בדיקות:
   - `npm run build`
   - `npm start` → ניווט תקין, ללא שגיאות

## דוגמאות מינימליות
- עדכון כותרת פרק ב-`Navigation.jsx`:
```js
const chapters = [
  { num: 1, title: "הכותרת החדשה" },
  // ... דינמי לפי המסמך
];
```
- יצירת סעיף:
```jsx
import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

const Section2 = () => {
  return (
    <GuideSection
      title="סעיף 1.2: כותרת הסעיף"
      nextPath="/chapter1/section3"
      nextTitle="סעיף 1.3"
      prevPath="/chapter1/section1"
      prevTitle="סעיף 1.1"
      chapterNumber={1}
      sectionNumber={2}
    >
      <p>תוכן הסעיף…</p>
    </GuideSection>
  );
};

export default Section2;
```

## חישוב ניווט (עקרונות)
- סעיף ראשון: prev → עמוד הפרק, next → הסעיף הבא
- סעיפים אמצעיים: prev/next לסעיף הקודם/הבא
- סעיף אחרון: next → פרק הבא או `/` אם זה הפרק האחרון
- פרק: prev → סעיף אחרון של הפרק הקודם או `/`, next → סעיף 1 של הפרק

זכור/זכרי: תמיד להתאים את המבנה לקובץ התוכן ולמחוק קבצים לא רלוונטיים. אין להשתמש ברכיבי קוד. התמקד/י בטקסט, תמונות והערות.
