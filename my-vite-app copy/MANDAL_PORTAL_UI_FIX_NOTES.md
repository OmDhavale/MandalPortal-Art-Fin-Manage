# Mandal Portal UI Fixes

## What changed
- Removed the duplicate GlobalNavbar render from the Mandal Portal route.
- Rebuilt the Mandal Portal navbar as one responsive header containing both the main website links and existing portal actions.
- Preserved the existing directory, analytics, inquiry, comparison and language callbacks.
- Added responsive collapse behavior for tablet/mobile widths.
- Harmonized the Mandal Portal background, typography, hero colors, search controls and cards with the warm charcoal/orange AFM marketing website styling.
- Kept GlobalNavbar unchanged for Home, Privacy Policy and Delete Account pages.

## Files changed
- `src/App.jsx`
- `src/components/Navbar.jsx`
- `src/App.css`
- `src/index.css`

## Run locally
```bash
npm install
npm run dev
```

## Note
Dependency installation/build could not be completed in the editing environment due to a package installation timeout. Please run the commands locally and check the browser console before deploying.
