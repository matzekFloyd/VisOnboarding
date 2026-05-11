# VisOnboarding

A Next.js application for data visualization onboarding.

## Deployment to Netlify

This project is configured for automatic deployment to Netlify on pushes to the `master` branch.

### Setup Steps:

1. **Connect Repository to Netlify:**
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Netlify will automatically detect the `netlify.toml` configuration

2. **Configure Environment Variables:**
   In Netlify dashboard, go to Site Settings > Environment Variables and add:

   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_DATABASE_URL=https://your_project.firebaseio.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_measurement_id
   ```

3. **Deploy:**
   - Push to `master` branch
   - Netlify will automatically build and deploy
   - Your site will be live at the generated Netlify URL

### Build Configuration

The `netlify.toml` file configures:
- Build command: `npm run build`
- Publish directory: `build/`
- Node.js version: 18
- Security headers

The `public/_redirects` file handles SPA routing:
- Excludes Next.js assets (`/_next/*`, `/static/*`) from redirects
- Routes all other paths to `/index.html` for client-side routing

### Local Development

```bash
npm install
npm run dev
```

### Production Build

```bash
npm run build
```

The build outputs static files to the `build/` directory for deployment.