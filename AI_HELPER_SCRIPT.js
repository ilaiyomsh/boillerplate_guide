/**
 * AI Helper Script - מדריך אינטראקטיבי
 * סקריפט עזר לסוכן AI לניהול המדריך
 */

// מידע על מבנה הפרויקט
const PROJECT_STRUCTURE = {
  totalChapters: 8,
  sectionsPerChapter: 4,
  
  // קבצים לעדכון כותרות
  navigationFile: 'src/components/Navigation/Navigation.jsx',
  homeFile: 'src/pages/Home/Home.jsx',
  
  // תבנית נתיבי קבצים
  chapterPath: (num) => `src/pages/Chapter${num}/`,
  chapterIndexFile: (num) => `src/pages/Chapter${num}/ChapterIndex.jsx`,
  sectionFile: (chapter, section) => `src/pages/Chapter${chapter}/Section${section}.jsx`,
  
  // קבצי ראוטינג ומצב
  appFile: 'src/App.js',
  progressContextFile: 'src/context/ProgressContext.js'
};

// פונקציות עזר לחישוב ניווט
const NavigationHelper = {
  // חישוב נתיב הפרק הקודם
  getPrevChapterPath: (chapterNum) => {
    return chapterNum > 1 ? `/chapter${chapterNum - 1}/section4` : '/';
  },
  
  // חישוב כותרת הפרק הקודם
  getPrevChapterTitle: (chapterNum) => {
    return chapterNum > 1 ? `סעיף ${chapterNum - 1}.4` : 'בית';
  },
  
  // חישוב נתיב הפרק הבא
  getNextChapterPath: (chapterNum) => {
    return chapterNum < PROJECT_STRUCTURE.totalChapters ? `/chapter${chapterNum + 1}` : '/';
  },
  
  // חישוב כותרת הפרק הבא
  getNextChapterTitle: (chapterNum) => {
    return chapterNum < PROJECT_STRUCTURE.totalChapters ? `פרק ${chapterNum + 1}` : 'בית';
  },
  
  // חישוב ניווט סעיף
  getSectionNavigation: (chapterNum, sectionNum) => {
    const navigation = {
      chapterNumber: chapterNum,
      sectionNumber: sectionNum
    };
    
    if (sectionNum === 1) {
      navigation.prevPath = `/chapter${chapterNum}`;
      navigation.prevTitle = `פרק ${chapterNum}`;
    } else {
      navigation.prevPath = `/chapter${chapterNum}/section${sectionNum - 1}`;
      navigation.prevTitle = `סעיף ${chapterNum}.${sectionNum - 1}`;
    }
    
    if (sectionNum === 4) {
      if (chapterNum < PROJECT_STRUCTURE.totalChapters) {
        navigation.nextPath = `/chapter${chapterNum + 1}`;
        navigation.nextTitle = `פרק ${chapterNum + 1}`;
      } else {
        navigation.nextPath = '/';
        navigation.nextTitle = 'בית';
      }
    } else {
      navigation.nextPath = `/chapter${chapterNum}/section${sectionNum + 1}`;
      navigation.nextTitle = `סעיף ${chapterNum}.${sectionNum + 1}`;
    }
    
    return navigation;
  }
};

// תבניות קוד לסוכן AI
const CodeTemplates = {
  // תבנית ChapterIndex
  chapterIndex: (chapterNum, title, intro, objectives, sectionTitles) => `import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from '../../components/GuideSection/GuideSection';

const ChapterIndex = () => {
  return (
    <GuideSection 
      title="פרק ${chapterNum}: ${title}"
      nextPath="/chapter${chapterNum}/section1"
      nextTitle="סעיף 1"
      prevPath="${NavigationHelper.getPrevChapterPath(chapterNum)}"
      prevTitle="${NavigationHelper.getPrevChapterTitle(chapterNum)}"
      chapterNumber={${chapterNum}}
    >
      <p>
        ${intro}
      </p>

      <h2>מה נלמד בפרק זה?</h2>
      <ul>
        ${objectives.map(obj => `<li>${obj}</li>`).join('\n        ')}
      </ul>

      <h2>סעיפי הפרק</h2>
      <div className="chapter-sections">
        ${sectionTitles.map((sectionTitle, index) => `
        <Link to="/chapter${chapterNum}/section${index + 1}" className="section-link">
          <h3>סעיף ${chapterNum}.${index + 1}: ${sectionTitle.title}</h3>
          <p>${sectionTitle.description}</p>
        </Link>`).join('')}
      </div>

      <blockquote>
        <strong>טיפ:</strong> מומלץ לעבור על הסעיפים בסדר, כיון שכל סעיף נשען על הידע מהסעיפים הקודמים.
      </blockquote>
    </GuideSection>
  );
};

export default ChapterIndex;`,

  // תבנית Section
  section: (chapterNum, sectionNum, title, content) => {
    const nav = NavigationHelper.getSectionNavigation(chapterNum, sectionNum);
    
    return `import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';
import CodeExample from '../../components/CodeExample/CodeExample';

const Section${sectionNum} = () => {
  return (
    <GuideSection 
      title="סעיף ${chapterNum}.${sectionNum}: ${title}"
      nextPath="${nav.nextPath}"
      nextTitle="${nav.nextTitle}"
      prevPath="${nav.prevPath}"
      prevTitle="${nav.prevTitle}"
      chapterNumber={${chapterNum}}
      sectionNumber={${sectionNum}}
    >
      ${content}
    </GuideSection>
  );
};

export default Section${sectionNum};`;
  },

  // תבנית דוגמת קוד
  codeExample: (language, code) => `      <CodeExample language="${language}">
{${"`"}${code}${"`"}}
      </CodeExample>`,

  // תבנית הערה חשובה
  note: (type, content) => `      <blockquote>
        <strong>${type}:</strong> ${content}
      </blockquote>`
};

