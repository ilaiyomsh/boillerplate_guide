# מדריך מהיר לסוכן AI - עריכת מדריך אינטראקטיבי

## קבצים חשובים לסוכן AI
- `AI_EDITING_INSTRUCTIONS.md` - הוראות מפורטות לעריכה
- `AI_CONTENT_SCHEMA.json` - מבנה נתונים ותבניות
- `AI_HELPER_SCRIPT.js` - פונקציות עזר וקוד לדוגמה

## עריכה מהירה

### שינוי כותרת פרק
```javascript
// src/components/Navigation/Navigation.jsx - שורות 23-32
{ num: 1, title: "הכותרת החדשה" }

// src/pages/Home/Home.jsx - שורות 7-16  
{ num: 1, title: "הכותרת החדשה", description: "התיאור החדש" }
```

### עריכת תוכן סעיף
```jsx
// src/pages/Chapter1/Section1.jsx
<GuideSection title="סעיף 1.1: כותרת חדשה">
  <p>התוכן החדש...</p>
  
  <CodeExample language="javascript">
  {`console.log("דוגמה");`}
  </CodeExample>
  
  <blockquote>
    <strong>שימו לב:</strong> הערה חשובה
  </blockquote>
</GuideSection>
```

### הוספת פרק חדש
1. צור תיקייה: `src/pages/Chapter9/`
2. צור 5 קבצים: `ChapterIndex.jsx`, `Section1-4.jsx`
3. עדכן `src/App.js` - הוסף imports ו-routes
4. עדכן `src/context/ProgressContext.js` - שורה 8: `TOTAL_SECTIONS = 41`
5. עדכן Navigation ו-Home - הוסף פרק לarray

### שפות קוד נתמכות
`javascript`, `jsx`, `html`, `css`, `json`, `bash`, `python`, `java`, `csharp`, `php`, `sql`

### אלמנטי HTML מותרים
`<p>`, `<h2>`, `<h3>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<code>`, `<blockquote>`, `<table>`

### בדיקת תקינות
```bash
npm run build  # בדיקת build
npm start      # בדיקת שגיאות
```

## חישוב ניווט אוטומטי

### עמוד פרק
- **prevPath:** פרק > 1 ? `/chapter${פרק-1}/section4` : `/`  
- **nextPath:** `/chapter${פרק}/section1`

### סעיף ראשון
- **prevPath:** `/chapter${פרק}`
- **nextPath:** `/chapter${פרק}/section2`

### סעיף אחרון  
- **prevPath:** `/chapter${פרק}/section3`
- **nextPath:** פרק < 8 ? `/chapter${פרק+1}` : `/`

זכור: כל שינוי כותרת דורש עדכון ב-3 מקומות!
