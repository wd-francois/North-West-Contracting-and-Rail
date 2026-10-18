# Norwest Contracting & Rail website

Static website built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com).

## Commands

```bash
npm install       # first time only
npm run dev       # local preview at http://localhost:4321
npm run build     # production build into ./dist
npm run preview   # preview the production build
```

> Use `npm run …` rather than `npx astro …`. The `&` in this folder's name breaks npm's Windows shims, so the scripts call Astro directly.

## Common updates

| What | Where |
| --- | --- |
| Phone, email, ABN, social links, form handler | `src/data/site.ts` (`site`) |
| Team contacts (Contact page) | `src/data/site.ts` (`team`) and photos in `src/assets/team/` |
| Client logos | `src/data/site.ts` (`clients`) and files in `public/clients/` (`large: true` shows a logo bigger) |
| Capability statement | Replace `public/docs/nwcr-capability-statement.pdf` (keep the file name) |
| Rail page photos | Replace `src/assets/photos/rail-1.jpg`, `rail-2.jpg`, `rail-3.jpg` |
| Navigation | `src/data/site.ts` (`nav`) |

Photos in `src/assets/` are automatically resized and converted to WebP at build time.

## Contact form

The site is static, so by default the form opens the visitor's email app with the message filled in, addressed to `admin@nwcr.com.au`.
To have messages sent directly instead, create a free form endpoint (e.g. Formspree or Web3Forms) and paste its URL into `formEndpoint` in `src/data/site.ts`.

## Deploying

Upload the contents of `dist/` to any static host (Netlify, Vercel, Cloudflare Pages or the existing cPanel host).
Old WordPress URLs redirect automatically: `/contracting/` → `/civil-contracting/`, `/careers/` → `/contact-us/`, and `/employee-portal-login/` → `/`.
