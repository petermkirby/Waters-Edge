# Water's Edge Plumbing & Heating

Website for Water's Edge Plumbing & Heating, serving the South Shore of Massachusetts.

## Project Structure

```
waters-edge-plumbing/
├── index.html              # Main site (all pages in one file, JS-routed)
├── assets/
│   ├── css/
│   │   └── style.css       # All styles
│   ├── js/
│   │   └── main.js         # Page routing + form handling
│   └── images/
│       ├── logo.jpg         # Water's Edge logo
│       ├── banner.jpg       # Hero banner image
│       └── (add more here) # Team photos, service images, etc.
└── README.md
```

## Pages

The site uses a single `index.html` with JavaScript-based page routing (no server required). Three pages are included:

- **Home** — Hero, services overview, contact form, service area
- **About** — Owner bio (Jon Harght), company values, license info
- **Services** — Full list of 10 services with descriptions

## Running Locally

Just open `index.html` in any browser — no build step or server needed.

```bash
open index.html
# or
npx serve .
```

## Deploying to GitHub Pages

1. Push this folder to a GitHub repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Site will be live at `https://yourusername.github.io/waters-edge-plumbing/`

## To-Do / Next Steps

- [ ] Add real owner/team photo to About page (`assets/images/team.jpg`)
- [ ] Add company address (currently placeholder: Marshfield, MA 02050)
- [ ] Connect contact form to a real backend (Formspree, Netlify Forms, etc.)
- [ ] Add Google Maps embed to Contact section
- [ ] Add Google Reviews widget
- [ ] Consider adding a logo PNG with transparent background for header
- [ ] SEO: Add `og:image` meta tags, Google Search Console verification
- [ ] Add favicon

## Brand Colors

| Name       | Hex       | Usage                        |
|------------|-----------|------------------------------|
| Navy       | `#1e3a5f` | Primary, backgrounds, text   |
| Orange     | `#f5820d` | CTAs, accents, labels        |
| Orange-Red | `#e84117` | Hover states                 |
| Sky Blue   | `#00aadd` | Waves, ribbons, water accents|

## Contact Info

- **Phone:** (732) 644-9700
- **Email:** info@watersedgeplumbandheat.com
- **Owner:** Jon Harght
- **License:** MA Master Plumber #16017-PL-M
