# Bharathraj Subramanian, portfolio

Personal portfolio built with Astro, TypeScript and plain CSS. Content lives in `src/data/`.

```
npm install
npm run dev        # http://localhost:4321
npm run build      # static output in dist/
npm run preview    # serve dist/
npm run check      # type check
```

Build-time settings (see `.env.example`):

- `SITE_URL` the deployed address, used for canonical links, sitemap, robots.txt and the social image
- `PUBLIC_GA_ID` Google Analytics 4 ID, set in `.env.production`. Analytics only loads after a visitor accepts the consent bar

Deployed on Cloudflare Pages: build command `npm run build`, output directory `dist`.
