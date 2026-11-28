# nmartinezucb.github.io

The homepage for **mrmartinez.org**: a link-in-bio style page where students, seniors, and families can find college advising resources.

## Changing the links

The page reads its links from the Google Sheet **Homepage links** in the "Mr Martinez Web" Drive folder. Add a row and it shows up on the next page load. Columns: Title, URL, Note, Section, Audience (`students`, `seniors`, `families`, comma separated, blank for everyone), Featured (`yes` for a gold button at the top).

The sheet must be shared as "Anyone with the link: Viewer". If it can't be loaded, the page falls back to the copy in `links.js`.

## Side projects

These are their own repos, served under this domain by GitHub Pages:

- `/college-support/` — the support ticket system ([repo](https://github.com/nmartinezucb/college-support))
- `/decision-day-2026/` — the Decision Day map ([repo](https://github.com/nmartinezucb/decision-day-2026))

Each one needs GitHub Pages turned on in its own repo (Settings → Pages → deploy from `main`).
