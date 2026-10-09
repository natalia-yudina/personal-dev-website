# Personal Website

A fast, modern personal website built with [Astro](https://astro.build).

## Pages

- **Home** — intro and call to action
- **About** — bio, skills, experience
- **Contact** — email and social links

```mermaid
flowchart TD
  visitor[Visitor]
  home["Home /"]
  about["About /about"]
  contact["Contact /contact"]
  layout[BaseLayout]
  header[Header]
  footer[Footer]
  seo[SEO]
  siteData["site.ts"]

  visitor --> home
  visitor --> about
  visitor --> contact
  home --> layout
  about --> layout
  contact --> layout
  layout --> header
  layout --> footer
  layout --> seo
  header --> siteData
  footer --> siteData
  seo --> siteData
  contact --> siteData
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) in your browser.