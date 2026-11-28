// Edit this file to change what shows on the homepage.
//
// Each link has:
//   title:    text on the button
//   url:      where it goes
//   note:     (optional) one short line under the title
//   category: which section it appears in (must match a name in CATEGORIES)
//   audience: who it is for. Any of: 'students', 'seniors', 'families'.
//             Leave it as [] to show it for everyone.
//   featured: (optional) true pins it to the top, above the sections.

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
