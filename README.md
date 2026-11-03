# Deslopper

Marketing site for Deslopper, a studio that redesigns vibecoded iOS apps and sites so they stop looking AI-made.

Next.js 16 (App Router) + Tailwind CSS 4, fully static.

## Run it

```bash
npm ci
npm run dev      # http://localhost:3000
npm run build && npm start
```

## Edit content

- Prices, turnaround, designer profile, email and booking link: `src/lib/site.ts`
- Sections: `src/components/` (`Hero`, `Work`, `Redline`, `Pricing`, `Process`, `About`, `Faq`, `Footer`)
- Before/after phone screens: `src/components/screens/`
- Colours and fonts: `src/app/globals.css` (`@theme` block) and `src/app/layout.tsx`

## Brand

- Mark: the AI sparkle, struck out with a red pencil (`src/components/Logo.tsx`, favicon in `src/app/icon.svg`)
- Footer wordmark: clean ink, visible immediately without JavaScript (`src/components/Wordmark.tsx`)
- Signature: red proof marks and margin notes, only where something was fixed
- Type: Instrument Serif for headlines, Instrument Sans for everything else, Geist Mono for meta. All three are self-hosted through pinned Fontsource packages; builds do not fetch Google Fonts

## Deploy

- Vercel: import the repo, no settings needed.
- VPS: `next.config.ts` sets `output: "standalone"`. After `npm run build`, copy `.next/standalone`, `.next/static` (into `.next/standalone/.next/static`) and `public` (into `.next/standalone/public`) to the server and run `node server.js` behind nginx or Caddy.

## Skills

`.claude/skills/` vendors [unslop](https://github.com/heydamir/unslop) and [reanimate](https://github.com/NiazMorshed2007/reanimate). See `.claude/skills/README.md`.

## Validation

Run `npm run build` and `npx eslint src`. The root lint command also includes vendored `.claude/skills` tooling with existing lint errors. Check the comparison controls, sample redline disclosure, mobile navigation, and page width at 320px, 390px, 768px and 1440px. Concept work is labeled and does not represent client results.
