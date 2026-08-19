# Corrective Cooling — Website

A premium, heavily animated marketing site for Corrective Cooling LLC
(Brandon, MS), built with Next.js 16 (App Router), Tailwind CSS v4, and
anime.js v4.

## Stack

- **Next.js 16** — App Router, Server Components by default
- **Tailwind CSS v4** — CSS-first theme via `@theme inline` in `app/globals.css`
- **anime.js v4** — all motion: scroll reveals, magnetic buttons, the
  interactive Comfort Dial, marquee, counters, parallax
- **lucide-react** — icon system
- **@fontsource/outfit** + **@fontsource/inter** — self-hosted fonts (no
  runtime dependency on Google Fonts, so builds work offline/behind proxies)

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
```

```bash
npm run build      # production build, statically generates all pages
npm run start       # serve the production build locally
npm run lint         # eslint (0 errors on the shipped code)
```

## Structure

```
app/                 routes: / /about /services /contact + sitemap, robots,
                      dynamic favicon (icon.tsx) and OG image
components/           shared UI (Navbar, Footer, ComfortDial, MagneticButton,
                      Reveal, SplitReveal, Illustrations, CustomCursor…)
components/home/      homepage-only sections
components/about/     about-page sections
components/services/  services-page sections
components/contact/   contact form + info grid
data/                 business info, nav links, services, page copy —
                      edit these to update content without touching markup
lib/motion.ts         reusable anime.js hooks (useReveal, useMagnetic,
                      useCounter, useParallax) — all respect
                      prefers-reduced-motion
```

## Editing content

Business details (phone, email, address, Facebook, service area) live in
`data/business.ts`. Services live in `data/services.ts`. Process steps and
value props live in `data/content.ts`. No copy is hardcoded elsewhere.

## Notes for deployment

- Update `siteUrl` in `app/layout.tsx`, `app/sitemap.ts`, and `app/robots.ts`
  once a real domain is chosen (currently a placeholder).
- The contact form submits via a `mailto:` link (no backend). Swap
  `components/contact/ContactForm.tsx` for a real endpoint/service (e.g. a
  form API route or a provider like Formspree) when ready.
- The hero's ambient background image is `public/images/thermal-wash.webp`.
- All animation respects `prefers-reduced-motion: reduce`.
