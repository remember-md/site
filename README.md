# Remember — Presentation Site

Modern presentation site for the [Remember](https://github.com/remember-md/remember) plugin — your AI agent's memory.

## Tech Stack

- **Next.js 15** (App Router, React 19)
- **Tailwind CSS** (utility-first styling)
- **Remotion** (React-based animations via `@remotion/player`)
- **Framer Motion** (scroll animations & micro-interactions)
- **TypeScript**

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

## Deploy

This site is Vercel-ready. Just connect the repo:

```bash
npx vercel
```

Or push to GitHub and import on [vercel.com](https://vercel.com).

## Structure

```
app/          → Next.js App Router pages
components/   → React components (Hero, Features, etc.)
remotion/     → Remotion animation compositions
```

## License

MIT
