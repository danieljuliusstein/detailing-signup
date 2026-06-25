# Rinse — Founding Waitlist

Single-page waitlist site for solo mobile car detailers. Static HTML — no backend, no build step.

## Before you deploy

1. **Formspree** — configured (`mjgqypaa`). Test a real submit after deploy to confirm emails arrive in your Formspree inbox.

## Local preview

Open `index.html` in a browser, or run a local server:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Deploy to Vercel

### Option A — Vercel CLI

```bash
npm i -g vercel
cd detailingSignUP
vercel
```

Follow the prompts. Vercel will detect static files and deploy `index.html` as the root.

### Option B — Git + Vercel dashboard

1. Push this folder to a GitHub repo
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import the repo
4. Framework preset: **Other** (no build command needed)
5. Output directory: `.` (root)
6. Deploy

Your site will be live at `https://your-project.vercel.app`.

### Custom domain

In the Vercel project → **Settings → Domains**, add your domain and follow the DNS instructions.

## Deploy to Netlify

Drag the folder onto [app.netlify.com/drop](https://app.netlify.com/drop), or:

```bash
npx netlify deploy --prod --dir .
```

## Files

| File | Purpose |
|------|---------|
| `index.html` | Waitlist landing page (CSS + JS inline) |
| `privacy.html` | Minimal privacy policy for email collection |
| `README.md` | This file |

## Form behavior

- Email-only capture with client-side validation
- Submits to Formspree via `fetch` (no page redirect)
- Shows inline thank-you message and hides both forms on success
