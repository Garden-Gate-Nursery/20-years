# Garden Gate Nursery — Tri-Cities homeowner site

Astro site for local Tri-Cities, Washington homeowners, intended for
`tricities.gardengatetrees.com`.

## Pages

| Path | Purpose |
|------|---------|
| `/` | Home |
| `/about` | About the nursery |
| `/gallery` | Photo gallery |
| `/contact` | Contact + Netlify form |
| `/contact/thanks` | Form success confirmation |
| `/20-years` | 20-year anniversary story |

Shop CTAs link to `https://gardengatetrees.com/shop` (external store).

## Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start local dev server |
| `astro dev --background` | Start background Astro dev server |
| `npm run build` | Build to `./dist` |
| `npm run preview` | Preview the production build |

## Deploy (Netlify)

1. Connect this repo to a Netlify site.
2. Build settings are in `netlify.toml` (`npm run build` → `dist`, Node 22).
3. Add custom domain `tricities.gardengatetrees.com` in Netlify and point DNS (CNAME) to Netlify.
4. **Contact form:** uses [Netlify Forms](https://docs.netlify.com/forms/setup/). After the first deploy, confirm the `contact` form appears under Netlify → Forms. Successful submissions redirect to `/contact/thanks`. Submissions only work on deployed Netlify URLs (not plain `astro preview` without the Netlify CLI).

## Project structure

```text
src/
  components/   # Shared UI (header, heroes, gallery, forms)
  constants/    # Site URLs, phone, address, nav
  data/         # Gallery and anniversary content
  layouts/      # Document shell
  pages/        # Routes
  styles/       # Brand tokens and global CSS
```
