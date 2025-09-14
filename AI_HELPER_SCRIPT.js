/**
 * AI Helper Script - מדריך אינטראקטיבי (דינמי)
 */

// מידע על מבנה הפרויקט (דינמי)
const PROJECT_STRUCTURE = {
  // נגזר מקובץ התוכן בפועל
  totalChapters: null,
  sectionsPerChapter: null,

  // קבצים לעדכון כותרות
  navigationFile: 'src/components/Navigation/Navigation.jsx',
  homeFile: 'src/pages/Home/Home.jsx',

  // תבנית נתיבי קבצים
  chapterPath: (num) => `src/pages/Chapter${num}/`,
  chapterIndexFile: (num) => `src/pages/Chapter${num}/ChapterIndex.jsx`,
  sectionFile: (chapter, section) => `src/pages/Chapter${chapter}/Section${section}.jsx`,

  // קובץ ראוטינג
  appFile: 'src/App.js'
};

// פונקציות עזר לחישוב ניווט (מותאם דינמית)
const NavigationHelper = {
  getPrevChapterPath: (chapterNum, lastSectionInPrev) => {
    return chapterNum > 1 ? `/chapter${chapterNum - 1}/section${lastSectionInPrev || 4}` : '/';
  },
  getPrevChapterTitle: (chapterNum, lastSectionInPrev) => {
    return chapterNum > 1 ? `סעיף ${chapterNum - 1}.${lastSectionInPrev || 4}` : 'בית';
  },
  getNextChapterPath: (chapterNum, totalChapters) => {
    return chapterNum < totalChapters ? `/chapter${chapterNum + 1}` : '/';
  },
  getNextChapterTitle: (chapterNum, totalChapters) => {
    return chapterNum < totalChapters ? `פרק ${chapterNum + 1}` : 'בית';
  },
  getSectionNavigation: (chapterNum, sectionNum, sectionsInChapter, totalChapters) => {
    const nav = { chapterNumber: chapterNum, sectionNumber: sectionNum };
    if (sectionNum === 1) {
      nav.prevPath = `/chapter${chapterNum}`;
      nav.prevTitle = `פרק ${chapterNum}`;
    } else {
      nav.prevPath = `/chapter${chapterNum}/section${sectionNum - 1}`;
      nav.prevTitle = `סעיף ${chapterNum}.${sectionNum - 1}`;
    }
    if (sectionNum === sectionsInChapter) {
      nav.nextPath = NavigationHelper.getNextChapterPath(chapterNum, totalChapters);
      nav.nextTitle = NavigationHelper.getNextChapterTitle(chapterNum, totalChapters);
    } else {
      nav.nextPath = `/chapter${chapterNum}/section${sectionNum + 1}`;
      nav.nextTitle = `סעיף ${chapterNum}.${sectionNum + 1}`;
    }
    return nav;
  }
};

// תבניות קוד לסוכן AI (ללא CodeExample)
const CodeTemplates = {
  chapterIndex: (chapterNum, title, intro, objectives, sectionTitles, lastSectionInPrev, totalChapters) => `import React from 'react';
import { Link } from 'react-router-dom';
import GuideSection from '../../components/GuideSection/GuideSection';

const ChapterIndex = () => {
  return (
    <GuideSection 
      title="פרק ${chapterNum}: ${title}"
      nextPath="/chapter${chapterNum}/section1"
      nextTitle="סעיף 1"
      prevPath="${NavigationHelper.getPrevChapterPath(chapterNum, lastSectionInPrev)}"
      prevTitle="${NavigationHelper.getPrevChapterTitle(chapterNum, lastSectionInPrev)}"
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
        ${sectionTitles.map((s, i) => `
        <Link to="/chapter${chapterNum}/section${i + 1}" className="section-link">
          <h3>סעיף ${chapterNum}.${i + 1}: ${s.title}</h3>
          <p>${s.description || ''}</p>
        </Link>`).join('')}
      </div>
    </GuideSection>
  );
};

export default ChapterIndex;`,

  section: (chapterNum, sectionNum, title, content, sectionsInChapter, totalChapters) => {
    const nav = NavigationHelper.getSectionNavigation(chapterNum, sectionNum, sectionsInChapter, totalChapters);
    return `import React from 'react';
import GuideSection from '../../components/GuideSection/GuideSection';

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

  note: (type, content) => `      <blockquote>
        <strong>${type}:</strong> ${content}
      </blockquote>`
};

// פונקציות עדכון
const UpdateFunctions = {
  updateNavigationTitles: (chapters) => {
    const navigationArray = chapters.map(ch => `  { num: ${ch.num}, title: "${ch.title}" }`).join(',\n');
    return `const chapters = [\n${navigationArray}\n];`;
  },
  updateHomeTitles: (chapters) => {
    const homeArray = chapters.map(ch => `  { num: ${ch.num}, title: "${ch.title}", description: "${ch.description || ''}" }`).join(',\n');
    return `const chapters = [\n${homeArray}\n];`;
  }
};

// אלמנטי HTML מותרים
const ALLOWED_HTML_ELEMENTS = [
  'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'ul', 'ol', 'li', 'strong', 'em',
  'table', 'thead', 'tbody', 'tr', 'th', 'td',
  'blockquote', 'a[href,target,rel]'
];

module.exports = {
  PROJECT_STRUCTURE,
  NavigationHelper,
  CodeTemplates,
  UpdateFunctions,
  ALLOWED_HTML_ELEMENTS
};
