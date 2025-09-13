# תבנית לעריכת תוכן המדריך

## הוראות עריכה מהירות

### שינוי כותרות פרקים

1. **ניווט** - `src/components/Navigation/Navigation.jsx` שורה 23:
```javascript
const chapters = [
  { num: 1, title: "הכותרת החדשה שלכם" },
  // ...
];
```

2. **דף הבית** - `src/pages/Home/Home.jsx` שורה 7:
```javascript
const chapters = [
  { num: 1, title: "הכותרת החדשה שלכם", description: "תיאור הפרק" },
  // ...
];
```

### עריכת תוכן סעיף

כל סעיף נמצא ב: `src/pages/Chapter[מספר]/Section[מספר].jsx`

#### מבנה בסיסי של סעיף:

```jsx
import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const Section1 = () => {
  return (
    <GuideSection 
      title="כותרת הסעיף"
      nextPath="/chapter1/section2"
      nextTitle="סעיף 1.2"
      prevPath="/chapter1"
      prevTitle="פרק 1"
      chapterNumber={1}
      sectionNumber={1}
    >
      {/* התוכן שלכם כאן */}
      
      <p>פסקה רגילה</p>
      
      <h2>כותרת משנה</h2>
      
      <ul>
        <li>פריט ברשימה</li>
        <li>פריט נוסף</li>
      </ul>

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

### רכיבים זמינים

1. **`<CodeExample language="javascript">`** - הצגת קוד עם הדגשה
2. **`<blockquote>`** - הערות חשובות
3. **HTML רגיל** - `<p>`, `<h2>`, `<ul>`, `<ol>`, `<table>` וכו'

### שפות נתמכות בקוד

- `javascript`
- `jsx`
- `html`
- `css`
- `json`
- `bash`
- `python`
- `java`
- `csharp`
- `php`

### דוגמאות תוכן

#### טבלה:
```jsx
<table>
  <thead>
    <tr>
      <th>עמודה 1</th>
      <th>עמודה 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>תוכן 1</td>
      <td>תוכן 2</td>
    </tr>
  </tbody>
</table>
```

#### רשימה ממוספרת:
```jsx
<ol>
  <li>שלב ראשון</li>
  <li>שלב שני</li>
  <li>שלב שלישי</li>
</ol>
```

#### הדגשות:
```jsx
<p>
  טקסט רגיל עם <strong>הדגשה חזקה</strong> ו<em>הדגשה רגילה</em>
</p>
```

## מבנה הפרקים המומלץ

### עמוד הפרק (ChapterIndex.jsx)
- מבוא לפרק
- רשימת הנושאים
- קישורים לסעיפים
- טיפ או הערה

### סעיף 1 - יסודות
- הקדמה לנושא
- מושגי יסוד
- דוגמה בסיסית

### סעיף 2 - העמקה
- פירוט הנושא
- דוגמאות מתקדמות
- שימושים נפוצים

### סעיף 3 - יישום
- דוגמאות מעשיות
- בעיות נפוצות ופתרונות
- טיפים מתקדמים

### סעיף 4 - סיכום
- סיכום הפרק
- נקודות מפתח
- הכנה לפרק הבא

## טיפים לכתיבה

1. **השתמשו בכותרות ברורות** - h2, h3 לחלוקת התוכן
2. **הוסיפו דוגמאות קוד** - לכל מושג חשוב
3. **השתמשו בblockquotes** - להערות וטיפים חשובים
4. **חלקו לפסקאות קצרות** - לקריאה נוחה
5. **הוסיפו תרגילים** - בסוף כל סעיף
