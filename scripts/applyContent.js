#!/usr/bin/env node
/**
 * applyContent.js
 * סקריפט CLI קצר: קורא docs/GUIDE_CONTENT.md ומדפיס הוראת הפעלה לסוכן.
 * (היישום המלא מתבצע ע"י הסוכן בצ'אט; זה טריגר נוח ב-npm)
 */

const fs = require('fs');
const path = require('path');

const contentPath = path.resolve(process.cwd(), 'docs', 'GUIDE_CONTENT.md');

if (!fs.existsSync(contentPath)) {
  console.error('לא נמצא docs/GUIDE_CONTENT.md. העתק/י את התבנית והשלם/י תוכן.');
  process.exit(1);
}

console.log('\n✅ נמצא קובץ תוכן: docs/GUIDE_CONTENT.md');
console.log('כדי להחיל את התוכן, כתבו כאן בצ\'אט:');
console.log('\n  עדכן תוכן מהקובץ docs/GUIDE_CONTENT.md\n');
console.log('הסוכן יעדכן קבצים, ניווט וראוטינג ויבצע בדיקות.');


