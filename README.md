# Angie In Tech

Personal brand website for [Angie In Tech](https://angieintech.com) — websites, automations, and AI-powered products by Angelica Roque.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

Copy `.env.example` to `.env.local` and customize as needed:

```bash
cp .env.example .env.local
```

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_CAL_LINK` | Calendar booking URL | `https://cal.com/angelica` |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Contact email | `hello@angieintech.com` |
| `NEXT_PUBLIC_INSTAGRAM_URL` | Instagram profile URL | `https://instagram.com/angieintech` |
| `NEXT_PUBLIC_TIKTOK_URL` | TikTok profile URL | (placeholder) |
| `NEXT_PUBLIC_YOUTUBE_URL` | YouTube channel URL | (placeholder) |

## Images

Place or replace images in `public/images/`:

| File | Purpose |
|------|---------|
| `angelica-headshot.png` | Professional photo for hero & about |
| `inara-health.png` | Inara Health website screenshot |
| `reflection-health.png` | Reflection Health Group screenshot |
| `oss-network.png` | OSS Network app screenshot |
| `builderhub.png` | BuilderHub platform screenshot |
| `oss-network-logo.png` | OSS Network logo (optional) |

## Deploy to Vercel

```bash
vercel --prod --scope angelicaroque29s-projects
```

## Customize Before Publishing

1. Replace headshot with your best professional photo
2. Update client project screenshots if sites change
3. Set real TikTok and YouTube URLs
4. Confirm Cal.com link is active
5. Add custom domain in Vercel project settings