// פונקציות עדכון
const UpdateFunctions = {
  // עדכון כותרות בניווט
  updateNavigationTitles: (chapters) => {
    const navigationArray = chapters.map(chapter => 
      `  { num: ${chapter.num}, title: "${chapter.title}" }`
    ).join(',\n');
    
    return `const chapters = [\n${navigationArray}\n];`;
  },
  
  // עדכון כותרות בדף הבית
  updateHomeTitles: (chapters) => {
    const homeArray = chapters.map(chapter => 
      `  { num: ${chapter.num}, title: "${chapter.title}", description: "${chapter.description}" }`
    ).join(',\n');
    
    return `const chapters = [\n${homeArray}\n];`;
  },
  
  // חישוב סך הסעיפים
  calculateTotalSections: (totalChapters) => {
    // כל פרק: 1 עמוד פרק + 4 סעיפים = 5
    // פחות דף הבית = -1
    return (totalChapters * 5) - 1;
  }
};

// רשימת שפות נתמכות לקוד
const SUPPORTED_LANGUAGES = [
  'javascript', 'jsx', 'typescript', 'tsx', 
  'html', 'css', 'scss', 'json', 'markdown',
  'bash', 'shell', 'python', 'java', 'csharp',
  'php', 'sql', 'xml', 'yaml', 'dockerfile'
];

// אלמנטי HTML מותרים
const ALLOWED_HTML_ELEMENTS = [
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'strong', 'em', 'code',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'blockquote', 'a[href,target,rel]'
];

// סוגי הערות
const NOTE_TYPES = [
  'שימו לב', 'טיפ', 'אזהרה', 'חשוב', 'לזכור',
  'דוגמה', 'תרגיל', 'סיכום', 'המשך'
];

// ייצוא לשימוש
module.exports = {
  PROJECT_STRUCTURE,
  NavigationHelper,
  CodeTemplates,
  UpdateFunctions,
  SUPPORTED_LANGUAGES,
  ALLOWED_HTML_ELEMENTS,
  NOTE_TYPES
};

// דוגמאות שימוש לסוכן AI:

/* 
// 1. יצירת סעיף חדש
const newSectionContent = CodeTemplates.section(
  1, // מספר פרק
  1, // מספר סעיף
  "כותרת הסעיף", // כותרת
  `<p>תוכן הסעיף כאן...</p>
  
  ${CodeTemplates.codeExample('javascript', 'console.log("שלום עולם!");')}
  
  ${CodeTemplates.note('שימו לב', 'זוהי הערה חשובה')}`
);

// 2. חישוב ניווט לסעיף
const navigation = NavigationHelper.getSectionNavigation(2, 3);
// תוצאה: { prevPath: '/chapter2/section2', nextPath: '/chapter2/section4', ... }

// 3. עדכון כותרות ניווט
const newChapters = [
  { num: 1, title: "כותרת חדשה לפרק 1" },
  { num: 2, title: "כותרת חדשה לפרק 2" }
];
const navigationCode = UpdateFunctions.updateNavigationTitles(newChapters);

// 4. חישוב סך הסעיפים עבור 10 פרקים
const totalSections = UpdateFunctions.calculateTotalSections(10);
// תוצאה: 49
*/
