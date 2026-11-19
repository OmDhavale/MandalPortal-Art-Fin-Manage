# Art Finance Management Website Update

## Routes
- `/` — official promotional landing page
- `/mandal-portal` — existing Murtikar directory and Mandal Portal
- `/privacy-policy` — public Privacy Policy draft
- `/delete-account` — public account deletion instructions

## Configuration
Create/update `.env` in `my-vite-app`:

```env
VITE_API_URL=https://your-live-backend.example/api
VITE_PLAY_STORE_URL=https://play.google.com/store/apps/details?id=YOUR_PACKAGE_ID
VITE_SUPPORT_EMAIL=your-support-email@example.com
```

`VITE_PLAY_STORE_URL` can remain empty until the public Play Store listing is ready. The download CTA will show a Coming Soon message.

Only put public configuration in `VITE_*` variables. Never put API secrets or private credentials in frontend environment variables.

## Local development
From the `my-vite-app` directory:

```bash
npm install
npm run dev
```

## Netlify deployment
- Base directory: `MandalPortal-Art-Fin-Manage/my-vite-app` (if the repository root is the parent folder)
- Build command: `npm run build`
- Publish directory: `dist`
- Add the environment variables above in Netlify Site configuration.
- `public/_redirects` contains the SPA fallback so direct visits and refreshes on nested routes work.

## Important before publishing
The Privacy Policy page is a draft structure, not legal sign-off. The ZIP contains the website code but not the complete mobile app/backend implementation, so verify the actual app data collection, SDKs, database fields, hosting providers, retention/deletion behaviour and Google Play Data Safety answers before publishing the final policy.

The account deletion page currently documents an email-based request flow. Confirm that the support mailbox is monitored and that account deletion requests are actually processed. The page does not itself delete accounts.
