# Luv Kush Vatika — Luxury Wedding Venue Website

A premium, editorial-luxury wedding venue website built with Next.js 16, TypeScript, Tailwind CSS v4, and Framer Motion.

## Quick Start

```bash
npm install
npm run dev        # Starts at http://localhost:3000 (Turbopack)
npm run build      # Production build (Webpack)
npm start          # Serve production build
```

## Architecture

```
/app
  /(site)/layout.tsx          → Header, Footer, Floating CTAs, JSON-LD
  /(site)/page.tsx            → Home (14 sections)
  /(site)/about/              → Heritage story, philosophy
  /(site)/venues/             → Overview of all spaces
  /(site)/venues/[slug]/      → Pool Lawn, Lawn 1–4, Grand Ballroom, Lounge
  /(site)/weddings/           → Overview of celebration types
  /(site)/weddings/[slug]/    → Hindu, Muslim, Sikh/Punjabi, Pre-wedding, Corporate
  /(site)/accommodation/      → Guest rooms & cottages
  /(site)/dining/             → Catering & sample menus
  /(site)/gallery/            → Filterable masonry + lightbox
  /(site)/contact/            → Full enquiry form + map
  /api/enquiry/route.ts       → Form handler (Zod, honeypot, rate-limit)
/components/                  → 38+ reusable components
/lib/constants.ts             → Single source of truth (all brand data)
/lib/motion.ts                → Framer Motion animation presets
/lib/whatsapp.ts              → WhatsApp deep link helper
```

## Replacing Placeholders with Real Images

Every image slot renders as an elegant gradient placeholder with a descriptive label. To replace:

1. Add your image to `/public/images/` (or use `next/image` with remote URLs)
2. Find the `<Placeholder label="..." />` in the component
3. Replace it with `<Image src="/images/your-file.jpg" alt="..." fill className="object-cover" />`

### Image Manifest (what to shoot/collect)

```
[Hero Cinematic Video — drone/venue golden-hour reel]
[Hero Image — grand lawn at golden hour]
[Logo / Wordmark Image]
[Venue Aerial / Lawn Image]
[Pool Lawn Image] [Lawn 1 Image] [Lawn 2 Image] [Lawn 3 Image] [Lawn 4 Image]
[Grand Ballroom Image] [Pre-function Lounge Image]
[Wedding Décor Image] [Mandap / Stage Image] [Baraat Image]
[Plated Cuisine Image] [Buffet Spread Image]
[Cottage / Room Image — AC] [Room Image — Non-AC]
[Couple Portrait Image 1–3]
[Gallery Image 1–24] (categorized: Lawns / Ballroom / Décor / Couples / Pool)
[Menu Background Image]
[Twilight Lawn Image — CTA band]
[OG Share Image — 1200x630]
[Favicon]
[Brochure PDF]
```

## Replacing the Brand Font

1. Get the exact typeface from the owner's logo
2. Add the font file to `/public/fonts/`
3. In `/app/layout.tsx`, use `next/font/local` to load it
4. In `/app/globals.css`, update `--font-wordmark` to point to the new font
5. Look for the `/* TODO: replace --font-wordmark */` comment

## Environment Variables

Create `.env.local`:

```env
# Email (Resend) — uncomment the email block in /app/api/enquiry/route.ts
RESEND_API_KEY=your_key
OWNER_EMAIL=owner@lavkushvatika.com

# Optional: Google Sheet/CRM webhook
GOOGLE_SHEET_WEBHOOK_URL=https://...

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXX
```

## Deploy to Vercel

```bash
npx vercel
```

Or connect the repo to Vercel Dashboard → it auto-deploys on push.

## Tech Stack

- **Next.js 16** (App Router, SSG/ISR)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** (scroll reveals, hero animations, page transitions)
- **Lenis** (smooth scroll)
- **React Hook Form + Zod** (form validation)
- **Resend** (email delivery, commented out until configured)

## Key Design Decisions

- **Single source of truth**: All brand data lives in `/lib/constants.ts`
- **No dummy links**: Every link goes to a real page or external URL
- **No zoom-lock**: Viewport meta never uses `maximum-scale` or `user-scalable=no`
- **Mobile-first**: Sticky CTA bar on mobile, floating WhatsApp on desktop
- **Reduced motion**: All animations respect `prefers-reduced-motion`
- **Lighthouse-ready**: SSG pages, lazy-loaded map, self-hosted fonts, minimal JS

---

Built with care for Luv Kush Vatika, Kanpur.
