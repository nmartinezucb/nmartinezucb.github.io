// The homepage reads its links from the Google Sheet "Homepage links"
// in the "Mr Martinez Web" Drive folder. Edit the sheet, not this file.
//
// Sheet columns (row 1 is the header):
//   Title     text on the button
//   URL       where it goes
//   Note      (optional) one short line under the title
//   Section   heading it appears under; sections show in the order they
//             first appear in the sheet
//   Audience  any of: students, seniors, families (comma separated).
//             Leave blank to show it for everyone.
//   Featured  "yes" pins it to the top as a gold button
//
// The sheet must be shared as "Anyone with the link: Viewer".
// If the sheet can't be reached, the page falls back to LINKS below.

const SHEET_ID = '1p6e72QfuMFfYlLslbVAujN_AuVZ3s_MbItXK8FyXR64';

// Fallback section order, used with LINKS below.
const CATEGORIES = [
  'Get help',
  'Applying to college',
  'Paying for college',
];

const AUDIENCES = [
  { id: 'all', label: 'Everyone' },
  { id: 'students', label: 'Students' },
  { id: 'seniors', label: 'Seniors' },
  { id: 'families', label: 'Families' },
];

// Fallback copy of the sheet, used only if it can't be loaded.
const LINKS = [
  {
    title: 'Get college application support',
    url: '/college-support/',
    note: 'Open a ticket and see where you are in line',
    category: 'Get help',
    audience: ['students', 'seniors'],
    featured: true,
  },
  {
    title: 'Decision Day map',
    url: '/decision-day-2026/',
    note: 'See where the class of 2026 is headed and add yourself',
    category: 'Get help',
    audience: ['seniors', 'families'],
    featured: true,
  },
  {
    title: 'UC Application',
    url: 'https://apply.universityofcalifornia.edu/',
    category: 'Applying to college',
    audience: ['seniors'],
  },
  {
    title: 'Cal State Apply',
    url: 'https://www.calstate.edu/apply',
    category: 'Applying to college',
    audience: ['seniors'],
  },
  {
    title: 'Common App',
    url: 'https://www.commonapp.org/',
    note: 'Private and out-of-state colleges',
    category: 'Applying to college',
    audience: ['seniors'],
  },
  {
    title: 'FAFSA',
    url: 'https://studentaid.gov/h/apply-for-aid/fafsa',
    note: 'Federal financial aid',
    category: 'Paying for college',
    audience: ['seniors', 'families'],
  },
  {
    title: 'California Dream Act Application',
    url: 'https://dream.csac.ca.gov/',
    note: 'State aid for students who don’t file the FAFSA',
    category: 'Paying for college',
    audience: ['seniors', 'families'],
  },
  {
    title: 'WebGrants (Cal Grant status)',
    url: 'https://mygrantinfo.csac.ca.gov/',
    category: 'Paying for college',
    audience: ['seniors', 'families'],
  },
];
