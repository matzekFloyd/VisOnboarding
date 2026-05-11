# VisOnboarding

[![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

VisOnboarding is a Next.js web app that walks users through a structured data visualization onboarding flow. It starts with an `/assessment` phase (answer questions based on graphs), then shows an `/onboarding` tour with step-by-step explanations and interactive charts, followed by a `/visualisation` task (asset tracking / temporal development). Assessment results can be persisted to Firebase Firestore and reviewed on `/results`.

## Contributing
See [`CONTRIBUTING.md`](CONTRIBUTING.md) for contribution guidelines.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Fill in the Firebase values (used by the app):
     ```bash
     NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
     NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
     ```

### Local Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

SPA routing for static hosts is handled by `public/_redirects` (copied during `npm run build` to `build/_redirects`).

## License
Licensed under the MIT License. See [LICENSE](LICENSE) for details.